import { View } from 'tns-core-modules/ui/core/view';
import { ios } from 'tns-core-modules/utils/utils';
import { CardBrand, CardCommon, CreditCardViewBase, PaymentMethodCommon, StripePaymentIntentCommon, StripePaymentIntentStatus, Token } from './stripe.common';

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

  createPaymentMethod(card: CardCommon, cb: (error: Error, pm: PaymentMethod) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    const apiClient = ios.getter(STPAPIClient, STPAPIClient.sharedClient);
    const cardParams = STPPaymentMethodCardParams.new();
    if (card.cvc) cardParams.cvc = card.cvc;
    if (card.expMonth) cardParams.expMonth = card.expMonth;
    if (card.expYear) cardParams.expYear = card.expYear;
    if (card.number) cardParams.number = card.number;
    const billing = STPPaymentMethodBillingDetails.new();
    if (card.addressLine1) billing.address.line1 = card.addressLine1;
    if (card.addressLine2) billing.address.line2 = card.addressLine2;
    if (card.addressCity) billing.address.city = card.addressCity;
    if (card.addressState) billing.address.state = card.addressState;
    if (card.addressZip) billing.address.postalCode = card.addressZip;
    if (card.addressCountry) billing.address.country = card.addressCountry;
    const params = STPPaymentMethodParams.paramsWithCardBillingDetailsMetadata(cardParams, billing, null);
    apiClient.createPaymentMethodWithParamsCompletion(
      params,
      (pm: STPPaymentMethod, error: NSError) => {
        if (!error) {
          if (typeof cb === 'function') {
            cb(null, PaymentMethod.fromNative(pm));
          }
        } else {
          if (typeof cb === 'function') {
            cb(new Error(error.localizedDescription), null);
          }
        }
      }
    );
  }

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const apiClient = ios.getter(STPAPIClient, STPAPIClient.sharedClient);
    apiClient.retrievePaymentIntentWithClientSecretCompletion(
      clientSecret,
      (pi: STPPaymentIntent, error: NSError) => {
        if (!error) {
          if (typeof cb === 'function') {
            cb(null, StripePaymentIntent.fromNative(pi));
          }
        } else {
          if (typeof cb === 'function') {
            cb(new Error(error.localizedDescription), null);
          }
        }
      }
    );
  }

  confirmPaymentIntent(pi: StripePaymentIntent, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const apiClient = ios.getter(STPAPIClient, STPAPIClient.sharedClient);
    const params = STPPaymentIntentParams.alloc().initWithClientSecret(pi.clientSecret);
    params.returnURL = returnUrl;
    apiClient.confirmPaymentIntentWithParamsCompletion(
      params,
      (pi: STPPaymentIntent, error: NSError) => {
        if (!error) {
          if (typeof cb === 'function') {
            cb(null, StripePaymentIntent.fromNative(pi));
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
  private _brand: CardBrand;
  private _last4: string;

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

  public static fromNativePaymentMethod(pm: STPPaymentMethod): Card {
    const newCard = new Card(null, null, null, null);
    const card = STPCardParams.alloc().init();
    card.addressCountry = pm.card.country;
    card.expMonth = pm.card.expMonth;
    card.expYear = pm.card.expYear;
    newCard._last4 = pm.card.last4;
    newCard._brand = Card.toCardBrand(pm.card.brand);
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
    if (!this._last4) this._last4 = this.native.last4();
    return this._last4;
  }

  get brand(): CardBrand {
    if (!this._brand) this._brand = Card.toCardBrand(STPCardValidator.brandForNumber(this.native.number));
    return this._brand;
  }

  private static toCardBrand(brand: STPCardBrand): CardBrand {
    switch (brand) {
      case STPCardBrand.Visa:
        return 'Visa';
      case STPCardBrand.Amex:
        return 'Amex';
      case STPCardBrand.MasterCard:
        return 'MasterCard';
      case STPCardBrand.Discover:
        return 'Discover';
      case STPCardBrand.JCB:
        return 'JCB';
      case STPCardBrand.DinersClub:
        return 'DinersClub';
    }
    return 'Unknown';
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

export class PaymentMethod implements PaymentMethodCommon {
  native: STPPaymentMethod;

  static fromNative(native: STPPaymentMethod): PaymentMethod {
    const pm = new PaymentMethod();
    pm.native = native;
    return pm;
  }

  get id(): string { return this.native.stripeId; }
  get created(): Date { return new Date(this.native.created); }
  get type(): "card" { return this.native.type === STPPaymentMethodType.Card ? "card" : null; }
  get billingDetails(): object { return this.native.billingDetails; }
  get card(): CardCommon { return Card.fromNativePaymentMethod(this.native); }
  get customerId(): string { return this.native.customerId; }
  get metadata(): object { return this.native.metadata; }
}

export class StripePaymentIntent implements StripePaymentIntentCommon {
  native: STPPaymentIntent;

  static fromNative(native: STPPaymentIntent): StripePaymentIntent {
    const pi = new StripePaymentIntent();
    pi.native = native;
    return pi;
  }

  static fromApi(json: any): StripePaymentIntent {
    const native = STPPaymentIntent.decodedObjectFromAPIResponse(json);
    return StripePaymentIntent.fromNative(native);
  }

  get id(): string { return this.native.stripeId; }
  get clientSecret(): string { return this.native.clientSecret; }
  get amount(): number { return this.native.amount; }
  get created(): Date { return new Date(this.native.created); }
  get currency(): string { return this.native.currency; }
  get description(): string { return this.native.description; }
  get requiresAction(): boolean { return this.native.status === STPPaymentIntentStatus.RequiresAction; }
  get captureMethod(): "manual" | "automatic" {
    switch (this.native.captureMethod) {
      case STPPaymentIntentCaptureMethod.Automatic:
        return "automatic";
      case STPPaymentIntentCaptureMethod.Manual:
        return "manual";
    }
    return null;
  }
  get status(): StripePaymentIntentStatus {
    switch (this.native.status) {
      case STPPaymentIntentStatus.Canceled:
        return StripePaymentIntentStatus.Canceled;
      case STPPaymentIntentStatus.Processing:
        return StripePaymentIntentStatus.Processing;
      case STPPaymentIntentStatus.RequiresAction:
        return StripePaymentIntentStatus.RequiresAction;
      case STPPaymentIntentStatus.RequiresCapture:
        return StripePaymentIntentStatus.RequiresCapture;
      case STPPaymentIntentStatus.RequiresConfirmation:
        return StripePaymentIntentStatus.RequiresConfirmation;
      case STPPaymentIntentStatus.RequiresPaymentMethod:
        return StripePaymentIntentStatus.RequiresPaymentMethod;
      case STPPaymentIntentStatus.Succeeded:
        return StripePaymentIntentStatus.Succeeded;
    }
    return null;
  }
}

export class StripePaymentIntentParams {
  clientSecret: string;
  paymentMethodParams: any;
  paymentMethodId: string;
  sourceParams: any;
  sourceId: string;
  returnURL: string;  // a URL that opens your app

  get native(): STPPaymentIntentParams {
    const n = STPPaymentIntentParams.alloc().initWithClientSecret(this.clientSecret);
    n.paymentMethodParams = this.paymentMethodParams;
    n.paymentMethodId = this.paymentMethodId;
    n.sourceParams = this.sourceParams;
    n.sourceId = this.sourceId;
    n.returnURL = this.returnURL;
    return n;
  }
}

export class StripeRedirectSession {
  native: STPRedirectContext;
  readonly state: StripeRedirectState;

  constructor(paymentIntent: StripePaymentIntent, completion: (clientSecret: string, error: NSError) => void) {
    this.native = STPRedirectContext.alloc().initWithPaymentIntentCompletion(paymentIntent.native, completion);
  }

  startRedirectFlow(view: View): void {
    this.native.startRedirectFlowFromViewController(view.viewController);
  }

  cancel(): void {
    this.native.cancel();
  }
}

export const enum StripeRedirectState {
  NotStarted = 0,
  InProgress = 1,
  Cancelled = 2,
  Completed = 3
}
