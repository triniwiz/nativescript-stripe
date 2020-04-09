import { View } from 'tns-core-modules/ui/core/view';

export class CreditCardViewBase extends View { }

export type CardBrand =
  | 'Visa'
  | 'Amex'
  | 'MasterCard'
  | 'Discover'
  | 'JCB'
  | 'DinersClub'
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

export interface CardAddress {
  city: null | string;
  country: null | string;
  line1: null | string;
  line2: null | string;
  postal_code: null | string;
  state: null | string;
}
export interface CardOwner {
  address: CardAddress;
  email: null | string
  name: null | string
  phone: null | string
  verified_address: null | string
  verified_email: null | string
  verified_name: null | string
  verified_phone: null | string
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
  amount: number;
  card: CardCommon;
  client_secret: string | null;
  created: number;
  currency: string | null;
  flow: string | null;
  id: string;
  livemode: boolean;
  metadata: {};
  object: string;
  owner: CardOwner | null;
  statement_descriptor: null | string;
  status: string | null;
  type: string | null;
  usage: string | null;
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
