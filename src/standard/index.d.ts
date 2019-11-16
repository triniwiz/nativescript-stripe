import { Page } from "tns-core-modules/ui/page";

export declare class StripeConfigCommon {
  backendAPI: StripeBackendAPI;
  publishableKey: string;
  appleMerchantID: string;
  companyName: string;
  requiredBillingAddressFields: StripeBillingAddressFields;
  requiredShippingAddressFields: StripeShippingAddressField[];
  verifyPrefilledShippingAddress: boolean;
  createCardSources: boolean;
}
export declare class StripeConfig extends StripeConfigCommon {
  native: any;
  private toNative(): any;
  static shared(): StripeConfig;
}
export declare interface StripeBackendAPI {
  /**
   * Calls the client-implemented Stripe backend to retrieve a Customer Key
   * (ephemeral key).
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
   * @param shippingMethod The shipping method to use. Not set if StripeConfig.shared().requiredShippingAddressFields.length is 0
   * @param shippingAddress The address to ship to. Not set if StripeConfig.shared().requiredShippingAddressFields.length is 0
   * @returns a Promise that resolves on success and rejects on failure.
   *     Any error should be reported as a string that can be displayed to the user.
   */
  capturePayment(sourceID: string, amount: number, shippingMethod?: StripeShippingMethod, shippingAddress?: StripeAddress): Promise<void>;
}
/**
 * Called during event processing when status changes. On Angular apps, be sure to
 * trigger change detection when these are called since they are called in a background thread.
 */
export declare interface StripePaymentListener {
  /**
   * Called when communication with Stripe service changes. Currently only called on Android.
   * Check StripePaymentSession.loading for current communication state on both platforms.
   */
  onCommunicatingStateChanged(isCommunicating: boolean): void;
  onPaymentDataChanged(data: StripePaymentData): void;
  onPaymentSuccess(): void;
  onUserCancelled(): void;
  onError(errorCode: number, message: string): void;
  provideShippingMethods(address: StripeAddress): StripeShippingMethods;
}
export declare class StripeCustomerSession {
  native: any;
  constructor();
}
export declare class StripePaymentSession {
  native: any;
  constructor(page: Page,
    customerSession: StripeCustomerSession,
    amount: number,
    currency: string,
    listener: StripePaymentListener,
    prefilledAddress?: StripeAddress);
  /** Is the native component loading? */
  readonly loading: boolean;
  /** Has user entered enough info that a charge can be made? */
  readonly isPaymentReady: boolean;
  readonly paymentInProgress: boolean;
  /** Total amount (including shipping) in pennies. */
  readonly amount: number;
  readonly selectedPaymentMethod: StripePaymentMethod;
  readonly selectedShippingMethod: StripeShippingMethod;
  readonly shippingAddress: StripeAddress;
  requestPayment(): void;
  presentPaymentMethods(): void;
  presentShipping(): void;
}
export declare interface StripePaymentMethod {
  image: any; // a value that can be used as [src] in an Image tag
  label: string;
  templateImage: any;
  /** The method's type (undefined if unsupported type) */
  type?: "Card" | "ApplePay";
  /** Stripe's ID for the selected payment method (undefined if ApplePay) */
  stripeID?: string;
  /** Brand of the payment card (undefined if not a card) */
  brand?: string;
}
export declare interface StripeShippingMethod {
  /** Cost of shipping in pennies. */
  amount: number;
  detail: string;
  label: string;
  identifier: string;
}
export declare interface StripePaymentData {
  /** Has user entered all necessary information to allow a charge to proceed? */
  isReadyToCharge: boolean;
  /** The selected payment method, if any. */
  paymentMethod: StripePaymentMethod;
  /** The selected shipping method, if any. */
  shippingInfo: StripeShippingMethod;
  /** The selected shipping address, if any. */
  shippingAddress: StripeAddress;
}
export declare interface StripeAddress {
  name?: string;
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  email?: string;
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
export declare const enum StripeBillingAddressFields {
  None = 0,
  Zip = 1,
  Full = 2,
  Name = 3
}
/** Available shipping address fields. */
export declare const enum StripeShippingAddressField {
  Name = "name",
  PostalAddress = "address",
  Phone = "phone",
  Email = "email"
}
