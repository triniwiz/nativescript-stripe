import { ChangeDetectorRef, Component } from "@angular/core";
import { CreditCardView, Stripe, Token } from "nativescript-stripe";

@Component({
  selector: "stp-ccview",
  moduleId: module.id,
  templateUrl: "./creditcardview.component.html",
})
export class CreditCardViewComponent {
  token: string;

  constructor(public changeDetectionRef: ChangeDetectorRef) { }

  createToken(cardView: CreditCardView): void {
    let stripe = new Stripe("pk_test_s3dHtM9w6XmgB7ak7AbCSj51");
    stripe.createToken(cardView.card, (error, token) => {
      this.token = error ? error.message : this.formatToken(token);
      this.changeDetectionRef.detectChanges();
    });
  }

  private formatToken(token: Token): string {
    return `ID: ${token.id}\nCard: ${token.card.brand} (...${token.card.last4})`;
  }
}
