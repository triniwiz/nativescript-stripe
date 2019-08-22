import { ChangeDetectorRef, Component } from "@angular/core";
import { CreditCardView, PaymentMethod, Stripe, Token, StripePaymentIntentParams, StripePaymentIntent } from "nativescript-stripe";
import { isAndroid } from "tns-core-modules/platform";
import { publishableKey, StripeService } from "./stripe.service";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
  selector: "stp-intent",
  moduleId: module.id,
  templateUrl: "./intent.component.html",
})
export class IntentComponent {
  payment: string;
  status: string;
  private stripe: Stripe;

  constructor(private stripeService: StripeService, public changeDetectionRef: ChangeDetectorRef) {
    if (-1 !== publishableKey.indexOf("pk_test_yours")) {
      throw new Error("publishableKey must be changed from placeholder");
    }
    this.stripe = new Stripe(publishableKey);
  }

  registerCard(cardView: CreditCardView) {
    this._setStatus("Create Setup Intent...");
    this.stripeService.createSetupIntent().then((intent) => {

      this._setStatus("Create Payment Method...");
      this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
        this._setStatus("Confirm Setup Intent...");
        this.stripe.confirmSetupIntent(pm.id, intent.secret, (error, setupIntent) => {
          if (error) this._displayError(error);
          this._setStatus(`Setup Intent Status => ${setupIntent.status}`);
        });
      });
    });
  }

  confirmPayment(cardView: CreditCardView) {
    this._setStatus("Create Payment Method...");
    this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
      if (error) return this._displayError(error);
      this._createPaymentIntent(pm.id);
    });
  }

  /*
   * Private
   */

  private _createPaymentIntent(paymentMethodId: string) {
    this._setStatus("Create Payment Intent...");
    this.stripeService.createPaymentIntent(1200, "usd").then(p => {
      const piParams = new StripePaymentIntentParams();
      piParams.paymentMethodId = paymentMethodId;
      piParams.clientSecret = p.secret;

      this._setStatus("Confirm Payment Intent...");
      this.stripe.confirmPaymentIntent(piParams, (error, pintent) => {
        if (error) return this._displayError(error);
        this._setStatus(`Payment Status: ${pintent.status}`);
      });
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
