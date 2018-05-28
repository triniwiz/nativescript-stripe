export class StripeConfig {
    // The Publishable Key found at https://dashboard.stripe.com/account/apikeys
    // Use "Test Publishable Key" (it looks like pk_test_abcdef) during development.
    static publishableKey = "";

    // To enable Apple Pay, follow the instructions at https://stripe.com/docs/mobile/apple-pay
    // to create an Apple Merchant ID. Enter the ID below (it looks like merchant.com.yourappname).
    static appleMerchantID = "";

    // URL for the backend that can create ephemeral keys, customers, etc.
    // For an example, see https://github.com/stripe/example-ios-backend , click "Deploy to Heroku",
    // and follow the instructions (don't worry, it's free). Enter the Heroku URL below
    // (it looks like https://blazing-sunrise-1234.herokuapp.com ).
    static backendBaseURL = "";

    static backendURL(pathComponent: string): string {
        if (!StripeConfig.backendBaseURL) throw new Error("backendBaseURL must be set");
        if (!StripeConfig.backendBaseURL.endsWith("/")) {
            return StripeConfig.backendBaseURL + "/" + pathComponent;
        } else {
            return StripeConfig.backendBaseURL + pathComponent;
        }
    }

    // See documentation for STPPaymentConfiguration for using these fields.
    // If left 'undefined' the default value will be used.
    static companyName = undefined;
    static requiredBillingAddressFields = undefined;
    static requiredShippingAddressFields = undefined;
    static verifyPrefilledShippingAddress = undefined;
    static shippingType = undefined;
    static additionalPaymentMethods = undefined;
    // static createCardSources = true;
}

export class Stripe {
    createToken(card: any/*Native Card Instance*/, cb: Function) {
    }
}

export class StripeCustomerContext {
}

export class StripePaymentContext {
}
