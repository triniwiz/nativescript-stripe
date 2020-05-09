import { Injectable } from "@angular/core";
import { StripeAddress, StripeBackendAPI, StripeConfig, StripeCustomerSession, StripePaymentListener, StripePaymentSession, StripeShippingAddressField, StripeShippingMethod } from "nativescript-stripe/standard";
import * as httpModule from "tns-core-modules/http";
import { Page } from "tns-core-modules/ui/page";

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

@Injectable()
export class StripeService implements StripeBackendAPI {
  private customerSession: StripeCustomerSession;

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

    this.customerSession = new StripeCustomerSession();
  }

  // SetupIntent
  createSetupIntent(): Promise<any> {
    return this._postRequest("create_setup_intent").then(response => response.content.toJSON());
  }

  // PaymentIntent
  createPaymentIntent(amount: number, currency: string = 'usd'): Promise<any> {
    const content = `amount=${amount}&currency=${currency}`;
    return this._postRequest("create_payment_intent", content).then(response => response.content.toJSON());
  }

  createCustomerKey(apiVersion: string): Promise<any> {
    const content = `api_version=${apiVersion}`;
    return this._postRequest("ephemeral_keys", content).then(response => response.content.toJSON());
  }

  capturePayment(stripeID: string, amount: number, shippingMethod?: StripeShippingMethod, shippingAddress?: StripeAddress): Promise<any> {
    let content = `payment_method_id=${stripeID}&amount=${amount}`;
    if (shippingMethod && shippingAddress) content += `&${this._encodeShipping(shippingMethod, shippingAddress)}`;
    return this._postRequest("confirm_payment_intent", content).then(response => response.content.toJSON());
  }

  confirmPaymentIntent(paymentIntentID: string): Promise<any> {
    const content = `payment_intent_id=${paymentIntentID}`;
    return this._postRequest("confirm_payment_intent", content).then(response => response.content.toJSON());
  }

  createPaymentSession(page: Page, price: number, requireShipping: boolean, listener?: StripePaymentListener): StripePaymentSession {
    StripeConfig.shared().requiredShippingAddressFields = requireShipping ?
      [StripeShippingAddressField.PostalAddress] : [];
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

  /*
   *  Private
   */

  private _postRequest(endpoint: string, content: string = ''): Promise<any> {
    let url = this._backendURL(endpoint);
    return httpModule.request({
      url: url,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" },
      content
    }).then(response => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        throw new Error(`Status: ${response.statusCode}; ${response.content.toString()}.`);
      }
      return response;
    });
  }

  private _backendURL(pathComponent: string): string {
    if (!backendBaseURL) throw new Error("backendBaseURL must be set");
    if (!backendBaseURL.endsWith("/")) {
      return backendBaseURL + "/" + pathComponent;
    } else {
      return backendBaseURL + pathComponent;
    }
  }

  private _encodeShipping(method: StripeShippingMethod, address: StripeAddress): string {
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
}
