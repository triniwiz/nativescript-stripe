import * as common from "./stripe.common";

export declare class StripeConfig extends common.StripeConfig {
    static native: any;
    private static toNative();

    static publishableKey: string;
    static appleMerchantID: string;
    static backendBaseURL: string;
    static backendURL(pathComponent: string): string;
    static companyName: any;
    static requiredBillingAddressFields: any;
    static requiredShippingAddressFields: any;
    static verifyPrefilledShippingAddress: any;
    static shippingType: any;
    static additionalPaymentMethods: any;
}
export declare class Stripe extends common.Stripe {
    createToken(card: any, cb: Function): void;
}
export declare class StripeCustomerContext extends common.StripeCustomerContext {
    native: any;
    constructor();
}
export declare class StripePaymentContext extends common.StripePaymentContext {
    native: any;
    constructor(customerContext: StripeCustomerContext);
    paymentAmount: number;
    paymentCurrency: string;
    requestPayment(): void;
    presentPaymentMethods(): void;
    presentShipping(): void;
}
