import * as common from "../card-view.common";
import * as app from "application";
import * as frame from "tns-core-modules/ui/frame";
import { Card } from "./card";
global.moduleMerge(common, exports);
export class CreditCardView extends common.CreditCardView {
    private _ios: STPPaymentCardTextField;
    constructor() {
        super();
        this._ios = STPPaymentCardTextField.alloc().initWithFrame(CGRectMake(10, 10, 300, 44));
    }
    get ios() {
        return this._ios;
    }
  
    get card(): Card {
        try {
            let valid = this._ios.cardParams.validateCardReturningError();
            return new Card(this._ios.cardParams.number, this._ios.cardParams.expMonth, this._ios.cardParams.expYear, this._ios.cardParams.cvc);
        } catch (ex) {
            return null;
        }

    }

}