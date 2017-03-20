import * as common from "./card-view.common";
import { Card } from "./card";
export declare class CreditCardView extends common.CreditCardView {
    private _ios;
    constructor();
    readonly ios: STPPaymentCardTextField;
    readonly _nativeView: STPPaymentCardTextField;
    readonly card: Card;
}
