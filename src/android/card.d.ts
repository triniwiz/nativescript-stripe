export declare class Card {
    private _card;
    constructor(cardNumber: string, cardExpMonth: number, cardExpYear: number, cardCVC: string);
    readonly card: any;
    validateNumber(): boolean;
    validateCVC(): boolean;
    validateCard(): boolean;
    validateExpMonth(): boolean;
    validateExpYear(): boolean;
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
