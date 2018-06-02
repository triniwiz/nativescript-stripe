import { Injectable } from "@angular/core";
import { PKAddressField, STPPaymentMethodType, STPShippingType, StripeConfig, StripeCustomerContext, StripePaymentContext } from "nativescript-stripe";
import { Page } from "tns-core-modules/ui/page";

// 1) To get started with this demo, first head to https://dashboard.stripe.com/account/apikeys
// and copy your "Test Publishable Key" (it looks like pk_test_abcdef) into the line below.
const publishableKey = "pk_test_s3dHtM9w6XmgB7ak7AbCSj51";

// 2) Next, optionally, to have this demo save your user's payment details, head to
// https://github.com/stripe/example-ios-backend , click "Deploy to Heroku", and follow
// the instructions (don't worry, it's free). Paste your Heroku URL below
// (it looks like https://blazing-sunrise-1234.herokuapp.com ).
const backendBaseURL = "https://rg-example-stripe-backend.herokuapp.com/";

// 3) Optionally, to enable Apple Pay, follow the instructions at https://stripe.com/docs/mobile/apple-pay
// to create an Apple Merchant ID. Paste it below (it looks like merchant.com.yourappname).
const appleMerchantID = "merchant.com.hearingclinic.hearingaids";

@Injectable()
export class StripeService {
    private customerContext: StripeCustomerContext;

    constructor() {
        StripeConfig.shared().publishableKey = publishableKey;
        StripeConfig.shared().backendBaseURL = backendBaseURL;
        StripeConfig.shared().appleMerchantID = appleMerchantID;
        StripeConfig.shared().companyName = "Demo Company";
        StripeConfig.shared().shippingType = STPShippingType.Shipping;
        StripeConfig.shared().requiredShippingAddressFields = PKAddressField.PostalAddress;
        StripeConfig.shared().additionalPaymentMethods = STPPaymentMethodType.All;

        this.customerContext = new StripeCustomerContext();
    }    
    
    createPaymentContext(page: Page, price: number): StripePaymentContext {
        return new StripePaymentContext(page, this.customerContext, price, "usd");
    }

    showPaymentMethods(paymentContext: StripePaymentContext) {
        paymentContext.presentPaymentMethods();
    }

    showShipping(paymentContext: StripePaymentContext) {
        paymentContext.presentShipping();
    }

    requestPayment(paymentContext: StripePaymentContext) {
        paymentContext.requestPayment();
    }
}
