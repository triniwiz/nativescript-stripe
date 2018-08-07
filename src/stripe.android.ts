import * as utils from 'tns-core-modules/utils/utils';
import { CreditCardViewBase, Token } from './stripe.common';
import * as types from 'tns-core-modules/utils/types';
declare const com, java;
export class Stripe {
  private _stripe: any /* com.stripe.android.Stripe */;
  constructor(apiKey: string) {
    this._stripe = new com.stripe.android.Stripe(
      utils.ad.getApplicationContext(),
      apiKey
    );
  }

  public createToken(card: any /*Native Card Instance*/, cb: Function) {
    const that = new WeakRef(this);
    this._stripe.createToken(
      card,
      new com.stripe.android.TokenCallback({
        owner: that.get(),
        onSuccess: function(token) {
          if (typeof cb === 'function') {
            console.log('class', types.getClass(token.getCard()));
            const newToken: Token = {
              id: token.getId(),
              bankAccount: token.getBankAccount(),
              card: Card.fromNative(card),
              created: new Date(token.getCreated()),
              livemode: token.getLivemode(),
              android: token,
              ios: null
            };
            cb(null, newToken);
          }
        },
        onError: function(error) {
          if (typeof cb === 'function') {
            cb(new Error(error.getLocalizedMessage()));
          }
        }
      })
    );
  }
}

export class Card {
  _card: any /*com.stripe.android.model.Card*/;
  constructor(
    cardNumber: string,
    cardExpMonth: number,
    cardExpYear: number,
    cardCVC: string
  ) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this._card = new com.stripe.android.model.Card(
        new java.lang.String(cardNumber),
        new java.lang.Integer(cardExpMonth),
        new java.lang.Integer(cardExpYear),
        new java.lang.String(cardCVC)
      );
    }
  }

  public static fromNative(card) {
    const newCard = new Card(null, null, null, null);
    newCard._card = card;
    return newCard;
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
  validateExpiryDate(): boolean {
    return this._card.validateExpiryDate();
  }
  get number(): string {
    return this._card.getNumber();
  }
  get cvc(): string {
    return this._card.getCVC();
  }
  get expMonth(): number {
    return this._card.getExpMonth();
  }
  get expYear(): number {
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

export class CreditCardView extends CreditCardViewBase {
  private _android;
  get android() {
    return this._android;
  }
  public createNativeView() {
    this._android = new com.stripe.android.view.CardInputWidget(this._context);
    return this._android;
  }

  get card(): Card {
    const card = this._android.getCard();
    if (card) {
      return new Card(
        card.getNumber(),
        card.getExpMonth(),
        card.getExpYear(),
        card.getCVC()
      );
    } else {
      return null;
    }
  }
}
