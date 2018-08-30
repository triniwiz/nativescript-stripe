import { CardBrand, CardCommon } from "../common";

export class Card implements CardCommon {
  native: STPCardParams;

  public static fromNative(card): Card {
    const newCard = new Card(null, null, null, null);
    newCard.native = card;
    return newCard;
  }

  constructor(cardNumber: string, cardExpMonth: number, cardExpYear: number, cardCVC: string) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this.native = STPCardParams.alloc().init();
      this.native.number = cardNumber;
      this.native.expMonth = cardExpMonth;
      this.native.expYear = cardExpYear;
      this.native.cvc = cardCVC;
    }
  }

  validateNumber(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForNumberValidatingCardBrand(
      this.native.number,
      true
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
  validateCVC(): boolean {
    let isValid: boolean = false;
    const brand = STPCardValidator.brandForNumber(this.native.number);
    const state = STPCardValidator.validationStateForCVCCardBrand(this.native.cvc, brand);
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
      return STPCardValidator.validationStateForCard(this.native) === STPCardValidationState.Valid;
    } catch (ex) {
      return false;
    }
  }
  validateExpMonth(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForExpirationMonth(String(this.native.expMonth));
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
  validateExpiryDate(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForExpirationYearInMonth(
      String(this.native.expYear),
      String(this.native.expMonth)
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
    return this.native.number;
  }
  get cvc(): string {
    return this.native.cvc;
  }
  get expMonth(): any {
    return this.native.expMonth;
  }
  get expYear(): any {
    return this.native.expYear;
  }
  get name(): string {
    return this.native.name;
  }
  set name(value: string) {
    this.native.name = value;
  }

  get addressLine1(): string {
    return this.native.addressLine1;
  }

  set addressLine1(value: string) {
    this.native.addressLine1 = value;
  }

  get addressLine2(): string {
    return this.native.addressLine2;
  }
  set addressLine2(value: string) {
    this.native.addressLine2 = value;
  }

  get addressCity(): string {
    return this.native.addressCity;
  }

  set addressCity(value: string) {
    this.native.addressCity = value;
  }

  get addressZip(): string {
    return this.native.addressZip;
  }

  set addressZip(value: string) {
    this.native.addressZip = value;
  }

  get addressState(): string {
    return this.native.addressState;
  }

  set addressState(value: string) {
    this.native.addressState = value;
  }


  get addressCountry(): string {
    return this.native.addressCountry;
  }


  set addressCountry(value: string) {
    this.native.addressCountry = value;
  }


  get currency(): string {
    return this.native.currency;
  }


  set currency(value: string) {
    this.native.currency = value;
  }


  get last4(): string {
    return this.native.last4;
  }


  get brand(): CardBrand {
    let brand: CardBrand = "Unknown";
    switch (STPCardValidator.brandForNumber(this.native.number)) {
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
    return '';
  }

  /**
   * Not available in IOS
   */
  get funding(): string {
    return '';
  }
}