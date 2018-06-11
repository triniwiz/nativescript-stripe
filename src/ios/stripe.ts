import { Page } from "tns-core-modules/ui/page";
import * as utils from "tns-core-modules/utils/utils";
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingMethod } from "../common";

const httpModule = require("http");

export class Stripe {
    createToken(card: any/*Native Card Instance*/, cb: Function) {
        const apiClient = utils.ios.getter(STPAPIClient, STPAPIClient.sharedClient);
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
    private delegate: StripePaymentDelegate; // Necessary to keep delegate in memory

    constructor(private page: Page,
        customerContext: StripeCustomerContext,
        amount: number,
        currency: string,
        listener?: StripePaymentListener) {
        this.native = STPPaymentContext.alloc()
            .initWithCustomerContextConfigurationTheme(
                customerContext.native,
                StripeConfig.shared().native,
                STPTheme.defaultTheme());
        this.native.prefilledInformation = STPUserInformation.alloc().init();
        this.native.paymentAmount = amount;
        this.native.paymentCurrency = currency;
        if (listener) {
            this.delegate = StripePaymentDelegate.create(listener);
            this.native.delegate = this.delegate;
        }
    }

    /** Total amount (including shipping) in pennies. */
    get amount(): number {
        return this.native.paymentAmount;
    }

    get selectedPaymentMethod(): StripePaymentMethod {
        return createPaymentMethod(this.native);
    }

    get selectedShippingMethod(): StripeShippingMethod {
        return createShippingMethod(this.native);
    }

    /**
     * Makes sure the hostViewController is set.
     * For reasons TBD, setting hostViewController in an ngOnInit() results
     * in infinite recursion. So to make life easier for clients, set the controller here.
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

class StripePaymentDelegate extends NSObject implements STPPaymentContextDelegate {
    static ObjCProtocols = [STPPaymentContextDelegate];

    static create(listener: StripePaymentListener): StripePaymentDelegate {
        let self = <StripePaymentDelegate>super.new();
        self.listener = listener;
        return self;
    }

    private listener: StripePaymentListener;

    paymentContextDidChange(paymentContext: STPPaymentContext): void {
        console.info("paymentContextDidChange");
        let data = {
            isReadyToCharge: false,
            paymentMethod: createPaymentMethod(paymentContext),
            shippingInfo: createShippingMethod(paymentContext)
        };
        this.listener.onPaymentDataChanged(data);
    }

    paymentContextDidCreatePaymentResultCompletion(paymentContext: STPPaymentContext, paymentResult: STPPaymentResult, completion: (p1: NSError) => void): void {
        console.info("paymentContextDidCreatePaymentResultCompletion");
    }

    paymentContextDidFailToLoadWithError(paymentContext: STPPaymentContext, error: NSError): void {
        console.info("paymentContextDidFailToLoadWithError");
        this.listener.onError(error.code, error.localizedDescription);
    }

    paymentContextDidFinishWithStatusError(paymentContext: STPPaymentContext, status: STPPaymentStatus, error: NSError): void {
        console.info("paymentContextDidFinishWithStatusError");
        switch (status) {
            case STPPaymentStatus.Error:
                this.listener.onError(error.code, error.localizedDescription);
                break;
            case STPPaymentStatus.Success:
                console.info("paymentFinishedWithSuccess");
                break;
            case STPPaymentStatus.UserCancellation:
                console.info("paymentCancellation");
                break;
        }
    }

    paymentContextDidUpdateShippingAddressCompletion(paymentContext: STPPaymentContext, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void {
        console.info("paymentContextDidUpdateShippingAddressCompletion");
        let methods = this.listener.provideShippingMethods(createAddress(address));
        if (!methods.isValid) {
            let userInfo = <NSMutableDictionary<string, any>>NSMutableDictionary.alloc().init();
            userInfo.setValueForKey(methods.validationError, NSLocalizedDescriptionKey);
            // let userInfo = new NSDictionary(
            //     [methods.validationError],
            //     [NSLocalizedDescriptionKey]);
            let error = new NSError({
                domain: "ShippingError", code: 123, userInfo: userInfo
            });
            completion(STPShippingStatus.Invalid, error, null, null);
        } else {
            let sh = <NSMutableArray<PKShippingMethod>>NSMutableArray.alloc().init();
            methods.shippingMethods.forEach(m => sh.addObject(createPKShippingMethod(m)));
            completion(
                STPShippingStatus.Valid,
                null,
                sh,
                createPKShippingMethod(methods.selectedShippingMethod)
            );
        }
    }
}

function createPaymentMethod(paymentContext: STPPaymentContext): StripePaymentMethod {
    if (!paymentContext.selectedPaymentMethod) return undefined;
    return {
        label: paymentContext.selectedPaymentMethod.label,
        image: paymentContext.selectedPaymentMethod.image,
        templateImage: paymentContext.selectedPaymentMethod.templateImage
    };
}

function createShippingMethod(paymentContext: STPPaymentContext): StripeShippingMethod {
    if (!paymentContext.selectedShippingMethod) return undefined;
    return {
        amount: paymentContext.selectedShippingMethod.amount.doubleValue * 100,
        detail: paymentContext.selectedShippingMethod.detail,
        label: paymentContext.selectedShippingMethod.label,
        identifier: paymentContext.selectedShippingMethod.identifier
    };
}

function createPKShippingMethod(method: StripeShippingMethod): PKShippingMethod {
    let m = PKShippingMethod.alloc().init();
    m.amount = NSDecimalNumber.alloc().initWithDouble(method.amount/100);
    m.detail = method.detail;
    m.label = method.label;
    m.identifier = method.identifier;
    return m;
}

function createAddress(address: STPAddress): StripeAddress {
    return {
        name: address.name,
        line1: address.line1,
        line2: address.line2,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country,
        phone: address.phone,
        email: address.email
    };
}
