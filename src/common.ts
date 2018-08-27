// ***** Custom Integration components
export abstract class StripeCommon {
    protected constructor(apiKey: string) { }
    abstract createToken(card: CardCommon, cb: (token, error) => void);
}

export interface CardCommon {
    readonly native: any;
    name: string;
    readonly number: string;
    readonly cvc: string;
    readonly expMonth: number;
    readonly expYear: number;
    readonly last4: string;
    readonly brand: CardBrand;
    addressLine1: string;
    addressLine2: string;
    addressCity: string;
    addressState: string;
    addressZip: string;
    addressCountry: string;
    currency: string;

    validateCard(): boolean;
    validateNumber(): boolean;
    validateCVC(): boolean;
    validateExpMonth(): boolean;
    validateExpYear(): boolean;
}

// ***** Standard Integration components
export class StripeConfigCommon {
    protected static instance: StripeConfigCommon;

    static shared(): StripeConfigCommon {
        return StripeConfigCommon.instance;
    }

    backendAPI: StripeBackendAPI;

    // The Publishable Key found at https://dashboard.stripe.com/account/apikeys
    // Use "Test Publishable Key" (it looks like pk_test_abcdef) during development.
    /** The Stripe Publishable Key. Required. */
    publishableKey = "";

    // To enable Apple Pay, follow the instructions at https://stripe.com/docs/mobile/apple-pay
    // to create an Apple Merchant ID (it looks like merchant.com.yourappname).
    /** Apple Merchange ID used by Apple Pay. Default: No Apple Pay */
    appleMerchantID = "";

    /** Company name to display during payment flows. Used by Apple Pay Default: iOS application name */
    companyName: string = undefined;

    /** Billing address fields the user must fill out. Used by Apple Pay. Default: None */
    requiredBillingAddressFields: StripeBillingAddressFields = StripeBillingAddressFields.None;

    /** Shipping address fields the user must fill out (bitfield). If None, shipping will not be requested. Default: None */
    requiredShippingAddressFields: StripeShippingAddressField = StripeShippingAddressField.None;
}

export interface StripeBackendAPI {
    /**
     * Calls the client-implemented Stripe backend to retrieve a Customer Key
     * (ephemeral key) for this session.
     *
     * @param apiVersion The API Version to send to the backend.
     * @returns a Promise with a response containing the ephemeral key as
     *     returned by the Stripe backend. For example, response.content.toJSON().
     *     Any error should be reported as a string that can be displayed to the user.
     */
    createCustomerKey(apiVersion: string): Promise<any>;

    /**
     * Calls the client-implemented Stripe backend to complete a charge.
     *
     * @param sourceID The Stripe Source ID to send to the backend.
     * @param amount  The amount to charge, in pennies.
     * @param shippingMethod The shipping method to use.
     * @param shippingAddress The address to ship to.
     * @returns a Promise that resolves on success and rejects on failure.
     *     Any error should be reported as a string that can be displayed to the user.
     */
    completeCharge(sourceID: string, amount: number, shippingMethod: StripeShippingMethod, shippingAddress: StripeAddress): Promise<void>;
}

export interface StripePaymentListener {
    onCommunicatingStateChanged(isCommunicating: boolean): void;
    onPaymentDataChanged(data: StripePaymentData): void;
    onPaymentSuccess(): void;
    onError(errorCode: number, message: string): void;
    provideShippingMethods(address: StripeAddress): StripeShippingMethods;
}

export interface StripePaymentMethod {
    image: any; // TODO: UIImage marshals to ???
    label: string;
    templateImage: any;
}

export interface StripeShippingMethod {
    amount: number; // in pennies
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

export const enum StripeBillingAddressFields {
    None = 0,
    Zip = 1,
    Full = 2,
    Name = 3
}

/** Bitfield of available shipping address fields. */
export const enum StripeShippingAddressField {
    None = 0,
    PostalAddress = 1,
    Phone = 2,
    Email = 4,
    Name = 8,
    All = 15
}

export interface StripePaymentData {
    /** Has user entered all necessary information to allow a charge to proceed? */
    isReadyToCharge: boolean;
    /** The selected payment method, if any. */
    paymentMethod: StripePaymentMethod;
    /** The selected shipping method, if any. */
    shippingInfo: StripeShippingMethod;
}

export type CardBrand = "Visa" | "Amex" | "MasterCard" | "Discover" | "JCB" | "DinersClub" | "Unknown";
