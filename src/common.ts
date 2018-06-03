export type CardBrand = "Visa" | "Amex" | "MasterCard" | "Discover" | "JCB" | "DinersClub" | "Unknown";

export class StripeConfigCommon {
    protected static instance: StripeConfigCommon;

    // The Publishable Key found at https://dashboard.stripe.com/account/apikeys
    // Use "Test Publishable Key" (it looks like pk_test_abcdef) during development.
    publishableKey = "";

    // To enable Apple Pay, follow the instructions at https://stripe.com/docs/mobile/apple-pay
    // to create an Apple Merchant ID (it looks like merchant.com.yourappname).
    appleMerchantID = "";

    // URL for the backend that can create ephemeral keys, customers, etc.
    // For an example, see https://github.com/stripe/example-ios-backend , click "Deploy to Heroku",
    // and follow the instructions (don't worry, it's free)
    // (it looks like https://blazing-sunrise-1234.herokuapp.com ).
    backendBaseURL = "";

    backendURL(pathComponent: string): string {
        if (!this.backendBaseURL) throw new Error("backendBaseURL must be set");
        if (!this.backendBaseURL.endsWith("/")) {
            return this.backendBaseURL + "/" + pathComponent;
        } else {
            return this.backendBaseURL + pathComponent;
        }
    }

    // See documentation for STPPaymentConfiguration for using these fields.
    // If left 'undefined' the default value will be used.
    companyName: string = undefined;
    requiredBillingAddressFields: STPBillingAddressFields = undefined;
    requiredShippingAddressFields: PKAddressField = undefined;
    verifyPrefilledShippingAddress: boolean = undefined;
    shippingType: STPShippingType = undefined;
    additionalPaymentMethods: STPPaymentMethodType = undefined;
    createCardSources: boolean = undefined;
    stripeAccount: string = undefined;
}
