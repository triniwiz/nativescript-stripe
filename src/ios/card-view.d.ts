import * as common from "../card-view.common";
import { Card } from "./card";
export declare class CreditCardView extends common.CreditCardView {
    nativeView: STPPaymentCardTextField;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
    readonly card: Card;
}
