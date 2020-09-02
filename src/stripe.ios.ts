import { Frame, View, Utils } from '@nativescript/core';
import { CardBrand, CardCommon, CreditCardViewBase, PaymentMethodCommon, Source, StripePaymentIntentCommon, StripePaymentIntentStatus, Token } from './stripe.common';
export * from "./stripe.common";

export class Stripe {
  constructor(apiKey: string) {
    STPPaymentConfiguration.sharedConfiguration().publishableKey = apiKey;
  }

  setStripeAccount(accountId: string) {
    STPAPIClient.sharedClient().stripeAccount = accountId;
    STPPaymentConfiguration.sharedConfiguration().stripeAccount = accountId;
  }

  createToken(card: CardCommon, cb: (error: Error, token: Token) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    const apiClient = STPAPIClient.sharedClient();
    apiClient.createTokenWithCardCompletion(
      card.native,
      callback(cb, (token: STPToken) => <Token>{
        id: token.tokenId,
        bankAccount: token.bankAccount,
        card: card, // token.card is incomplete
        created: new Date(token.created),
        livemode: token.livemode,
        android: null,
        ios: token
      })
    );
  }

  createSource(card: CardCommon, cb: (error: Error, source: Source) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }

    const sourceParams = STPSourceParams.cardParamsWithCard(card.native);

    const apiClient = STPAPIClient.sharedClient();
    apiClient.createSourceWithParamsCompletion(
      sourceParams, callback(cb, (source: STPSource) => <Source>{
        id: source.stripeID,
        amount: source.amount,
        card: card,
        clientSecret: source.clientSecret,
        created: new Date(source.created),
        currency: source.currency,
        livemode: source.livemode,
        metadata: source.metadata
      })
    );
  }

  createPaymentMethod(card: CardCommon, cb: (error: Error, pm: PaymentMethod) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    const apiClient = STPAPIClient.sharedClient();
    const cardParams = STPPaymentMethodCardParams.new();
    if (card.cvc) cardParams.cvc = card.cvc;
    if (card.expMonth) cardParams.expMonth = card.expMonth;
    if (card.expYear) cardParams.expYear = card.expYear;
    if (card.number) cardParams.number = card.number;
    const billing = STPPaymentMethodBillingDetails.new();
    billing.address = STPPaymentMethodAddress.new();
    if (card.addressLine1) billing.address.line1 = card.addressLine1;
    if (card.addressLine2) billing.address.line2 = card.addressLine2;
    if (card.addressCity) billing.address.city = card.addressCity;
    if (card.addressState) billing.address.state = card.addressState;
    if (card.addressZip) billing.address.postalCode = card.addressZip;
    if (card.addressCountry) billing.address.country = card.addressCountry;
    const params = STPPaymentMethodParams.paramsWithCardBillingDetailsMetadata(cardParams, billing, null);

    apiClient.createPaymentMethodWithParamsCompletion(
      params,
      callback(cb, (pm) => PaymentMethod.fromNative(pm))
    );
  }

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const apiClient = STPAPIClient.sharedClient();
    apiClient.retrievePaymentIntentWithClientSecretCompletion(
      clientSecret,
      callback(cb, (pi) => StripePaymentIntent.fromNative(pi))
    );
  }

  confirmSetupIntent(paymentMethodId: string, clientSecret: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    STPPaymentHandler.sharedHandler().confirmSetupIntentWithAuthenticationContextCompletion(
      new StripeSetupIntentParams(paymentMethodId, clientSecret).native,
      this._getAuthentificationContext(),
      (status: STPPaymentHandlerActionStatus, si: STPSetupIntent, error: NSError) => {
        if (error) {
          cb(new Error(error.toLocaleString()), null);
        } else {
          cb(null, StripeSetupIntent.fromNative(si));
        }
      }
    );
  }

  authenticateSetupIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    STPPaymentHandler.sharedHandler().handleNextActionForSetupIntentWithAuthenticationContextReturnURLCompletion(
      clientSecret,
      this._getAuthentificationContext(),
      returnUrl,
      (status: STPPaymentHandlerActionStatus, pi: STPSetupIntent, error: NSError) => {
        if (error) {
          cb(new Error(error.toLocaleString()), null);
        } else {
          cb(null, StripeSetupIntent.fromNative(pi));
        }
      }
    );
  }

  confirmPaymentIntent(params: StripePaymentIntentParams, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    STPPaymentHandler.sharedHandler().confirmPaymentWithAuthenticationContextCompletion(
      params.native,
      this._getAuthentificationContext(),
      (status: STPPaymentHandlerActionStatus, pi: STPPaymentIntent, error: NSError) => {
        if (error) {
          cb(new Error(error.toLocaleString()), null);
        } else {
          cb(null, StripePaymentIntent.fromNative(pi));
        }
      }
    );
  }

  authenticatePaymentIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    STPPaymentHandler.sharedHandler().handleNextActionForPaymentWithAuthenticationContextReturnURLCompletion(
      clientSecret,
      this._getAuthentificationContext(),
      returnUrl,
      (status: STPPaymentHandlerActionStatus, pi: STPPaymentIntent, error: NSError) => {
        if (error) {
          cb(new Error(error.toLocaleString()), null);
        } else {
          cb(null, StripePaymentIntent.fromNative(pi));
        }
      }
    );
  }

  /*
   *. Private
   */

  private _getAuthentificationContext(): STPPaymentContext {
    const authContext = STPPaymentContext.alloc();
    const rootVC = Frame.topmost().currentPage.ios;

    authContext.hostViewController = Utils.ios.getVisibleViewController(rootVC);
    authContext.authenticationPresentingViewController = () => {
      return authContext.hostViewController;
    };
    return authContext;
  }
}

