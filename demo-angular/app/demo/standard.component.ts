import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { StripeAddress, StripePaymentData, StripePaymentListener, StripePaymentMethod, StripePaymentSession, StripeShippingMethod, StripeShippingMethods } from "nativescript-stripe/standard";
import { Page } from "ui/page";
import { Item } from "./item";
import { StripeService } from "./stripe.service";

@Component({
  selector: "stp-details",
  moduleId: module.id,
  templateUrl: "./standard.component.html",
})
export class StandardComponent implements OnInit {
  item: Item;
  errorMessage: string;
  successMessage: string;
  private paymentSession: StripePaymentSession;
  paymentMethod: StripePaymentMethod;
  shippingInfo: StripeShippingMethod;

  constructor(
    private page: Page,
    private stripeService: StripeService,
    public changeDetectionRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.item = {
      id: 0,
      name: "Something to buy",
      price: 1200
    };
    this.paymentSession = this.stripeService.createPaymentSession(
      this.page, this.item.price, new Listener(this));
  }

  get isLoading(): boolean {
    return this.paymentSession ? this.paymentSession.loading : true;
  }

  get paymentInProgress(): boolean {
    return this.paymentSession ? this.paymentSession.paymentInProgress : false;
  }

  get canBuy(): boolean {
    return this.paymentSession ?
      this.paymentSession.isPaymentReady && !this.paymentSession.paymentInProgress :
      false;
  }

  get total(): number {
    return this.paymentSession ? this.paymentSession.amount : this.item.price;
  }

  get paymentType(): string {
    return this.paymentMethod ? this.paymentMethod.label : "Select Payment";
  }

  get paymentImage(): any {
    return this.paymentMethod ? this.paymentMethod.image : null;
  }

  get shippingType(): string {
    return this.shippingInfo ?
      `${this.shippingInfo.label} ($${this.shippingInfo.amount / 100})` :
      "Enter Shipping Info";
  }

  showPaymentMethods() {
    this.stripeService.showPaymentMethods(this.paymentSession);
  }

  showShipping() {
    this.stripeService.showShipping(this.paymentSession);
  }

  buy() {
    this.stripeService.requestPayment(this.paymentSession);
  }
}

class Listener implements StripePaymentListener {
  constructor(private component: StandardComponent) {
  }

  onCommunicatingStateChanged(_isCommunicating: boolean): void {
    this.component.changeDetectionRef.detectChanges();
  }

  onPaymentDataChanged(data: StripePaymentData) {
    this.component.paymentMethod = data.paymentMethod;
    this.component.shippingInfo = data.shippingInfo;
    this.component.changeDetectionRef.detectChanges();
  }

  onPaymentSuccess(): void {
    this.component.successMessage =
      `Congratulations! You bought a "${this.component.item.name}" for $${this.component.item.price / 100}.`;
    this.component.changeDetectionRef.detectChanges();
  }

  onUserCancelled(): void {
    this.component.changeDetectionRef.detectChanges();
  }

  onError(_errorCode: number, message: string) {
    this.component.errorMessage = message;
    this.component.changeDetectionRef.detectChanges();
  }

  provideShippingMethods(address: StripeAddress): StripeShippingMethods {
    let upsGround: StripeShippingMethod = {
      amount: 0,
      label: "UPS Ground",
      detail: "Arrives in 3-5 days",
      identifier: "ups_ground"
    };
    let upsWorldwide: StripeShippingMethod = {
      amount: 1099,
      label: "UPS Worldwide Express",
      detail: "Arrives in 1-3 days",
      identifier: "ups_worldwide"
    };
    let fedEx: StripeShippingMethod = {
      amount: 599,
      label: "FedEx",
      detail: "Arrives tomorrow",
      identifier: "fedex"
    };

    let methods = <StripeShippingMethods>{};
    if (!address.country || address.country === "US") {
      methods.isValid = true;
      methods.validationError = undefined;
      methods.shippingMethods = [upsGround, fedEx];
      methods.selectedShippingMethod = fedEx;
    } else if (address.country === "AQ") {
      methods.isValid = false;
      methods.validationError = "We can't ship to this country.";
    } else {
      fedEx.amount = 2099;
      methods.isValid = true;
      methods.validationError = undefined;
      methods.shippingMethods = [upsWorldwide, fedEx];
      methods.selectedShippingMethod = fedEx;
    }
    return methods;
  }
}
