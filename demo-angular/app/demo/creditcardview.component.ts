import { ChangeDetectorRef, Component } from "@angular/core";
import { CreditCardView, PaymentMethod, Source, Stripe, Token } from "nativescript-stripe";
import { publishableKey } from "./stripe.service";

@Component({
  selector: "stp-ccview",
  moduleId: module.id,
  templateUrl: "./creditcardview.component.html",
})
export class CreditCardViewComponent {
  token: string;
  source: string;
  payment: string;
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

  createSource(cardView: CreditCardView): void {
    this.token = "Fetching sourcre...";
    this.stripe.createSource(cardView.card, (error, source) => {
      this.source = error ? error.message : this.formatSource(source);
      this.changeDetectionRef.detectChanges();
    });
  }

  createPaymentMethod(cardView: CreditCardView): void {
    this.payment = "Fetching payment method...";
    this.stripe.createPaymentMethod(cardView.card, (error, pm) => {
      this.payment = error ? error.message : this.formatPaymentMethod(pm);
      this.changeDetectionRef.detectChanges();
    });
  }

  private formatToken(token: Token): string {
    return `\n\nToken:\nID: ${token.id}\nCard: ${token.card.brand} (...${token.card.last4})`;
  }

  private formatSource(source: Source): string {
    return `ID: ${source.id}\nCard: ${source.card.brand} (...${source.card.last4})`;
  }

  private formatPaymentMethod(pm: PaymentMethod): string {
    return `\n\nPayment Method:\nType: ${pm.type}\nID: ${pm.id}\nCard: ${pm.card.brand} (...${pm.card.last4})` +
      `\nCreated: ${new Date(pm.created).toTimeString()}`;
  }
}
