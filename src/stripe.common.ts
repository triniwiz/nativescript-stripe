import { View } from 'tns-core-modules/ui/core/view';

export class CreditCardViewBase extends View { }

export type CardBrand =
  | 'Visa'
  | 'Amex'
  | 'MasterCard'
  | 'Discover'
  | 'JCB'
  | 'DinersClub'
  | 'UnionPay'
  | 'Unknown';

export interface CardCommon {
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

export interface Token {
  id: string;
  bankAccount: any;
  card: CardCommon;
  created: Date;
  ios: any;
  android: any;
  livemode: boolean;
}

export interface Source {
  amount: number; /**in pennies*/
  card: CardCommon;
  clientSecret?: string;
  created: Date;
  currency?: string;
  id: string;
  livemode: boolean;
  metadata: object;
}

export interface PaymentMethodCommon {
  readonly native: any;
  id: string;
  created: Date;
  type: "card";
  billingDetails: object;
  card: CardCommon;
  customerId: string;
  metadata: object;
}

export interface StripePaymentIntentCommon {
  readonly native: any;
  id: string;
  clientSecret: string;
  amount: number; // in pennies
  captureMethod: "manual" | "automatic";
  created: Date;
  currency: string;
  description: string;
  requiresAction: boolean; // true if status == RequiresAction
  status: StripePaymentIntentStatus;
}

export const enum StripePaymentIntentStatus {
  RequiresPaymentMethod = "requires_payment_method",
  RequiresConfirmation = "requires_confirmation",
  RequiresAction = "requires_action",
  Processing = "processing",
  Succeeded = "succeeded",
  RequiresCapture = "requires_capture",
  Canceled = "canceled"
}

export const enum StripeRedirectState {
  NotStarted = 0,
  InProgress = 1,
  Cancelled = 2,
  Completed = 3
}
