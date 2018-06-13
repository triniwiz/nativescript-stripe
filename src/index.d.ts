import { View } from "ui/core/view";
import { Page } from "ui/page";

export declare class StripeConfigCommon {
    backendAPI: StripeBackendAPI;
    publishableKey: string;
    appleMerchantID: string;
    companyName: string;
    requiredBillingAddressFields: STPBillingAddressFields;
    requiredShippingAddressFields: PKAddressField;
    verifyPrefilledShippingAddress: boolean;
    shippingType: STPShippingType;
    additionalPaymentMethods: STPPaymentMethodType;
    createCardSources: boolean;
    stripeAccount: string;
}
export declare class StripeConfig extends StripeConfigCommon {
    native: any;
    private toNative(): any;
    static shared(): StripeConfig;
}
export declare class Stripe {
    createToken(card: any, cb: Function): void;
}
export declare interface StripeBackendAPI {
    /**
     * Calls the client-implemented Stripe backend to retrieve a Customer Key
     * (ephemeral key).
     * 
     * @param apiVersion The API Version to send to the backend.
     * @returns a Promise with a response containing the ephemeral key as
     *     returned by the Stripe backend. For example, response.content.toJSON().
     */
    createCustomerKey(apiVersion: string): Promise<any>;

    /**
     * Calls the client-implemented Stripe backend to complete a charge.
     * 
     * @param stripeID The Stripe ID to send to the backend.
     * @param amount  The amount to charge, in pennies.
     * @param shippingHash A hash representing shipping info that can be sent to
     *     the Stripe backend. Looks similar to:
     *     "shipping[name]=XX&shipping[address][city]=Sacramento"
     * @returns a Promise that resolves on success and rejects on failure.
     */
    completeCharge(stripeID: string, amount: number, shippingHash: string): Promise<void>;
}
export declare interface StripePaymentListener {
    onPaymentDataChanged(data: StripePaymentData): void;
    onPaymentSuccess(): void;
    onError(errorCode: number, message: string): void;
    provideShippingMethods(address: StripeAddress): StripeShippingMethods;
}
export declare class StripeCustomerContext {
    native: any;
    constructor();
}
export declare class StripePaymentContext {
    native: any;
    constructor(page: Page,
        customerContext: StripeCustomerContext,
        amount: number,
        currency: string,
        listener?: StripePaymentListener);
    /** Is the native component loading? */
    readonly loading: boolean;
    /** Has user entered enough info that a charge can be made? */
    readonly isPaymentReady: boolean;
    readonly paymentInProgress: boolean;
    /** Total amount (including shipping) in pennies. */
    readonly amount: number;
    readonly selectedPaymentMethod: StripePaymentMethod;
    readonly selectedShippingMethod: StripeShippingMethod;
    requestPayment(): void;
    presentPaymentMethods(): void;
    presentShipping(): void;
}
export declare interface StripePaymentMethod {
    image: any; // TODO: UIImage marshals to ???
    label: string;
    templateImage: any;
}
export declare interface StripeShippingMethod {
    /** Cost of shipping in pennies. */
    amount: number;
    detail: string;
    label: string;
    identifier: string;
}
export declare interface StripePaymentData {
    isReadyToCharge: boolean;
    paymentMethod: StripePaymentMethod;
    shippingInfo: StripeShippingMethod;
}
export declare interface StripeAddress {
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
export declare interface StripeShippingMethods {
    /** Is shipping to the address valid? */
    isValid: boolean;
    /** If not valid, an error describing the issue with the address */
    validationError: string;
    /** The shipping methods available for the address. */
    shippingMethods: StripeShippingMethod[];
    /** The pre-selected (default) shipping method for the address. */
    selectedShippingMethod: StripeShippingMethod;
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
declare const enum STPShippingType {
    Shipping = 0,
    Delivery = 1
}
export declare const enum STPBillingAddressFields {
    None = 0,
    Zip = 1,
    Full = 2
}
export declare const enum PKAddressField {
    None = 0,
    PostalAddress = 1,
    Phone = 2,
    Email = 4,
    Name = 8,
    All = 15
}
export declare const enum STPPaymentMethodType {
    None = 0,
    ApplePay = 1,
    All = 1
}
