import { StripeAddress, StripeBackendAPI, StripeConfig, StripeCustomerSession, StripePaymentListener, StripePaymentSession, StripeShippingAddressField, StripeShippingMethod } from "nativescript-stripe/standard";
import * as httpModule from "tns-core-modules/http";

// 1) To get started with this demo, first head to https://dashboard.stripe.com/account/apikeys
// and copy your "Test Publishable Key" (it looks like pk_test_abcdef) into the line below.
export const publishableKey = "pk_test_yours";

// 2) Next, optionally, to have this demo save your user's payment details, head to
// https://github.com/stripe/example-ios-backend , click "Deploy to Heroku", and follow
// the instructions (don't worry, it's free). Paste your Heroku URL below
// (it looks like https://blazing-sunrise-1234.herokuapp.com ).
const backendBaseURL = "https://yours.herokuapp.com/";

// 3) Optionally, to enable Apple Pay, follow the instructions at https://stripe.com/docs/apple-pay/apps
// to create an Apple Merchant ID. Paste it below (it looks like merchant.com.yourappname).
const appleMerchantID = "";

export class Listener {

  public component;
  constructor(component) {
    this.component = component;
  }
  onCommunicatingStateChanged(_isCommunicating) {

  }
  onPaymentDataChanged(data) {
    this.component.paymentMethod = data.paymentMethod;
    this.component.shippingInfo = data.shippingInfo;
    this.component.shippingAddress = data.shippingAddress;
  }
  onPaymentSuccess() {
    this.component.paymentInProgress = false;
    this.component.canBuy = true;
    this.component.successMessage =
      `Congratulations! You bought a "${this.component.item.name}" for $${this.component.item.price / 100}.`;

  }
  onUserCancelled() {
    this.component.paymentInProgress = false;
    this.component.canBuy = true;
  }
  onError(_errorCode, message) {
    this.component.paymentInProgress = false;
    this.component.canBuy = true;
    this.component.errorMessage = message;
  }
  provideShippingMethods(address) {
    let upsGround = {
      amount: 0,
      label: "UPS Ground",
      detail: "Arrives in 3-5 days",
      identifier: "ups_ground"
    };
    let upsWorldwide = {
      amount: 1099,
      label: "UPS Worldwide Express",
      detail: "Arrives in 1-3 days",
      identifier: "ups_worldwide"
    };
    let fedEx = {
      amount: 599,
      label: "FedEx",
      detail: "Arrives tomorrow",
      identifier: "fedex"
    };
    let methods = {};
    if (!address.country || address.country === "US") {
      methods['isValid'] = true;
      methods['validationError'] = undefined;
      methods['shippingMethods'] = [upsGround, fedEx];
      methods['selectedShippingMethod'] = fedEx;
    }
    else if (address.country === "AQ") {
      methods['isValid'] = false;
      methods['validationError'] = "We can't ship to this country.";
    }
    else {
      fedEx.amount = 2099;
      methods['isValid'] = true;
      methods['validationError'] = undefined;
      methods['shippingMethods'] = [upsWorldwide, fedEx];
      methods['selectedShippingMethod'] = fedEx;
    }
    return methods;
  }
}


export class StripeService implements StripeBackendAPI {
  private customerSession;

  constructor() {
    if (-1 !== publishableKey.indexOf("pk_test_yours")) {
      throw new Error("publishableKey must be changed from placeholder");
    }
    if (-1 !== backendBaseURL.indexOf("https://yours.herokuapp.com/")) {
      throw new Error("backendBaseURL must be changed from placeholder");
    }

    StripeConfig.shared().backendAPI = this;
    StripeConfig.shared().publishableKey = publishableKey;
    StripeConfig.shared().appleMerchantID = appleMerchantID;
    StripeConfig.shared().companyName = "Demo Company";
    StripeConfig.shared().requiredShippingAddressFields = [StripeShippingAddressField.PostalAddress];

    this.customerSession = new StripeCustomerSession();
  }

  private backendURL(pathComponent: string): string {
    if (!backendBaseURL) throw new Error("backendBaseURL must be set");
    if (!backendBaseURL.endsWith("/")) {
      return backendBaseURL + "/" + pathComponent;
    } else {
      return backendBaseURL + pathComponent;
    }
  }

  createCustomerKey(apiVersion: string): Promise<any> {
    let url = this.backendURL("ephemeral_keys");
    return httpModule.request({
      url: url,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" },
      content: "api_version=" + apiVersion
    }).then(response => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new Error(response.content.toString());
      }
      return response.content.toJSON();
    });
  }

  completeCharge(stripeID: string, amount: number, shippingMethod: StripeShippingMethod, shippingAddress: StripeAddress): Promise<void> {
    let url = this.backendURL("capture_payment");
    return httpModule.request({
      url: url,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" },
      content:
        "source=" + stripeID +
        "&amount=" + amount +
        "&" + this.encodeShipping(shippingMethod, shippingAddress)
    }).then(response => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new Error(response.content.toString());
      }
    });
  }

  private encodeShipping(method: StripeShippingMethod, address: StripeAddress): string {
    function entry(label: string, value: string): string {
      return value ? encodeURI(label) + "=" + encodeURI(value) : "";
    }
    return entry("shipping[carrier]", method.label) +
      entry("&shipping[name]", address.name) +
      entry("&shipping[address][line1]", address.line1) +
      entry("&shipping[address][line2]", address.line2) +
      entry("&shipping[address][city]", address.city) +
      entry("&shipping[address][state]", address.state) +
      entry("&shipping[address][country]", address.country) +
      entry("&shipping[address][postal_code]", address.postalCode) +
      entry("&phone", address.phone) +
      entry("&email", address.email);
  }

  createPaymentSession(page, price, listener?): StripePaymentSession {
    return new StripePaymentSession(page, this.customerSession, price, "usd", listener);
  }

  showPaymentMethods(paymentSession: StripePaymentSession) {
    paymentSession.presentPaymentMethods();
  }

  showShipping(paymentSession: StripePaymentSession) {
    paymentSession.presentShipping();
  }

  requestPayment(paymentSession: StripePaymentSession) {
    paymentSession.requestPayment();
  }
}