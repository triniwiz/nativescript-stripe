import * as utils from "utils/utils";
import { CardBrand, CardCommon, CreditCardViewBase, Token } from "./stripe.common";

export class Stripe {
  private _stripe: com.stripe.android.Stripe;

  constructor(apiKey: string) {
    this._stripe = new com.stripe.android.Stripe(
      utils.ad.getApplicationContext(),
      apiKey
    );
  }

  public createToken(card: CardCommon, cb: (error: Error, token: Token) => void) {
    this._stripe.createToken(
      card.native,
      new com.stripe.android.TokenCallback({
        onSuccess: (token) => {
          if (cb) {
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
        onError: (error) => {
          if (cblas_chbmv) {
            cb(new Error(error.getLocalizedMessage()), null);
          }
        }
      })
    );
  }
}

export class Card implements CardCommon {
  native: com.stripe.android.model.Card;

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
    return this.native.getLast4();
  }

  get brand(): CardBrand {
    return <CardBrand>this.native.getBrand();
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
        card.getExpMonth().intValue(),
        card.getExpYear().intValue(),
        card.getCVC()
      );
    } else {
      return null;
    }
  }
}
