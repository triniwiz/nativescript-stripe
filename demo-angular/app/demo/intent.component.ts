import { ChangeDetectorRef, Component } from "@angular/core";
import { CreditCardView, PaymentMethod, Stripe, Token, StripePaymentIntentParams, StripePaymentIntent } from "nativescript-stripe";
import { isAndroid } from "tns-core-modules/platform";
import { publishableKey, StripeService } from "./stripe.service";

import { alert } from "tns-core-modules/ui/dialogs"

@Component({
  selector: "stp-intent",
  moduleId: module.id,
  templateUrl: "./intent.component.html",
})
export class IntentComponent {
  payment: string;
  setupIntent: string
  status: string
  private _setupIntent
  private stripe: Stripe;

  constructor(private stripeService: StripeService, public changeDetectionRef: ChangeDetectorRef) {
    if (-1 !== publishableKey.indexOf("pk_test_yours")) {
      throw new Error("publishableKey must be changed from placeholder");
    }
    this.stripe = new Stripe(publishableKey);
    this._createSetupIntent()
  }

  confirmPaymentIntent(cardView: CreditCardView) {
    this._setStatus("Create Payment Method")
    this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
      if (error) return this._displayError(error)

      this._setStatus("Create Payment Intent")
      this.stripeService.createPaymentIntent(1200, "usd").then(p => {

        this._setStatus("Retrieve Payment Intent")
        this.stripe.retrievePaymentIntent(p.secret, (error, paymentIntent) => {
          if (error) return this._displayError(error)

          const piParams = new StripePaymentIntentParams()
          piParams.paymentMethodId = pm.id
          piParams.clientSecret = p.secret
          
          this._setStatus("Confirm Payment Intent")
          this.stripe.confirmPaymentIntent(piParams, (error, pm) => {
            if (error) return this._displayError(error)

            this._setStatus(`Payment Status: ${pm.status}`)
          });
        })
      })
    });
  }

  /*
   * Private
   */

  private _setStatus(message) {
    this.status = message
    this.changeDetectionRef.detectChanges();
  }

  private _displayError(message) {
    alert({
      message,
      okButtonText: "OK"
    })
  }

  private _createSetupIntent(): void {
    this.setupIntent = "Setup Intent...";
    this.stripeService.createSetupIntent().then((intent) => {
      this.setupIntent = JSON.stringify(intent)
      this._setupIntent = intent
    })
  }
}
