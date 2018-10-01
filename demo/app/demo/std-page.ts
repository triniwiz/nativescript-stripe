import { EventData, fromObject, Observable } from "data/observable";
import { StripeAddress, StripePaymentData, StripePaymentListener, StripePaymentSession, StripeShippingMethod, StripeShippingMethods } from "nativescript-stripe/standard";
import { Page } from "ui/page";
import { StripeService } from "./stripe.service";

const item = { id: 0, name: "Something to buy", price: 1200 };
let pageSource: Observable;
let stripeService: StripeService;
let paymentSession: StripePaymentSession;

export function navigatedTo(args: EventData) {
  let page = <Page>args.object;
  let context = page.navigationContext;
  if (context && context["startDemo"]) {
    pageSource = fromObject({
      isLoading: true,
      canBuy: false,
      paymentInProgress: false,
      item: item,
      paymentType: "Select Payment",
      paymentImage: null,
      shippingType: "Enter Shipping Info",
      total: 1200,
      successMessage: "",
      errorMessage: ""
    });
    stripeService = new StripeService();
    paymentSession = stripeService.createPaymentSession(page, item.price, new Listener());
  }

  page.bindingContext = pageSource;
}

export function showPaymentMethods(_args: EventData) {
  stripeService.showPaymentMethods(paymentSession);
}

export function showShipping(_args: EventData) {
  stripeService.showShipping(paymentSession);
}

export function buy(_args: EventData) {
  stripeService.requestPayment(paymentSession);
}

class Listener implements StripePaymentListener {
  onCommunicatingStateChanged(isCommunicating: boolean): void {
    pageSource.set("isLoading", isCommunicating);
  }

  onPaymentDataChanged(data: StripePaymentData) {
    console.log("New data: " + JSON.stringify(data) + ", " + paymentSession.amount);
    pageSource.set("canBuy", data.isReadyToCharge && !pageSource.get("paymentInProgress"));
    if (data.paymentMethod) {
      pageSource.set("paymentType", data.paymentMethod.label);
      pageSource.set("paymentImage", data.paymentMethod.image);
    }
    if (data.shippingInfo) {
      pageSource.set("shippingType", `${data.shippingInfo.label} ($${data.shippingInfo.amount / 100})`);
      pageSource.set("total", item.price + data.shippingInfo.amount);
    }
  }

  onPaymentSuccess(): void {
    let item = pageSource.get("item");
    pageSource.set("successMessage",
      `Congratulations! You bought a "${item.name}" for $${item.price / 100}.`);
  }

  onError(errorCode: number, message: string) {
    pageSource.set("errorMessage", message);
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