function callback(
  cb: (error: Error, value: any) => void,
  cvt: (value: any) => any):
  (value: any, err: NSError) => void {
  return (value: any, error: NSError) => {
    if (!error) {
      if (typeof cb === 'function') {
        cb(null, cvt(value));
      }
    } else {
      if (typeof cb === 'function') {
        cb(new Error(error.toLocaleString()), null);
      }
    }
  };
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
      case STPCardBrand.UnionPay:
        return 'UnionPay';
    }
    return 'Unknown';
  }

  private static fromCardBrand(brand: CardBrand): STPCardBrand {
    switch (brand.toLowerCase()) {
      case 'visa':
        return STPCardBrand.Visa;
      case 'amex':
      case 'americanexpress':
      case 'american_express':
      case 'american express':
        return STPCardBrand.Amex;
      case 'mastercard':
        return STPCardBrand.MasterCard;
      case 'discover':
        return STPCardBrand.Discover;
      case 'jcb':
        return STPCardBrand.JCB;
      case 'dinersclub':
      case 'diners_club':
      case 'diners club':
        return STPCardBrand.DinersClub;
      case 'unionpay':
      case 'union pay':
        return STPCardBrand.UnionPay;
    }
    return STPCardBrand.Unknown;
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

  /**
   * Returns an image for a card given its brand.
   * The returned value can be used as [src] in an Image tag.
   */
  static cardImage(brand: CardBrand): any {
    return STPImageLibrary.brandImageForCardBrand(Card.fromCardBrand(brand));
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
      const stpCardParams = STPCardParams.alloc();
      stpCardParams.cvc = this.nativeView.cardParams.cvc;
      stpCardParams.number = this.nativeView.cardParams.number;
      stpCardParams.expMonth = this.nativeView.cardParams.expMonth;
      stpCardParams.expYear = this.nativeView.cardParams.expYear;

      const valid =
        STPCardValidator.validationStateForCard(stpCardParams) ===
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

class StripeIntent {
  native: STPSetupIntent | STPPaymentIntent;

  get created(): Date { return new Date(this.native.created); }
  get clientSecret(): string { return this.native.clientSecret; }
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
  get requiresAction(): boolean { return this.native.status === STPPaymentIntentStatus.RequiresAction; }
  get isSuccess(): boolean { return this.status === StripePaymentIntentStatus.Succeeded; }
  get requiresConfirmation(): boolean { return this.status === StripePaymentIntentStatus.RequiresConfirmation; }
  get requiresCapture(): boolean { return this.status === StripePaymentIntentStatus.RequiresCapture; }
  get description(): string { return this.native.description; }
}

export class StripePaymentIntent extends StripeIntent implements StripePaymentIntentCommon {
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
  get amount(): number { return this.native.amount; }
  get currency(): string { return this.native.currency; }
  get captureMethod(): "manual" | "automatic" {
    switch (this.native.captureMethod) {
      case STPPaymentIntentCaptureMethod.Automatic:
        return "automatic";
      case STPPaymentIntentCaptureMethod.Manual:
        return "manual";
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

export class StripeSetupIntent extends StripeIntent {
  native: STPSetupIntent;

  static fromNative(native: STPSetupIntent): StripeSetupIntent {
    const si = new StripeSetupIntent();
    si.native = native;
    return si;
  }

  get id(): string { return this.native.stripeID; }
  get paymentMethodId(): string { return this.native.paymentMethodID; }
}

export class StripeSetupIntentParams {
  native: STPSetupIntentConfirmParams;

  constructor(paymentMethodId: string, clientSecret: string) {
    this.native = STPSetupIntentConfirmParams.alloc();
    this.native.paymentMethodID = paymentMethodId;
    this.native.clientSecret = clientSecret;
  }
}

export class StripeRedirectSession {
  native: STPRedirectContext;
  readonly state: StripeRedirectState;

  constructor(paymentIntent: StripePaymentIntent, cb: (error: Error, clientSecret: string) => void) {
    this.native = STPRedirectContext.alloc().initWithPaymentIntentCompletion(
      paymentIntent.native,
      callback(cb, (clientSecret) => clientSecret)
    );
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
