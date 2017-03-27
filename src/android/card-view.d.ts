import * as common from "../card-view.common";
import { Card } from "./card";
export declare class CreditCardView extends common.CreditCardView {
    private _android;
    private _ctx;
    readonly android: any;
    readonly _nativeView: any;
    _createUI(): void;
    readonly card: Card;
}
