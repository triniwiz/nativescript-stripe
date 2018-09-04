import * as utils from "tns-core-modules/utils/utils";
import { CreditCardViewBase } from "../common";
import { Card } from "./card";

export class CreditCardView extends CreditCardViewBase {
    private _android: com.stripe.android.view.CardInputWidget;

    get android() {
        return this._android;
    }

    createNativeView() {
        this._android = new com.stripe.android.view.CardInputWidget(utils.ad.getApplicationContext());
        return this._android;
    }

    get card(): Card {
        const card = this._android.getCard();
        if (card) {
            return new Card(
                card.getNumber(),
                card.getExpMonth().intValue(),
                card.getExpYear().intValue(),
                card.getCVC());
        } else {
            return null;
        }
    }
}