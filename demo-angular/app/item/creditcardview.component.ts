import { Component } from "@angular/core";
import { CreditCardView, Stripe } from "nativescript-stripe";

@Component({
    selector: "ns-ccview",
    moduleId: module.id,
    templateUrl: "./creditcardview.component.html",
})
export class CreditCardViewComponent {
    token: string;

    constructor() { }

    createToken(cardView: CreditCardView): void {
        let stripe = new Stripe("pk_test_s3dHtM9w6XmgB7ak7AbCSj51");
        stripe.createToken(cardView.card, (error, token) => {
            this.token = token.toString() || error;
        })
    }
}
