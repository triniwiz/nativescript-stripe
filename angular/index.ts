import { registerElement } from "nativescript-angular/element-registry";
registerElement("CreditCardView", () => require("../card-view.android").CreditCardView);