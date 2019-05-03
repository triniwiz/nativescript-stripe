import { View } from "tns-core-modules/ui/core/view";

export declare class Stripe {
  constructor(apiKey: string);
  createToken(card: CardCommon, cb: (error: Error, token: Token) => void): void;
  createPaymentMethod(card: CardCommon, cb: (error: Error, pm: PaymentMethod) => void): void;

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void;
  confirmPaymentIntent(pi: StripePaymentIntent, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void;
}
export declare class CreditCardViewBase extends View { }
export declare type CardBrand = "Visa" | "Amex" | "MasterCard" | "Discover" | "JCB" | "DinersClub" | "Unknown";
export declare interface CardCommon {
  readonly native: any;
  validateNumber(): boolean;
  validateCVC(): boolean;
  validateCard(): boolean;
  validateExpMonth(): boolean;
  validateExpiryDate(): boolean;
  readonly number: string;
  readonly cvc: string;
  readonly expMonth: number;
  readonly expYear: number;
  name: string;
  addressLine1: string;
  addressLine2: string;
  addressCity: string;
  addressZip: string;
  addressState: string;
  addressCountry: string;
  currency: string;
  readonly last4: string;
  readonly brand: string;
  readonly fingerprint: string;
  readonly funding: string;
  readonly country: string;
}
export declare class Card implements CardCommon {
  static fromNative(card: any): Card;
  constructor(cardNumber: string, expMonth: number, expYear: number, cardCVC: string);
  readonly native: any;
  validateNumber(): boolean;
  validateCVC(): boolean;
  validateCard(): boolean;
  validateExpMonth(): boolean;
  validateExpiryDate(): boolean;
  readonly number: string;
  readonly cvc: string;
  readonly expMonth: number;
  readonly expYear: number;
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
export declare class CreditCardView extends CreditCardViewBase {
  readonly android: any /*com.stripe.android.view.CardInputWidget*/;
  createNativeView(): any /*ios:STPPaymentCardTextField, android:com.stripe.android.view.CardInputWidget*/;
  readonly card: Card;
}
export declare interface Token {
  id: string;
  bankAccount: any;
  card: CardCommon;
  created: Date;
  ios: any /*STPToken*/;
  android: any /*com.stripe.android.model.Token*/;
  livemode: boolean;
}

export declare interface PaymentMethodCommon {
  readonly native: any;
  id: string;
  created: Date;
  type: "card";
  billingDetails: object;
  card: CardCommon;
  customerId: string;
  metadata: object;
}
export declare class PaymentMethod implements PaymentMethodCommon {
  readonly native: any;
  id: string;
  created: Date;
  type: "card";
  billingDetails: object;
  card: CardCommon;
  customerId: string;
  metadata: object;

  static fromNative(native: any): PaymentMethod;
}

export declare interface StripePaymentIntentCommon {
  readonly native: any;
  id: string;
  clientSecret: string;
  amount: number; // in pennies
  captureMethod: "manual" | "automatic";
  created: Date;
  currency: string;
  description: string;
  paymentMethodId: string;
  sourceId: string;
  requiresAction: boolean; // true if status == RequiresAction
  status: StripePaymentIntentStatus;
}
export declare class StripePaymentIntent implements StripePaymentIntentCommon {
  readonly native: any;
  id: string;
  clientSecret: string;
  amount: number; // in pennies
  captureMethod: "manual" | "automatic";
  created: Date;
  currency: string;
  description: string;
  paymentMethodId: string;
  sourceId: string;
  requiresAction: boolean; // true if status == RequiresAction
  status: StripePaymentIntentStatus;

  static fromNative(native: any): StripePaymentIntent;
  static fromApi(json: any): StripePaymentIntent;
}

export declare const enum StripePaymentIntentStatus {
  RequiresPaymentMethod = "requires_payment_method",
  RequiresConfirmation = "requires_confirmation",
  RequiresAction = "requires_action",
  Processing = "processing",
  Succeeded = "succeeded",
  RequiresCapture = "requires_capture",
  Canceled = "canceled"
}

export declare class StripePaymentIntentParams {
  readonly native: any;
  clientSecret: string;
  paymentMethodParams: any;
  paymentMethodId: string;
  sourceParams: any;
  sourceId: string;
  receiptEmail: string;
  returnURL: string;  // a URL that opens your app
}

// Currently supported on iOS only
export declare class StripeRedirectSession {
  native: any;
  readonly state: StripeRedirectState;

  constructor(paymentIntent: StripePaymentIntent, cb: (error: Error, clientSecret: string) => void);

  startRedirectFlow(view: View): void;
  cancel(): void;
}

export declare const enum StripeRedirectState {
  NotStarted = 0,
  InProgress = 1,
  Cancelled = 2,
  Completed = 3
}
