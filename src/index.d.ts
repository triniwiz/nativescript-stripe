import { CreditCardViewBase } from './stripe.common';
export declare class Stripe {
    private _stripe;
    constructor(apiKey: string);
    createToken(card: any, cb: Function): void;
}
export declare class Card {
    _card: any;
    constructor(cardNumber: string, cardExpMonth: number, cardExpYear: number, cardCVC: string);
    static fromNative(card: any): Card;
    readonly card: any;
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
    private _android;
    readonly android: any;
    createNativeView(): any;
    readonly card: Card;
}
