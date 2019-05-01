import * as utils from 'tns-core-modules/utils/utils';
import { CardBrand, CardCommon, CreditCardViewBase, PaymentMethodCommon, StripePaymentIntentCommon, StripePaymentIntentStatus, Token } from './stripe.common';
export class Stripe {
  private _stripe: com.stripe.android.Stripe;
  private _apiKey: string;

  constructor(apiKey: string) {
    this._apiKey = apiKey;
    this._stripe = new com.stripe.android.Stripe(
      utils.ad.getApplicationContext(),
      apiKey
    );
  }

  createToken(card: CardCommon, cb: (error: Error, token: Token) => void): void {
    if (!card) {
      if (typeof cb === 'function') {
        cb(new Error('Invalid card'), null);
      }
      return;
    }
    this._stripe.createToken(
      card.native,
      new com.stripe.android.TokenCallback({
        onSuccess: function (token) {
          if (typeof cb === 'function') {
            const newToken: Token = {
              id: token.getId(),
              bankAccount: token.getBankAccount(),
              card: Card.fromNative(token.getCard()),
              created: new Date(token.getCreated().toString()),
              livemode: token.getLivemode(),
              android: token,
              ios: null
            };
            cb(null, newToken);
          }
        },
        onError: function (error) {
          if (typeof cb === 'function') {
            cb(new Error(error.getLocalizedMessage()), null);
          }
        }
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
    const cardParams = new com.stripe.android.model.PaymentMethodCreateParams.Card.Builder();
    if (card.cvc) cardParams.setCvc(card.cvc);
    if (card.expMonth) cardParams.setExpiryMonth(new java.lang.Integer(card.expMonth));
    if (card.expYear) cardParams.setExpiryYear(new java.lang.Integer(card.expYear));
    if (card.number) cardParams.setNumber(card.number);
    const billing = new com.stripe.android.model.PaymentMethod.BillingDetails.Builder();
    const addr = new com.stripe.android.model.Address.Builder();
    if (card.addressLine1) addr.setLine1(card.addressLine1);
    if (card.addressLine2) addr.setLine2(card.addressLine2);
    if (card.addressCity) addr.setCity(card.addressCity);
    if (card.addressState) addr.setState(card.addressState);
    if (card.addressZip) addr.setPostalCode(card.addressZip);
    if (card.addressCountry) addr.setCountry(card.addressCountry);
    billing.setAddress(addr.build());
    const params = com.stripe.android.model.PaymentMethodCreateParams.create(cardParams.build(), billing.build());
    try {
      const pm = this._stripe.createPaymentMethodSynchronous(params, this._apiKey);
      if (typeof cb === 'function') {
        cb(null, PaymentMethod.fromNative(pm));
      }
    } catch (error) {
      if (typeof cb === 'function') {
        cb(new Error(error.localizedDescription), null);
      }
    }
  }

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const params = com.stripe.android.model.PaymentIntentParams.createRetrievePaymentIntentParams(clientSecret);
    try {
      const pi = this._stripe.retrievePaymentIntentSynchronous(params, this._apiKey);
      if (typeof cb === 'function') {
        cb(null, StripePaymentIntent.fromNative(pi));
      }
    } catch (error) {
      if (typeof cb === 'function') {
        cb(new Error(error.localizedDescription), null);
      }
    }
  }

  confirmPaymentIntent(pi: StripePaymentIntent, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const params = com.stripe.android.model.PaymentIntentParams.createConfirmPaymentIntentWithPaymentMethodId(
      pi.id, pi.clientSecret, returnUrl);
    try {
      const pi = this._stripe.confirmPaymentIntentSynchronous(params, this._apiKey);
      if (typeof cb === 'function') {
        cb(null, StripePaymentIntent.fromNative(pi));
      }
    } catch (error) {
      if (typeof cb === 'function') {
        cb(new Error(error.localizedDescription), null);
      }
    }
  }
}

export class Card implements CardCommon {
  native: com.stripe.android.model.Card;
  private _brand: CardBrand;
  private _last4: string;

  constructor(
    cardNumber: string,
    cardExpMonth: number,
    cardExpYear: number,
    cardCVC: string
  ) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this.native = new com.stripe.android.model.Card(
        cardNumber,
        new java.lang.Integer(cardExpMonth),
        new java.lang.Integer(cardExpYear),
        cardCVC
      );
    }
  }

  public static fromNative(card: com.stripe.android.model.Card): Card {
    const newCard = new Card(null, null, null, null);
    newCard.native = card;
    return newCard;
  }

