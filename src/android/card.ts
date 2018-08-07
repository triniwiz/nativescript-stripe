declare const com, java;
export class Card {
    private _card: any /*com.stripe.android.model.Card*/;
    constructor(cardNumber: string, cardExpMonth: any, cardExpYear: any, cardCVC: string) {
        this._card = new com.stripe.android.model.Card(
            new java.lang.String(cardNumber),
            new java.lang.Integer(cardExpMonth.intValue()),
            new java.lang.Integer(cardExpYear.intValue()),
            new java.lang.String(cardCVC)
        );
    }
    get card(): any /*com.stripe.android.model.Card*/ {
        return this._card;
    }
    validateNumber(): boolean {
        return this._card.validateNumber();
    }
    validateCVC(): boolean {
        return this._card.validateCVC();
    }
    validateCard(): boolean {
        return this._card.validateCard();
    }
    validateExpMonth(): boolean {
        return this._card.validateExpMonth();
    }
    validateExpYear(): boolean {
        return this._card.validateExpYear();
    }
    get number(): string {
        return this._card.getNumber();
    }
    get cvc(): string {
        return this._card.getCVC();
    }
    get expMonth(): any {
        return this._card.getExpMonth();
    }
    get expYear(): any {
        return this._card.getExpYear();
    }
    get name(): string {
        return this._card.getName();
    }
    set name(value: string) {
        this._card.setName(value);
    }

    get addressLine1(): string {
        return this._card.getAddressLine1();
    }

    set addressLine1(value: string) {
        this._card.setAddressLine1(value);
    }

    get addressLine2(): string {
        return this._card.getAddressLine2();
    }
    set addressLine2(value: string) {
        this._card.setAddressLine2(value);
    }

    get addressCity(): string {
        return this._card.getAddressCity();
    }

    set addressCity(value: string) {
        this._card.setAddressCity(value);
    }

    get addressZip(): string {
        return this._card.getAddressZip();
    }

    set addressZip(value: string) {
        this._card.setAddressZip(value);
    }

    get addressState(): string {
        return this._card.getAddressState();
    }

    set addressState(value: string) {
        this._card.setAddressState(value);
    }


    get addressCountry(): string {
        return this._card.getAddressCountry();
    }


    set addressCountry(value: string) {
        this._card.setAddressCountry(value);
    }


    get currency(): string {
        return this._card.getCurrency();
    }


    set currency(value: string) {
        this._card.setCurrency(value);
    }


    get last4(): string {
        return this._card.getLast4();
    }


    get brand(): string {
        return this._card.getBrand();
    }

    get fingerprint(): string {
        return this._card.getFingerprint();
    }

    get funding(): string {
        return this._card.getFunding();
    }

    get country(): string {
        return this._card.getCountry();
    }
}