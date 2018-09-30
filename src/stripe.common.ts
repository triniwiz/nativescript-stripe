import { View } from 'ui/core/view';

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

export interface Token {
  id: string;
  bankAccount: any;
  card: CardCommon;
  created: Date;
  ios: any;
  android: any;
  livemode: boolean;
}
