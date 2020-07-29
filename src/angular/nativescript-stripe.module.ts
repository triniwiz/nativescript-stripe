import { NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { DIRECTIVES } from "./nativescript-stripe.directives";

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class CreditCardViewModule { }

registerElement("CreditCardView", () => require("../").CreditCardView);
