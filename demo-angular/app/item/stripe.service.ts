import { Injectable } from "@angular/core";
import { StripeConfig, StripeCustomerContext, StripePaymentContext } from "nativescript-stripe";

@Injectable()
export class StripeService {
    constructor() {
        // 1) To get started with this demo, first head to https://dashboard.stripe.com/account/apikeys
        // and copy your "Test Publishable Key" (it looks like pk_test_abcdef) into the line below.
        StripeConfig.publishableKey = "pk_test_s3dHtM9w6XmgB7ak7AbCSj51";
        
        // 2) Next, optionally, to have this demo save your user's payment details, head to
        // https://github.com/stripe/example-ios-backend , click "Deploy to Heroku", and follow
        // the instructions (don't worry, it's free). Replace nil on the line below with your
        // Heroku URL (it looks like https://blazing-sunrise-1234.herokuapp.com ).
        StripeConfig.backendBaseURL = "https://rg-example-stripe-backend.herokuapp.com/";
        
        // 3) Optionally, to enable Apple Pay, follow the instructions at https://stripe.com/docs/mobile/apple-pay
        // to create an Apple Merchant ID. Replace nil on the line below with it (it looks like merchant.com.yourappname).
        StripeConfig.appleMerchantID = "merchant.com.hearingclinic.hearingaids";
    }
    
    private _customerContext: StripeCustomerContext;


    get customerContext(): StripeCustomerContext {
        if (!this._customerContext) {
            this._customerContext = new StripeCustomerContext();
        }
        return this._customerContext;
    }

    createPaymentContext(price: number): StripePaymentContext {
        let paymentContext = new StripePaymentContext(this._customerContext);
        paymentContext.paymentAmount = price;
        paymentContext.paymentCurrency = "usd";
        return paymentContext;
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
