import * as common from "../card-view.common";
import * as utils from "utils/utils";
import { Card } from "./card";
declare const com;
global.moduleMerge(common, exports);
export class CreditCardView extends common.CreditCardView {
    private _android;
    private _ctx;
    get android() {
        return this._android;
    }
    get _nativeView() {
        return this._android;
    }
    _createUI() {
        this._ctx = utils.ad.getApplicationContext();
        this._android = new com.stripe.android.view.CardInputWidget(this._ctx);
    }
    get card(): Card {
        const card = this._android.getCard();
        if (card) {
            return new Card(card.getNumber(), card.getExpMonth(), card.getExpYear(), card.getCVC());
        } else {
            return null;
        }
    }

}