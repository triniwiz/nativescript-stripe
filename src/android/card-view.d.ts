import * as common from "../card-view.common";
import { Card } from "./card";
export declare class CreditCardView extends common.CreditCardView {
    private _android;
    private _ctx;
    readonly android: any;
    createNativeView(): any;
    readonly card: Card;
}
