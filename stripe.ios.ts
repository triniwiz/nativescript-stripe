const getter = require("utils/utils").ios.getter;
export class Stripe {
    constructor() { }
    createToken(card: any/*Native Card Instance*/, cb: Function) {
        const apiClient = getter(STPAPIClient, STPAPIClient.sharedClient);
        apiClient.createTokenWithCardCompletion(card, (token: STPToken, error: NSError) => {
            if (!error) {
                if (typeof cb === "function") {
                    cb(null, token);
                }
            } else {
                console.log(error.localizedDescription);
                if (typeof cb === "function") {
                    cb(new Error(error.localizedDescription));
                }
            }
        });
    }
}


