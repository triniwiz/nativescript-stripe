import * as utils from "tns-core-modules/utils/utils";
import * as common from "../stripe.common";

declare const com;
export class Stripe extends common.Stripe {
    private _stripe: any /* com.stripe.android.Stripe */;
    private _ctx;
    constructor(apiKey: string) {
        super();
        this._ctx = utils.ad.getApplicationContext();
        this._stripe = new com.stripe.android.Stripe(this._ctx, apiKey);
    }
    createToken(card: any/*Native Card Instance*/, cb: Function) {
        const that = new WeakRef(this);
        this._stripe.createToken(
            card,
            new com.stripe.android.TokenCallback({
                owner: that.get(),
                onSuccess: function (token) {
                    if (typeof cb === "function") {
                        cb(null, token);
                    }
                },
                onError: function (error) {
                    // Show localized error message
                    console.log(error.getLocalizedMessage())
                    if (typeof cb === "function") {
                        cb(new Error(error.getLocalizedMessage()))
                    }
                }
            })
        )
    }
}

export class StripeCustomerContext extends common.StripeCustomerContext {
}