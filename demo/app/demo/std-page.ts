import { EventData } from "data/observable";
import { StripeAddress, StripePaymentData, StripePaymentListener, StripePaymentSession, StripeShippingMethod, StripeShippingMethods } from "nativescript-stripe/standard";
import { Page } from "ui/page";
import { StdDemoModel } from "./std-model";
import { StripeService } from "./stripe.service";

let stripeService: StripeService;
let paymentSession: StripePaymentSession;
let model: StdDemoModel;

export function navigatingTo(args: EventData) {
  stripeService = new StripeService();

  let page = <Page>args.object;
  model = new StdDemoModel();
  paymentSession = stripeService.createPaymentSession(page, model.item.price, new Listener());
  page.bindingContext = model;
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
    model.isLoading = isCommunicating;
  }

  onPaymentDataChanged(data: StripePaymentData) {
    console.log("New data: " + JSON.stringify(data) + ", " + paymentSession.amount);
    model.isLoading = paymentSession.loading;
    model.canBuy = data.isReadyToCharge && !model.paymentInProgress;
    if (data.paymentMethod) {
      model.paymentType = data.paymentMethod.label;
      model.paymentImage = data.paymentMethod.image;
    }
    if (data.shippingInfo) {
      model.shippingType = `${data.shippingInfo.label} ($${data.shippingInfo.amount / 100})`;
      model.total = model.item.price + data.shippingInfo.amount;
    }
  }

  onPaymentSuccess(): void {
    model.successMessage =
      `Congratulations! You bought a "${model.item.name}" for $${model.item.price / 100}.`;
  }

  onError(errorCode: number, message: string) {
    model.errorMessage = `Error(${errorCode}: ${message}`;
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
