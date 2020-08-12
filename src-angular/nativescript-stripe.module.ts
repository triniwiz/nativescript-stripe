import { NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { CreditCardView } from 'nativescript-stripe';
import { CreditCardViewDirective } from "./nativescript-stripe.directives";

@NgModule({
  declarations: [CreditCardViewDirective],
  exports: [CreditCardViewDirective],
})
export class CreditCardViewModule { }

registerElement("CreditCardView", () => CreditCardView);
