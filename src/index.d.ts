import { View } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";

export declare class StripeConfigCommon {
    publishableKey: string;
    appleMerchantID: string;
    backendBaseURL: string;
    backendURL(pathComponent: string): string;
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
    readonly selectedPaymentMethod: StripePaymentMethod;
    readonly selectedShippingMethod: StripeShippingMethod;
    requestPayment(): void;
    presentPaymentMethods(): void;
    presentShipping(): void;
}
export declare interface StripePaymentListener {
    onPaymentDataChanged(data: StripePaymentData): void;
    onError(errorCode: number, message: string): void;
}
export declare interface StripePaymentMethod {
	readonly image: any; // TODO: UIImage marshals to ???
	readonly label: string;
	readonly templateImage: any;
}
export declare interface StripeShippingMethod {
    readonly detail: string;
	readonly label: string;
}
export declare interface StripePaymentData {
    readonly isReadyToCharge: boolean;
    readonly paymentMethod: StripePaymentMethod;
    readonly shippingInfo: StripeShippingMethod;
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
