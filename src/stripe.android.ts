import * as utils from 'tns-core-modules/utils/utils';
import { android as androidApp } from "tns-core-modules/application";
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
      const apiResultCallback = new com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod>({
        onSuccess: (result: any) => {
          cb(null, PaymentMethod.fromNative(result));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      });
      this._stripe.createPaymentMethod(params, apiResultCallback, this._apiKey, null);
    } catch (error) {
      if (typeof cb === 'function') {
        cb(new Error(error.localizedDescription), null);
      }
    }
  }

  retrievePaymentIntent(clientSecret: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    try {
      const pi = this._stripe.retrievePaymentIntentSynchronous(clientSecret);
      cb(null, StripePaymentIntent.fromNative(pi));
    } catch (error) {
      cb(new Error(error.localizedDescription), null);
    }
  }

  confirmSetupIntent(paymentMethodId: string, clientSecret: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    try {
      const activity = androidApp.foregroundActivity;

      const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>({
        onSuccess: (result: com.stripe.android.SetupIntentResult) => {
          cb(null, StripeSetupIntent.fromNative(result.getIntent()));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      });

      activity.onActivityResult = (requestCode, resultCode, data) => {
        this._stripe.onSetupResult(requestCode, data, resultCb);
      };
      this._stripe.confirmSetupIntent(activity, new StripeSetupIntentParams(paymentMethodId, clientSecret).native);
    } catch (error) {
      cb(new Error(error.localizedDescription), null);
    }
  }

  authenticateSetupIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripeSetupIntent) => void): void {
    const activity = androidApp.foregroundActivity;

    const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>({
      onSuccess: (result: com.stripe.android.SetupIntentResult) => {
        cb(null, StripeSetupIntent.fromNative(result.getIntent()));
      },
      onError: (error: any) => {
        cb(new Error(error.localizedDescription), null);
      }
    });

    activity.onActivityResult = (requestCode, resultCode, data) => {
      this._stripe.onSetupResult(requestCode, data, resultCb);
    };

    this._stripe.authenticateSetup(activity, clientSecret);
  }

  confirmPaymentIntent(piParams: StripePaymentIntentParams, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    try {
      const activity = androidApp.foregroundActivity;

      const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>({
        onSuccess: (result: com.stripe.android.PaymentIntentResult) => {
          cb(null, StripePaymentIntent.fromNative(result.getIntent()));
        },
        onError: (error: any) => {
          cb(new Error(error.localizedDescription), null);
        }
      });

      activity.onActivityResult = (requestCode, resultCode, data) => {
        this._stripe.onPaymentResult(requestCode, data, resultCb);
      };
      this._stripe.confirmPayment(activity, piParams.native);
    } catch (error) {
       cb(new Error(error.localizedDescription), null);
    }
  }

  // Manual confirmation flow https://stripe.com/docs/payments/payment-intents/ios#manual-confirmation-ios
  authenticatePaymentIntent(clientSecret: string, returnUrl: string, cb: (error: Error, pm: StripePaymentIntent) => void): void {
    const activity = androidApp.foregroundActivity;

    const resultCb = new com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>({
      onSuccess: (result: com.stripe.android.PaymentIntentResult) => {
        cb(null, StripePaymentIntent.fromNative(result.getIntent()));
      },
      onError: (error: any) => {
        cb(new Error(error.localizedDescription), null);
      }
    });

    activity.onActivityResult = (requestCode, resultCode, data) => {
      this._stripe.onPaymentResult(requestCode, data, resultCb);
    };

    this._stripe.authenticatePayment(activity, clientSecret);
  }
}

export class Card implements CardCommon {
  private _cardBuilder: com.stripe.android.model.Card.Builder;
  private _brand: CardBrand;
  private _last4: string;

