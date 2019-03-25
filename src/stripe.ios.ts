import { ios } from 'tns-core-modules/utils/utils';
import { CardBrand, CardCommon, CreditCardViewBase, Token } from './stripe.common';
export class Stripe {
  constructor(apiKey: string) {
    STPPaymentConfiguration.sharedConfiguration().publishableKey = apiKey;
  }

  createToken(card: CardCommon, cb: (error: Error, token: Token) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    const apiClient = ios.getter(STPAPIClient, STPAPIClient.sharedClient);
    apiClient.createTokenWithCardCompletion(
      card.native,
      (token: STPToken, error: NSError) => {
        if (!error) {
          if (typeof cb === 'function') {
            const newToken: Token = {
              id: token.tokenId,
              bankAccount: token.bankAccount,
              card: card, // token.card is incomplete
              created: new Date(token.created),
              livemode: token.livemode,
              android: null,
              ios: token
            };
            cb(null, newToken);
          }
        } else {
          if (typeof cb === 'function') {
            cb(new Error(error.localizedDescription), null);
          }
        }
      }
    );
  }
}
export class Card implements CardCommon {
  native: STPCardParams;
  constructor(
    cardNumber: string,
    cardExpMonth: number,
    cardExpYear: number,
    cardCVC: string
  ) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this.native = STPCardParams.alloc().init();
      this.native.number = cardNumber;
      this.native.expMonth = cardExpMonth;
      this.native.expYear = cardExpYear;
      this.native.cvc = cardCVC;
    }
  }

  public static fromNative(card: STPCardParams): Card {
    const newCard = new Card(null, null, null, null);
    newCard.native = card;
    return newCard;
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
    const state = STPCardValidator.validationStateForCVCCardBrand(
      this.native.cvc,
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
        STPCardValidator.validationStateForCard(this.native) ===
        STPCardValidationState.Valid
      );
    } catch (ex) {
      return false;
    }
  }

  validateExpMonth(): boolean {
    let isValid: boolean = false;
    const state = STPCardValidator.validationStateForExpirationMonth(
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
  get expMonth(): number {
    return this.native.expMonth;
  }
  get expYear(): number {
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
    return this.native.last4();
  }

  get brand(): CardBrand {
    let brand: CardBrand = 'Unknown';
    switch (STPCardValidator.brandForNumber(this.native.number)) {
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
    return this.native.addressCountry;
  }
}

export class CreditCardView extends CreditCardViewBase {
  public createNativeView(): STPPaymentCardTextField {
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
