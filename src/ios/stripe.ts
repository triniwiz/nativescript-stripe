import { Page } from "tns-core-modules/ui/page";
import { StripeConfigCommon } from "../common";

const httpModule = require("http");
const getter = require("utils/utils").ios.getter;

export class Stripe {
    createToken(card: any/*Native Card Instance*/, cb: Function) {
        const apiClient = getter(STPAPIClient, STPAPIClient.sharedClient);
        apiClient.createTokenWithCardCompletion(card, (token: STPToken, error: NSError) => {
            if (!error) {
                if (typeof cb === "function") {
                    cb(null, token);
                }
            } else {
                console.log(error.localizedDescription);
                if (typeof cb === "function") {
                    cb(new Error(error.localizedDescription));
                }
            }
        });
    }
}

export class StripeConfig extends StripeConfigCommon {
    private _native: STPPaymentConfiguration;
    get native(): STPPaymentConfiguration {
        // getter gives client a chance to set properties before using.
        if (!this._native) this._native = this.toNative();
        return this._native;
    }

    private toNative(): STPPaymentConfiguration {
        if (!this.publishableKey) throw new Error("publishableKey must be set");
        let config = STPPaymentConfiguration.sharedConfiguration();
        if (this.publishableKey) config.publishableKey = this.publishableKey;
        if (this.appleMerchantID) config.appleMerchantIdentifier = this.appleMerchantID;
        if (this.requiredBillingAddressFields) config.requiredBillingAddressFields = this.requiredBillingAddressFields;
        if (this.requiredShippingAddressFields) config.requiredShippingAddressFields = this.requiredShippingAddressFields;
        if (this.shippingType) config.shippingType = this.shippingType;
        if (this.additionalPaymentMethods) config.additionalPaymentMethods = this.additionalPaymentMethods;
        if (this.createCardSources !== undefined) config.createCardSources = this.createCardSources;
        if (this.companyName) config.companyName = this.companyName;
        if (this.verifyPrefilledShippingAddress !== undefined) config.verifyPrefilledShippingAddress = this.verifyPrefilledShippingAddress;
        if (this.stripeAccount) config.stripeAccount = this.stripeAccount;
        return config;
    }

    static shared(): StripeConfig {
        if (!StripeConfigCommon.instance) StripeConfigCommon.instance = new StripeConfig();
        return <StripeConfig>StripeConfigCommon.instance;
    }
}

export class StripeCustomerContext {
    native: STPCustomerContext;

    constructor() {
        this.native = STPCustomerContext.alloc().initWithKeyProvider(StripeKeyProvider.new());
    }
}

class StripeKeyProvider extends NSObject implements STPEphemeralKeyProvider {
    static ObjCProtocols = [STPEphemeralKeyProvider];

    static new(): StripeKeyProvider {
        return <StripeKeyProvider>super.new();
    }

    createCustomerKeyWithAPIVersionCompletion(apiVersion: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void {
        let url = StripeConfig.shared().backendURL("ephemeral_keys");
        httpModule.request({
            url: url,
            method: "POST",
            content: "api_version=" + apiVersion
        }).then(response => {
            completion(response.content.toJSON(), null);
        }, e => {
            completion(null, e);
        });
    }
}

export class StripePaymentContext {
    native: STPPaymentContext;

    constructor(private page: Page,
        customerContext: StripeCustomerContext,
        amount: number,
        currency: string) {
        this.native = STPPaymentContext.alloc()
            .initWithCustomerContextConfigurationTheme(
                customerContext.native,
                StripeConfig.shared().native,
                STPTheme.defaultTheme());
        this.native.prefilledInformation = STPUserInformation.alloc().init();
        this.native.paymentAmount = amount;
        this.native.paymentCurrency = currency;
    }
    
    /**
     * Makes sure the hostViewController is set.
     * For reasons TBD, setting hostViewController in an ngOnInit() results
     * in infinite recursion. So to make life easier for clients, do it here.
     */
    private ensureHostViewController(): void {
        if (!this.native.hostViewController) this.native.hostViewController = this.page.ios;
    }

    requestPayment() {
        this.ensureHostViewController();
        this.native.requestPayment();
    }

    presentPaymentMethods(): void {
        this.ensureHostViewController();
        this.native.presentPaymentMethodsViewController();
    }

    presentShipping(): void {
        this.ensureHostViewController();
        this.native.presentShippingViewController();
    }
}