  constructor(
    cardNumber: string,
    cardExpMonth: number,
    cardExpYear: number,
    cardCVC: string
  ) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this._cardBuilder = new com.stripe.android.model.Card.Builder(
        cardNumber,
        new java.lang.Integer(cardExpMonth),
        new java.lang.Integer(cardExpYear),
        cardCVC
      );
    }
  }

  public static fromNative(card: com.stripe.android.model.Card): Card {
    const newCard = new Card(null, null, null, null);
    newCard._cardBuilder = card.toBuilder();
    return newCard;
  }

  public static fromNativePaymentMethod(pm: com.stripe.android.model.PaymentMethod): Card {
    const newCard = new Card(null, null, null, null);
    newCard._last4 = pm.card.last4;
    newCard._brand = <CardBrand>pm.card.brand;
    newCard._cardBuilder = new com.stripe.android.model.Card.Builder(null, pm.card.expiryMonth, pm.card.expiryYear, null).country(pm.card.country);

    return newCard;
  }
  get native(): com.stripe.android.model.Card {
    return this._cardBuilder.build();
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
    this._cardBuilder.name(value);
  }

  get addressLine1(): string {
    return this.native.getAddressLine1();
  }

  set addressLine1(value: string) {
    this._cardBuilder.addressLine1(value);
  }

  get addressLine2(): string {
    return this.native.getAddressLine2();
  }
  set addressLine2(value: string) {
    this._cardBuilder.addressLine2(value);
  }

  get addressCity(): string {
    return this.native.getAddressCity();
  }

  set addressCity(value: string) {
    this._cardBuilder.addressCity(value);
  }

  get addressZip(): string {
    return this.native.getAddressZip();
  }

  set addressZip(value: string) {
    this._cardBuilder.addressZip(value);
  }

  get addressState(): string {
    return this.native.getAddressState();
  }

  set addressState(value: string) {
    this._cardBuilder.addressState(value);
  }

  get addressCountry(): string {
    return this.native.getAddressCountry();
  }

  set addressCountry(value: string) {
    this._cardBuilder.addressCountry(value);
  }

  get currency(): string {
    return this.native.getCurrency();
  }

  set currency(value: string) {
    this._cardBuilder.currency(value);
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
  private _widget: com.stripe.android.view.CardInputWidget;
  get android(): com.stripe.android.view.CardInputWidget {
    return this._widget;
  }
  public createNativeView(): com.stripe.android.view.CardInputWidget {
    this._widget = new com.stripe.android.view.CardInputWidget(this._context);
    return this._widget;
  }

  get card(): Card {
    const card = this._widget.getCard();
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


class StripeIntent {
  native: com.stripe.android.model.PaymentIntent | com.stripe.android.model.SetupIntent;

  get id(): string { return this.native.getId(); }
  get clientSecret(): string { return this.native.getClientSecret(); }
  get description(): string { return this.native.getDescription(); }
  get status(): StripePaymentIntentStatus {
    switch (this.native.getStatus()) {
      case com.stripe.android.model.StripeIntent.Status.Canceled:
        return StripePaymentIntentStatus.Canceled;
      case com.stripe.android.model.StripeIntent.Status.Processing:
        return StripePaymentIntentStatus.Processing;
      case com.stripe.android.model.StripeIntent.Status.RequiresAction:
        return StripePaymentIntentStatus.RequiresAction;
      case com.stripe.android.model.StripeIntent.Status.RequiresCapture:
        return StripePaymentIntentStatus.RequiresCapture;
      case com.stripe.android.model.StripeIntent.Status.RequiresConfirmation:
        return StripePaymentIntentStatus.RequiresConfirmation;
      case com.stripe.android.model.StripeIntent.Status.RequiresPaymentMethod:
        return StripePaymentIntentStatus.RequiresPaymentMethod;
      case com.stripe.android.model.StripeIntent.Status.Succeeded:
        return StripePaymentIntentStatus.Succeeded;
    }
    return null;
  }
  get requiresAction(): boolean {
    return this.status === StripePaymentIntentStatus.RequiresAction;
  }
  get isSuccess(): boolean { return this.status === StripePaymentIntentStatus.Succeeded; }
  get requiresConfirmation(): boolean { return this.status === StripePaymentIntentStatus.RequiresConfirmation; }
  get requiresCapture(): boolean { return this.status === StripePaymentIntentStatus.RequiresCapture; }
}

export class StripePaymentIntent extends StripeIntent implements StripePaymentIntentCommon {
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

  get amount(): number { return this.native.getAmount().longValue(); }
  get created(): Date { return new Date(this.native.getCreated().longValue()); }
  get currency(): string { return this.native.getCurrency(); }
  get captureMethod(): "manual" | "automatic" { return this.native.getCaptureMethod() as "manual" | "automatic"; }
}

export class StripePaymentIntentParams {
  clientSecret: any;
  paymentMethodId: string;
  sourceId: string;
  returnURL: string;  // a URL that opens your app

  get native(): com.stripe.android.model.ConfirmPaymentIntentParams {
    if (this.sourceId) {
      return com.stripe.android.model.ConfirmPaymentIntentParams.createWithSourceId(this.sourceId, this.clientSecret, this.returnURL);
    } else if (this.paymentMethodId) {
      return com.stripe.android.model.ConfirmPaymentIntentParams.createWithPaymentMethodId(this.paymentMethodId, this.clientSecret, this.returnURL);
    } else {
      return com.stripe.android.model.ConfirmPaymentIntentParams.create(this.clientSecret);
    }
  }
}

export class StripeSetupIntentParams {
  native: com.stripe.android.model.ConfirmSetupIntentParams;

  constructor(paymentMethodId: string, clientSecret: string) {
    this.native = com.stripe.android.model.ConfirmSetupIntentParams.create(paymentMethodId, clientSecret);
  }
}

export class StripeSetupIntent extends StripeIntent {
  native: com.stripe.android.model.SetupIntent;

  static fromNative(native: com.stripe.android.model.SetupIntent): StripeSetupIntent {
    const si = new StripeSetupIntent();
    si.native = native;
    return si;
  }

  get paymentMethodId(): string { return this.native.getPaymentMethodId(); }
}
