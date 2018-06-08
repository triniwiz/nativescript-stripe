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
    // TODO: Don't use iOS-specific data types
    companyName: string = undefined;
    requiredBillingAddressFields: STPBillingAddressFields = undefined;
    requiredShippingAddressFields: PKAddressField = undefined;
    verifyPrefilledShippingAddress: boolean = undefined;
    shippingType: STPShippingType = undefined;
    additionalPaymentMethods: STPPaymentMethodType = undefined;
    createCardSources: boolean = undefined;
    stripeAccount: string = undefined;
}

export interface StripePaymentMethod {
    image: any; // TODO: UIImage marshals to ???
    label: string;
    templateImage: any;
}

export interface StripeShippingMethod {
    amount: number;
    detail: string;
    label: string;
    identifier: string;
}

export interface StripeShippingMethods {
    /** Is shipping to the address valid? */
    isValid: boolean;
    /** If not valid, an error describing the issue with the address */
    validationError: string;
    /** The shipping methods available for the address. */
    shippingMethods: StripeShippingMethod[];
    /** The pre-selected (default) shipping method for the address. */
    selectedShippingMethod: StripeShippingMethod;
}

export interface StripeAddress {
    name: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
}

export interface StripePaymentData {
    isReadyToCharge: boolean;
    paymentMethod: StripePaymentMethod;
    shippingInfo: StripeShippingMethod;
}

export interface StripePaymentListener {
    onPaymentDataChanged(data: StripePaymentData): void;
    onError(errorCode: number, message: string): void;
    provideShippingMethods(address: StripeAddress): StripeShippingMethods;
}
