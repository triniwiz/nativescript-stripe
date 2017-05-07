import { CardBrand } from "../card-view.common";
export class Card {
    private _card: STPCardParams;
    constructor(cardNumber: string, cardExpMonth: any, cardExpYear: any, cardCVC: string) {
        this._card = STPCardParams.alloc().init();
        this._card.number = cardNumber;
        this._card.expMonth = cardExpMonth;
        this._card.expYear = cardExpYear;
        this._card.cvc = cardCVC;
    }
    get card(): STPCardParams {
        return this._card;
    }
    validateNumber(): boolean {
        let isValid: boolean = false;
        const state = STPCardValidator.validationStateForNumberValidatingCardBrand(this._card.number, true)
        switch (state) {
            case STPCardValidationState.Valid:
                isValid = true;
                break;
            case STPCardValidationState.Incomplete:
                isValid = false;
                break;
            case STPCardValidationState.Invalid:
                isValid = false;
                break;
        }
        return isValid;
    }

    validateCVC(): boolean {
        let isValid: boolean = false;
        const brand = STPCardValidator.brandForNumber(this._card.number);
        const state = STPCardValidator.validationStateForCVCCardBrand(this._card.cvc, brand);
        switch (state) {
            case STPCardValidationState.Valid:
                isValid = true;
                break;
            case STPCardValidationState.Incomplete:
                isValid = false;
                break;
            case STPCardValidationState.Invalid:
                isValid = false;
                break;
        }
        return isValid;
    }
    validateCard(): boolean {
        try {
            return this._card.validateCardReturningError();
        } catch (ex) {
            return false;
        }
    }
    validateExpMonth(): boolean {
        let isValid: boolean = false;
        const state = STPCardValidator.validationStateForExpirationMonth(String(this._card.expMonth));
        switch (state) {
            case STPCardValidationState.Valid:
                isValid = true;
                break;
            case STPCardValidationState.Incomplete:
                isValid = false;
                break;
            case STPCardValidationState.Invalid:
                isValid = false;
                break;
        }
        return isValid;
    }
    validateExpYear(): boolean {
        let isValid: boolean = false;
        const date = new Date();
        const state = STPCardValidator.validationStateForExpirationYearInMonthInCurrentYearCurrentMonth(
            String(this._card.expYear),
            String(this._card.expMonth),
            date.getFullYear(),
            (date.getMonth() + 1)
        );
        switch (state) {
            case STPCardValidationState.Valid:
                isValid = true;
                break;
            case STPCardValidationState.Incomplete:
                isValid = false;
                break;
            case STPCardValidationState.Invalid:
                isValid = false;
                break;
        }
        return isValid;
    }
    get number(): string {
        return this._card.number;
    }
    get cvc(): string {
        return this._card.cvc;
    }
    get expMonth(): any {
        return this._card.expMonth;
    }
    get expYear(): any {
        return this._card.expYear;
    }
    get name(): string {
        return this._card.name;
    }
    set name(value: string) {
        this._card.name = value;
    }

    get addressLine1(): string {
        return this._card.addressLine1;
    }

    set addressLine1(value: string) {
        this._card.addressLine1 = value;
    }

    get addressLine2(): string {
        return this._card.addressLine2;
    }
    set addressLine2(value: string) {
        this._card.addressLine2 = value;
    }

    get addressCity(): string {
        return this._card.addressCity;
    }

    set addressCity(value: string) {
        this._card.addressCity = value;
    }

    get addressZip(): string {
        return this._card.addressZip;
    }

    set addressZip(value: string) {
        this._card.addressZip = value;
    }

    get addressState(): string {
        return this._card.addressState;
    }

    set addressState(value: string) {
        this._card.addressState = value;
    }


    get addressCountry(): string {
        return this._card.addressCountry;
    }


    set addressCountry(value: string) {
        this._card.addressCountry = value;
    }


    get currency(): string {
        return this._card.currency;
    }


    set currency(value: string) {
        this._card.currency = value;
    }


    get last4(): string {
        return this._card.last4;
    }


    get brand(): CardBrand {
        let brand: CardBrand = "Unknown";
        switch (STPCardValidator.brandForNumber(this._card.number)) {
            case STPCardBrand.Visa:
                brand = "Visa";
                break;
            case STPCardBrand.Amex:
                brand = "Amex";
                break;
            case STPCardBrand.MasterCard:
                brand = "MasterCard";
                break;
            case STPCardBrand.Discover:
                brand = "Discover";
                break;
            case STPCardBrand.JCB:
                brand = "JCB";
                break;
            case STPCardBrand.DinersClub:
                brand = "DinersClub";
                break;
            case STPCardBrand.Unknown:
                brand = "Unknown";
                break;

        }

        return brand;
    }

    /**
     * Not available in IOS
     */
    get fingerprint(): string {
        return "";
    }

    /**
     * Not available in IOS
     */
    get funding(): string {
        return "";
    }

    get country(): string {
        return this._card.addressCountry;
    }
}