  public static fromNativePaymentMethod(pm: com.stripe.android.model.PaymentMethod): Card {
    const newCard = new Card(null, null, null, null);
    const card = new com.stripe.android.model.Card();
    card.setAddressCountry(pm.card.country);
    card.setExpMonth(pm.card.expiryMonth);
    card.setExpYear(pm.card.expiryYear);
    newCard._last4 = pm.card.last4;
    newCard._brand = <CardBrand>pm.card.brand;
    newCard.native = card;
    return newCard;
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
  validateExpiryDate(): boolean {
    return this.native.validateExpiryDate();
  }
  get number(): string {
    return this.native.getNumber();
  }
  get cvc(): string {
    return this.native.getCVC();
  }
  get expMonth(): number {
    return this.native.getExpMonth().intValue();
  }
  get expYear(): number {
    return this.native.getExpYear().intValue();
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
    if (!this._last4) this._last4 = this.native.getLast4();
    return this._last4;
  }

  get brand(): CardBrand {
    if (!this._brand) this._brand = <CardBrand>this.native.getBrand();
    return this._brand;
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

export class CreditCardView extends CreditCardViewBase {
  private _android: com.stripe.android.view.CardInputWidget;
  get android(): com.stripe.android.view.CardInputWidget {
    return this._android;
  }
  public createNativeView(): com.stripe.android.view.CardInputWidget {
    this._android = new com.stripe.android.view.CardInputWidget(this._context);
    return this._android;
  }

  get card(): Card {
    const card = this._android.getCard();
    if (card) {
      return new Card(
        card.getNumber(),
        card.getExpMonth().intValue(),
        card.getExpYear().intValue(),
        card.getCVC()
      );
    } else {
      return null;
    }
  }
}

export class PaymentMethod implements PaymentMethodCommon {
  native: com.stripe.android.model.PaymentMethod;

  static fromNative(native: com.stripe.android.model.PaymentMethod): PaymentMethod {
    const pm = new PaymentMethod();
    pm.native = native;
    return pm;
  }

  get id(): string { return this.native.id; }
  get created(): Date { return new Date(this.native.created.longValue()); }
  get type(): "card" { return this.native.type as "card"; }
  get billingDetails(): object { return this.native.billingDetails; }
  get card(): CardCommon { return Card.fromNativePaymentMethod(this.native); }
  get customerId(): string { return this.native.customerId; }
  get metadata(): object { return this.native.metadata; }
}

export class StripePaymentIntent implements StripePaymentIntentCommon {
  native: com.stripe.android.model.PaymentIntent;

  static fromNative(native: com.stripe.android.model.PaymentIntent): StripePaymentIntent {
    const pi = new StripePaymentIntent();
    pi.native = native;
    return pi;
  }

  static fromApi(json: any): StripePaymentIntent {
    const native = com.stripe.android.model.PaymentIntent.fromJson(json);
    return StripePaymentIntent.fromNative(native);
  }

  get id(): string { return this.native.getId(); }
  get clientSecret(): string { return this.native.getClientSecret(); }
  get amount(): number { return this.native.getAmount().longValue(); }
  get created(): Date { return new Date(this.native.getCreated().longValue()); }
  get currency(): string { return this.native.getCurrency(); }
  get description(): string { return this.native.getDescription(); }
  get requiresAction(): boolean {
    return com.stripe.android.model.PaymentIntent.Status.fromCode(this.native.getStatus()) === com.stripe.android.model.PaymentIntent.Status.RequiresAction;
  }
  get captureMethod(): "manual" | "automatic" { return this.native.getCaptureMethod() as "manual" | "automatic"; }
  get status(): StripePaymentIntentStatus {
    switch (com.stripe.android.model.PaymentIntent.Status.fromCode(this.native.getStatus())) {
      case com.stripe.android.model.PaymentIntent.Status.Canceled:
        return StripePaymentIntentStatus.Canceled;
      case com.stripe.android.model.PaymentIntent.Status.Processing:
        return StripePaymentIntentStatus.Processing;
      case com.stripe.android.model.PaymentIntent.Status.RequiresAction:
        return StripePaymentIntentStatus.RequiresAction;
      case com.stripe.android.model.PaymentIntent.Status.RequiresCapture:
        return StripePaymentIntentStatus.RequiresCapture;
      case com.stripe.android.model.PaymentIntent.Status.RequiresConfirmation:
        return StripePaymentIntentStatus.RequiresConfirmation;
      case com.stripe.android.model.PaymentIntent.Status.RequiresPaymentMethod:
        return StripePaymentIntentStatus.RequiresPaymentMethod;
      case com.stripe.android.model.PaymentIntent.Status.Succeeded:
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

  get native(): com.stripe.android.model.PaymentIntentParams {
    const n = new com.stripe.android.model.PaymentIntentParams();
    n.setClientSecret(this.clientSecret);
    n.setPaymentMethodCreateParams(this.paymentMethodParams);
    n.setPaymentMethodId(this.paymentMethodId);
    n.setSourceParams(this.sourceParams);
    n.setSourceId(this.sourceId);
    n.setReturnUrl(this.returnURL);
    return n;
  }
}
