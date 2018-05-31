import { View } from "tns-core-modules/ui/core/view";

export declare class StripeConfigCommon {
    publishableKey: string;
    appleMerchantID: string;
    backendBaseURL: string;
    backendURL(pathComponent: string): string;
    companyName: string;
    requiredBillingAddressFields: any;
    requiredShippingAddressFields: any;
    verifyPrefilledShippingAddress: any;
    shippingType: any;
    additionalPaymentMethods: any;
}
export declare class StripeConfig extends StripeConfigCommon {
    native: any;
    private toNative(): any;
    static shared(): StripeConfig;
}
export declare class Stripe {
    createToken(card: any, cb: Function): void;
}
export declare class StripeCustomerContext {
    native: any;
    constructor();
}
export declare class StripePaymentContext {
    native: any;
    constructor(customerContext: StripeCustomerContext);
    paymentAmount: number;
    paymentCurrency: string;
    requestPayment(): void;
    presentPaymentMethods(): void;
    presentShipping(): void;
}
export declare class Card {
    private _card;
    constructor(cardNumber: string, cardExpMonth: any, cardExpYear: any, cardCVC: string);
    readonly card: any;
    validateNumber(): boolean;
    validateCVC(): boolean;
    validateCard(): boolean;
    validateExpMonth(): boolean;
    validateExpYear(): boolean;
    readonly number: string;
    readonly cvc: string;
    readonly expMonth: any;
    readonly expYear: any;
    name: string;
    addressLine1: string;
    addressLine2: string;
    addressCity: string;
    addressZip: string;
    addressState: string;
    addressCountry: string;
    currency: string;
    readonly last4: string;
    readonly brand: CardBrand;
    readonly fingerprint: string;
    readonly funding: string;
    readonly country: string;
}
export declare class CreditCardView extends View {
    nativeView: any;
    createNativeView(): Object;
    initNativeView(): void;
    disposeNativeView(): void;
    readonly card: Card;
}
export type CardBrand = "Visa" | "Amex" | "MasterCard" | "Discover" | "JCB" | "DinersClub" | "Unknown";