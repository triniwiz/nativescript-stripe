import { Component, ChangeDetectorRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { alert } from "tns-core-modules/ui/dialogs";
import { CreditCardView, Stripe } from "nativescript-stripe";

import { publishableKey, StripeService } from "./stripe.service";

@Component({
  moduleId: module.id,
  templateUrl: "intent-modal.component.html"
})
export class ItentModalComponent {
  status: string;
  private stripe: Stripe;

  constructor(
    private stripeService: StripeService,
    public changeDetectionRef: ChangeDetectorRef,
    private dialogParams: ModalDialogParams
  ) {
    if (-1 !== publishableKey.indexOf("pk_test_yours")) {
      throw new Error("publishableKey must be changed from placeholder");
    }
    this.stripe = new Stripe(publishableKey);
  }

  /*
   *  Public methods
   */

  closeModal() {
    this.dialogParams.closeCallback();
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

   /*
   * Private
   */

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
