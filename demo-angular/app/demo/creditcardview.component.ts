import { ChangeDetectorRef, Component } from "@angular/core";
import { CreditCardView, Stripe, Token } from "nativescript-stripe";
import { publishableKey } from "./stripe.service";

@Component({
  selector: "stp-ccview",
  moduleId: module.id,
  templateUrl: "./creditcardview.component.html",
})
export class CreditCardViewComponent {
  token: string;
  private stripe: Stripe;

  constructor(public changeDetectionRef: ChangeDetectorRef) {
    if (-1 !== publishableKey.indexOf("pk_test_yours")) {
      throw new Error("publishableKey must be changed from placeholder");
    }
    this.stripe = new Stripe(publishableKey);
  }

  createToken(cardView: CreditCardView): void {
    this.token = "Fetching token...";
    this.stripe.createToken(cardView.card, (error, token) => {
      this.token = error ? error.message : this.formatToken(token);
      this.changeDetectionRef.detectChanges();
    });
  }

  private formatToken(token: Token): string {
    return `ID: ${token.id}\nCard: ${token.card.brand} (...${token.card.last4})`;
  }
}
