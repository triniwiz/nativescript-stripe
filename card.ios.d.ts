import { CardBrand } from "./card-view.common";
export declare class Card {
    private _card;
    constructor(cardNumber: string, cardExpMonth: number, cardExpYear: number, cardCVC: string);
    readonly card: STPCardParams;
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
    readonly brand: CardBrand;
    /**
     * Not available in IOS
     */
    readonly fingerprint: string;
    /**
     * Not available in IOS
     */
    readonly funding: string;
    readonly country: string;
}
