import { ChangeDetectorRef, Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { Card, CreditCardView, PaymentMethod, Stripe, StripePaymentIntentParams } from "nativescript-stripe";
import { alert } from "tns-core-modules/ui/dialogs";
import { ItentModalComponent } from "./intent-modal.component";
import { publishableKey, StripeService } from "./stripe.service";

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
    console.log("registerCard");
    this._setStatus("Create Setup Intent...");
    this.stripeService.createSetupIntent()
      .then(intent => this._createPaymentMethod(cardView.card)
        .then(pm => this._confirmSetupIntent(pm.id, intent.secret))
        .then(setupIntent => this._setStatus(`Setup Intent Status => ${setupIntent.status}`)))
      .catch(err => this._displayError(err, "registerCard"));
  }

  // Authenticate and charge on the UI
  // https://stripe.com/docs/payments/payment-intents/ios
  automaticConfirmPayment(cardView: CreditCardView) {
    console.log("automaticConfirmPayment");
    this._createPaymentMethod(cardView.card)
      .then(pm => this._createPaymentIntent()
        .then(pi => this._confirmPaymentIntent(pm.id, pi.secret))
        .then(pi => this._setStatus(`Payment Status: ${pi.status}`)))
      .catch(err => this._displayError(err, "automaticConfirmPayment"));
  }

  // Authenticate on the UI only, confirm charge on back-end
  // https://stripe.com/docs/payments/payment-intents/ios-manual
  manualConfirmPayment(cardView: CreditCardView) {
    console.log("manualConfirmPayment");
    this._createPaymentMethod(cardView.card)
      .then(pm => this._createManualPaymentIntent(pm.id))
      .then(pi => {
        if (pi.requires_action) return this._authenticatePaymentIntent(pi.secret);
        return pi;
      })
      .then(pi => {
        if (pi.requiresConfirmation) {
          return this._confirmManualPaymentIntent(pi.id)
            .then(response => `Payment Intent Processed: ${JSON.stringify(response)}`);
        } else if (!pi.status) {
          pi.status = pi.success ? "success" : "failed";
        }
        return `Payment Status: ${pi.status}`;
      })
      .then(status => this._setStatus(status))
      .catch(err => this._displayError(err, "manualConfirmPayment"));
  }

  /*
   * Private. Convert callback-based calls to Stripe with Promises.
   */

  private _createPaymentMethod(card: Card): Promise<PaymentMethod> {
    this._setStatus(`Create Payment Method (${card.brand} ${card.last4})...`);
    return new Promise((resolve, reject) => {
      this.stripe.createPaymentMethod(card, (error, pm) => {
        if (error) return reject(error);
        console.log("Stripe.createPaymentMethod response:", pm.id);
        resolve(pm);
      });
    });
  }

  private _createPaymentIntent(): Promise<any> {
    this._setStatus("Create Payment Intent...");
    return this.stripeService.createPaymentIntent(this._item.price, this._item.currency)
      .then(response => {
        console.log('StripeService.createPaymentIntent response:', response);
        return response;
      });
  }

  private _createManualPaymentIntent(pmId: string): Promise<any> {
    this._setStatus(`Create Manual Payment Intent (${pmId})...`);
    return this.stripeService.capturePayment(pmId, this._item.price)
      .then(response => {
        console.log('StripeService.capturePayment response:', response);
        return response;
      });
  }

  private _confirmManualPaymentIntent(id: string): Promise<any> {
    this._setStatus("Confirm Manual Payment Intent...");
    return this.stripeService.confirmPaymentIntent(id)
      .then(response => {
        console.log('StripeService.confirmPaymentIntent response:', response);
        return response;
      });
  }

  private _confirmSetupIntent(id: string, secret: string): Promise<any> {
    this._setStatus(`Confirm Setup Intent (${id}, ${secret})...`);
    return new Promise((resolve, reject) => {
      this.stripe.confirmSetupIntent(id, secret, (error, setupIntent) => {
        if (error) return reject(error);
        console.log("Stripe.confirmSetupIntent response:", setupIntent.id, setupIntent.status);
        resolve(setupIntent);
      });
    });
  }

  private _confirmPaymentIntent(pmId: string, secret: string): Promise<any> {
    this._setStatus(`Confirm Payment Intent (${pmId}, ${secret})...`);
    const piParams = new StripePaymentIntentParams();
    piParams.paymentMethodId = pmId;
    piParams.clientSecret = secret;
    return new Promise((resolve, reject) => {
      this.stripe.confirmPaymentIntent(piParams, (error, pintent) => {
        if (error) return reject(error);
        console.log("Stripe.confirmPaymentIntent response:", pintent.id, pintent.status);
        resolve(pintent);
      });
    });
  }

  private _authenticatePaymentIntent(secret: string): Promise<any> {
    this._setStatus(`Authenticate Payment Intent (${secret})...`);
    return new Promise((resolve, reject) => {
      this.stripe.authenticatePaymentIntent(secret, null, (error, pintent) => {
        if (error) return reject(error);
        console.log("Stripe.authenticatePaymentIntent response:", JSON.stringify(pintent));
        resolve(pintent);
      });
    });
  }

  private _setStatus(message: string) {
    console.log(message);
    this.status = message;
    this.changeDetectionRef.detectChanges();
  }

  private _displayError(error: Error, operation: string) {
    const msg = "Error during " + operation;
    console.log(msg, error.message, error.stack);
    alert({
      title: msg,
      message: error.message,
      okButtonText: "OK"
    }).then(() => this._setStatus(null));
  }
}
