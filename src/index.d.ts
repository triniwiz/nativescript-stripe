import { CreditCardViewBase } from './stripe.common';
export declare class Stripe {
    private _stripe;
    constructor(apiKey: string);
    createToken(card: any /*Card.card*/, cb: (error: Error, token: Token) => void): void;
}
export declare class Card {
    _card: any;
    constructor(cardNumber: string, cardExpMonth: number, cardExpYear: number, cardCVC: string);
    static fromNative(card: any): Card;
    readonly card: any /*ios:STPCardParams, android:com.stripe.android.model.Card*/;
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
export declare class CreditCardView extends CreditCardViewBase {
    readonly android: any /*com.stripe.android.view.CardInputWidget*/;
    createNativeView(): any /*ios:STPPaymentCardTextField, android:com.stripe.android.view.CardInputWidget*/;
    readonly card: Card;
}
export interface Token {
    id: string;
    bankAccount: any;
    card: Card;
    created: Date;
    ios: any /*STPToken*/;
    android: any /*com.stripe.android.model.Token*/;
    livemode: boolean;
  }
  