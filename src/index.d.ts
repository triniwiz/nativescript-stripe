import { CreditCardViewBase } from './stripe.common';
export declare class Stripe {
    constructor(apiKey: string);
    createToken(card: CardCommon, cb: (error: Error, token: Token) => void): void;
}
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
export interface Token {
    id: string;
    bankAccount: any;
    card: CardCommon;
    created: Date;
    ios: any /*STPToken*/;
    android: any /*com.stripe.android.model.Token*/;
    livemode: boolean;
  }