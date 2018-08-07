import { View } from 'tns-core-modules/ui/core/view';
import { Card } from '.';

export class CreditCardViewBase extends View {}

export type CardBrand =
  | 'Visa'
  | 'Amex'
  | 'MasterCard'
  | 'Discover'
  | 'JCB'
  | 'DinersClub'
  | 'Unknown';

export interface Token {
  id: string;
  bankAccount: any;
  card: Card;
  created: Date;
  ios: any;
  android: any;
  livemode: boolean;
}
