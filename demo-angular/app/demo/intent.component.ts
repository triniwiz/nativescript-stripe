import { ChangeDetectorRef, Component, ViewContainerRef, Input } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { CreditCardView, PaymentMethod, Stripe, Token, StripePaymentIntentParams, StripePaymentIntent } from "nativescript-stripe";
import { isAndroid } from "tns-core-modules/platform";
import { publishableKey, StripeService } from "./stripe.service";
import { alert } from "tns-core-modules/ui/dialogs";

import { ItentModalComponent } from './intent-modal.component'

@Component({
  selector: "stp-intent",
  moduleId: module.id,
  templateUrl: "./intent.component.html",
})
export class IntentComponent {
  payment: string;
  status: string;
  private stripe: Stripe;

  private _item = {
    price: 1200,
    currency: 'usd'
  };

  constructor(
    private stripeService: StripeService, 
    public changeDetectionRef: ChangeDetectorRef,
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef
  ) {
    if (-1 !== publishableKey.indexOf("pk_test_yours")) {
      throw new Error("publishableKey must be changed from placeholder");
    }
    this.stripe = new Stripe(publishableKey);
  }

  openModal() {
    this.modalService
      .showModal(ItentModalComponent, {
        fullscreen: true,
        viewContainerRef: this.vcRef
      });
  }

  registerCard(cardView: CreditCardView) {
    this._setStatus("Create Setup Intent...");
    this.stripeService.createSetupIntent().then((intent) => {

      this._setStatus("Create Payment Method...");
      this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
        if (error) return this._displayError(error);
        this._setStatus("Confirm Setup Intent...");
        this.stripe.confirmSetupIntent(pm.id, intent.secret, (error, setupIntent) => {
          if (error) this._displayError(error);
          this._setStatus(`Setup Intent Status => ${setupIntent.status}`);
        });
      });
    });
  }

  // Authenticate and charge on the UI
  // https://stripe.com/docs/payments/payment-intents/ios#automatic-confirmation-ios
  automaticConfirmPayment(cardView: CreditCardView) {
    this._setStatus("Create Payment Method...");
    this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
      if (error) return this._displayError(error);
      this._createPaymentIntent().then(p => {
        const piParams = new StripePaymentIntentParams();
        piParams.paymentMethodId = pm.id;
        piParams.clientSecret = p.secret;
        this._confirmPaymentIntent(piParams);
      });
    });
  }

  // Authenticate on the UI only, confirm charge on back-end
  // https://stripe.com/docs/payments/payment-intents/ios#handle-authentication-manual
  manualConfirmPayment(cardView: CreditCardView) {
    this._setStatus("Create Payment Method...");
    this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
      if (error) return this._displayError(error);

      this._setStatus("Create Payment Intent...");
      this.stripeService.capturePayment(pm.id, this._item.price).then(({ secret }) => {

        this._setStatus("Authenticate Payment Intent...");
        this.stripe.authenticatePaymentIntent(secret, null, (error, pintent) => {
          if (error) return this._displayError(error);
          if (pintent.requiresConfirmation) {
            this._setStatus("Confirm Payment Intent...");
            this.stripeService.confirmPaymentIntent(pintent.id).then(response => {
              this._setStatus(`Payment Intent Processed: ${JSON.stringify(response)}`);
            });
          } else {
            // Not ready to be processed by backend
            this._setStatus(`Payment Status: ${pintent.status}`);
          }
        });
      });
    });
  }

  /*
   * Private
   */

  private _createPaymentIntent(): Promise<any> {
    this._setStatus("Create Payment Intent...");
    return this.stripeService.createPaymentIntent(this._item.price, this._item.currency);
  }

  private _confirmPaymentIntent(piParams) {
    this._setStatus("Confirm Payment Intent...");
    this.stripe.confirmPaymentIntent(piParams, (error, pintent) => {
      if (error) return this._displayError(error);
      this._setStatus(`Payment Status: ${pintent.status}`);
    });
  }

  private _setStatus(message) {
    this.status = message;
    this.changeDetectionRef.detectChanges();
  }

  private _displayError(message) {
    alert({
      message,
      okButtonText: "OK"
    }).then(() => this._setStatus(null));
  }
}
