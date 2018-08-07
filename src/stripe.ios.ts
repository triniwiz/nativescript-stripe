import { ios } from 'tns-core-modules/utils/utils';
import { CardBrand, CreditCardViewBase, Token } from './stripe.common';
export class Stripe {
  createToken(card: any /*Native Card Instance*/, cb: Function) {
    const apiClient = ios.getter(STPAPIClient, STPAPIClient.sharedClient);
    apiClient.createTokenWithCardCompletion(
      card,
      (token: STPToken, error: NSError) => {
        if (!error) {
          if (typeof cb === 'function') {
            const newToken: Token = {
              id: token.tokenId,
              bankAccount: token.bankAccount,
              card: Card.fromNative(card),
              created: new Date(token.created),
              livemode: token.livemode,
              android: null,
              ios: token
            };
            cb(null, newToken);
          }
        } else {
          if (typeof cb === 'function') {
            cb(new Error(error.localizedDescription));
          }
        }
      }
    );
  }
}
export class Card {
  _card: any /* STPCardParams*/;
  constructor(
    cardNumber: string,
    cardExpMonth: any,
    cardExpYear: any,
    cardCVC: string
  ) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this._card = STPCardParams.alloc().init();
      this._card.number = cardNumber;
      this._card.expMonth = cardExpMonth;
      this._card.expYear = cardExpYear;
      this._card.cvc = cardCVC;
    }
  }

  public static fromNative(card): Card {
    const newCard = new Card(null, null, null, null);
    newCard._card = card;
    return newCard;
  }

  get card(): STPCardParams {
    return this._card;
  }

  validateNumber(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForNumberValidatingCardBrand(
      this._card.number,
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
    const brand = STPCardValidator.brandForNumber(this._card.number);
    const state = STPCardValidator.validationStateForCVCCardBrand(
      this._card.cvc,
      brand
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

  validateCard(): boolean {
    try {
      return (
        STPCardValidator.validationStateForCard(this._card) ===
        STPCardValidationState.Valid
      );
    } catch (ex) {
      return false;
    }
  }

  validateExpMonth(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForExpirationMonth(
      String(this._card.expMonth)
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

  validateExpiryDate(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForExpirationYearInMonth(
      String(this._card.expYear),
      String(this._card.expMonth)
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
    let brand: CardBrand = 'Unknown';
    switch (STPCardValidator.brandForNumber(this._card.number)) {
      case STPCardBrand.Visa:
        brand = 'Visa';
        break;
      case STPCardBrand.Amex:
        brand = 'Amex';
        break;
      case STPCardBrand.MasterCard:
        brand = 'MasterCard';
        break;
      case STPCardBrand.Discover:
        brand = 'Discover';
        break;
      case STPCardBrand.JCB:
        brand = 'JCB';
        break;
      case STPCardBrand.DinersClub:
        brand = 'DinersClub';
        break;
      case STPCardBrand.Unknown:
        brand = 'Unknown';
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

  get country(): string {
    return this._card.addressCountry;
  }
}

export class CreditCardView extends CreditCardViewBase {
  public createNativeView(): Object {
    return STPPaymentCardTextField.alloc().initWithFrame(
      CGRectMake(10, 10, 300, 44)
    );
  }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = this;
    super.initNativeView();
  }

  /**
   * Clean up references to the native view and resets nativeView to its original state.
   * If you have changed nativeView in some other way except through setNative callbacks
   * you have a chance here to revert it back to its original state
   * so that it could be reused later.
   */

  disposeNativeView(): void {
    (<any>this.nativeView).owner = null;
    super.disposeNativeView();
  }

  get card(): Card {
    try {
      const valid =
        STPCardValidator.validationStateForCard(this.nativeView.cardParams) ===
        STPCardValidationState.Valid;

      return valid
        ? new Card(
            this.nativeView.cardParams.number,
            this.nativeView.cardParams.expMonth,
            this.nativeView.cardParams.expYear,
            this.nativeView.cardParams.cvc
          )
        : null;
    } catch (ex) {
      return null;
    }
  }
}
