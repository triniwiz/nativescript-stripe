import { CardBrand, CardCommon } from "../common";

export class Card implements CardCommon {
  native: any; /*stripe.model.Card;*/

  public static fromNative(card) {
    const newCard = new Card(null, null, null, null);
    newCard.native = card;
    return newCard;
  }

  constructor(cardNumber: string, cardExpMonth: number, cardExpYear: number, cardCVC: string) {
    if (cardNumber && cardExpMonth && cardExpYear && cardCVC) {
      this.native = new com.stripe.android.model.Card(
        cardNumber,
        new java.lang.Integer(cardExpMonth),
        new java.lang.Integer(cardExpYear),
        cardCVC);
    }
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
    return this.native.validateExpDate();
  }
  get number(): string {
    return this.native.getNumber();
  }
  get cvc(): string {
    return this.native.getCVC();
  }
  get expMonth(): any {
    return this.native.getExpMonth();
  }
  get expYear(): any {
    return this.native.getExpYear();
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
    return this.native.getBrand();
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