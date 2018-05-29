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
    static _native: STPPaymentConfiguration;
    static get native(): STPPaymentConfiguration {
        if (!StripeConfig._native) StripeConfig._native = StripeConfig.toNative();
        return StripeConfig._native;
    }

    private static toNative(): STPPaymentConfiguration {
        if (!StripeConfig.publishableKey) throw new Error("publishableKey must be set");
        let config = STPPaymentConfiguration.sharedConfiguration();
        if (StripeConfig.publishableKey) config.publishableKey = StripeConfig.publishableKey;
        if (StripeConfig.appleMerchantID) config.appleMerchantIdentifier = StripeConfig.appleMerchantID;
        if (StripeConfig.requiredBillingAddressFields) config.requiredBillingAddressFields = StripeConfig.requiredBillingAddressFields;
        if (StripeConfig.requiredShippingAddressFields) config.requiredShippingAddressFields = StripeConfig.requiredShippingAddressFields;
        if (StripeConfig.shippingType) config.shippingType = StripeConfig.shippingType;
        if (StripeConfig.additionalPaymentMethods) config.additionalPaymentMethods = StripeConfig.additionalPaymentMethods;
        // if (StripeConfig.createCardSources !== undefined) config.createCardSources = StripeConfig.createCardSources;
        if (StripeConfig.companyName) config.companyName = StripeConfig.companyName;
        if (StripeConfig.verifyPrefilledShippingAddress !== undefined) config.verifyPrefilledShippingAddress = StripeConfig.verifyPrefilledShippingAddress;
        return config;
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
        let url = StripeConfig.backendURL("ephemeral_keys");
        httpModule.request({
            url: url,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                "api_version": apiVersion
            })
        }).then(response => {
            completion(response.content.toJSON(), null);
        }, e => {
            completion(null, e);
        });
    }
}

export class StripePaymentContext {
    native: STPPaymentContext;

    constructor(customerContext: StripeCustomerContext) {
        this.native = STPPaymentContext.alloc()
            .initWithCustomerContextConfigurationTheme(
                customerContext.native,
                StripeConfig.native,
                STPTheme.defaultTheme());
        this.native.prefilledInformation = STPUserInformation.alloc().init();
    }

    get paymentAmount(): number {
        return this.native.paymentAmount;
    }
    set paymentAmount(amount: number) {
        this.native.paymentAmount = amount;
    }

    get paymentCurrency(): string {
        return this.native.paymentCurrency;
    }
    set paymentCurrency(curr: string) {
        this.native.paymentCurrency = curr;
    }

    requestPayment() {
        this.native.requestPayment();
    }

    presentPaymentMethods(): void {
        this.native.presentPaymentMethodsViewController();
    }

    presentShipping(): void {
        this.native.presentShippingViewController();
    }
}
