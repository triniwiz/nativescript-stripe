
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

  /** Shipping address fields the user must fill out. If empty, shipping will not be requested. Default: none */
  requiredShippingAddressFields: StripeShippingAddressField[] = [];

  /** If true, a credit card added in the UI will be added as a Source to the Customer. */
  createCardSources = true;
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
   * @param shippingMethod The shipping method to use. Not set if StripeConfig.shared().requiredShippingAddressFields.length is 0
   * @param shippingAddress The address to ship to. Not set if StripeConfig.shared().requiredShippingAddressFields.length is 0
   * @returns a Promise that resolves on success and rejects on failure.
   *     Any error should be reported as a string that can be displayed to the user.
   */
  completeCharge(sourceID: string, amount: number, shippingMethod?: StripeShippingMethod, shippingAddress?: StripeAddress): Promise<void>;
}

export interface StripePaymentListener {
  onCommunicatingStateChanged(isCommunicating: boolean): void;
  onPaymentDataChanged(data: StripePaymentData): void;
  onPaymentSuccess(): void;
  onUserCancelled(): void;
  onError(errorCode: number, message: string): void;
  provideShippingMethods(address: StripeAddress): StripeShippingMethods;
}

export interface StripePaymentMethod {
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

export const enum StripeBillingAddressFields {
  None = 0,
  Zip = 1,
  Full = 2,
  Name = 3
}

/** Available shipping address fields. */
export const enum StripeShippingAddressField {
  Name = "name",
  PostalAddress = "address",
  Phone = "phone",
  Email = "email"
}

export interface StripePaymentData {
  /** Has user entered all necessary information to allow a charge to proceed? */
  isReadyToCharge: boolean;
  /** The selected payment method, if any. */
  paymentMethod: StripePaymentMethod;
  /** The selected shipping method, if any. */
  shippingInfo: StripeShippingMethod;
  /** The selected shipping address, if any. */
  shippingAddress: StripeAddress;
}
