declare const com;
const javaLang = java.lang;
const stripe = com.stripe.android;

export class Card {
    native: any; /*stripe.model.Card;*/

    constructor(cardNumber: string, expMonth: any, expYear: any, cvc: string) {
        this.native = new stripe.model.Card(
            new javaLang.String(cardNumber),
            new javaLang.Integer(expMonth),
            new javaLang.Integer(expYear),
            new javaLang.String(cvc)
        );
    }
    validateNumber(): boolean {
        return this.native.validateNumber();
    }
    validateCVC(): boolean {
        return this.native.validateCVC();
    }
    validateCard(): boolean {
        return this.native.validateCard();
    }
    validateExpMonth(): boolean {
        return this.native.validateExpMonth();
    }
    validateExpYear(): boolean {
        return this.native.validateExpYear();
    }
    get number(): string {
        return this.native.getNumber();
    }
    get cvc(): string {
        return this.native.getCVC();
    }
    get expMonth(): any {
        return this.native.getExpMonth();
    }
    get expYear(): any {
        return this.native.getExpYear();
    }
    get name(): string {
        return this.native.getName();
    }
    set name(value: string) {
        this.native.setName(value);
    }

    get addressLine1(): string {
        return this.native.getAddressLine1();
    }

    set addressLine1(value: string) {
        this.native.setAddressLine1(value);
    }

    get addressLine2(): string {
        return this.native.getAddressLine2();
    }
    set addressLine2(value: string) {
        this.native.setAddressLine2(value);
    }

    get addressCity(): string {
        return this.native.getAddressCity();
    }

    set addressCity(value: string) {
        this.native.setAddressCity(value);
    }

    get addressZip(): string {
        return this.native.getAddressZip();
    }

    set addressZip(value: string) {
        this.native.setAddressZip(value);
    }

    get addressState(): string {
        return this.native.getAddressState();
    }

    set addressState(value: string) {
        this.native.setAddressState(value);
    }


    get addressCountry(): string {
        return this.native.getAddressCountry();
    }


    set addressCountry(value: string) {
        this.native.setAddressCountry(value);
    }


    get currency(): string {
        return this.native.getCurrency();
    }


    set currency(value: string) {
        this.native.setCurrency(value);
    }


    get last4(): string {
        return this.native.getLast4();
    }


    get brand(): string {
        return this.native.getBrand();
    }

    get fingerprint(): string {
        return this.native.getFingerprint();
    }

    get funding(): string {
        return this.native.getFunding();
    }

    get country(): string {
        return this.native.getCountry();
    }
}