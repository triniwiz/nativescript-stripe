import { Page } from "tns-core-modules/ui/page";
import * as utils from "tns-core-modules/utils/utils";
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingMethod } from "../common";

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
        StripeConfig.shared().backendAPI.createCustomerKey(apiVersion)
            .then(key => {
                completion(key, null);
            }).catch(e => {
                completion(null, createError("CustomerKey", 500, e));
            });
    }
}

export class StripePaymentContext {
    native: STPPaymentContext;
    private delegate: StripePaymentDelegate; // Necessary to keep delegate in memory
     _paymentInProgress: boolean;

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
            this.delegate = StripePaymentDelegate.create(this, listener);
            this.native.delegate = this.delegate;
        }
    }

    /** Is the Stripe native component loading? */
    get loading(): boolean {
        return this.native.loading;
    }

    get isPaymentReady(): boolean {
        return this.native.selectedPaymentMethod != null;
    }

    get paymentInProgress(): boolean {
        return this._paymentInProgress;
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
        this._paymentInProgress = true;
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

    static create(parent: StripePaymentContext, listener: StripePaymentListener): StripePaymentDelegate {
        let self = <StripePaymentDelegate>super.new();
        self.parent = parent;
        self.listener = listener;
        return self;
    }

    private parent: StripePaymentContext;
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
        let shippingDic = STPAddress.shippingInfoForChargeWithAddressShippingMethod(paymentContext.shippingAddress, paymentContext.selectedShippingMethod);
        let shippingHash = encodeDictionary("shipping", shippingDic);
        StripeConfig.shared().backendAPI.completeCharge(
            paymentResult.source.stripeID,
            paymentContext.paymentAmount,
            shippingHash)
            .then(() => {
                completion(null);
            }).catch(e => {
                completion(createError("PaymentError", 100, e));
            });
    }

    paymentContextDidFailToLoadWithError(paymentContext: STPPaymentContext, error: NSError): void {
        console.info("paymentContextDidFailToLoadWithError");
        this.listener.onError(error.code, error.localizedDescription);
    }

    paymentContextDidFinishWithStatusError(paymentContext: STPPaymentContext, status: STPPaymentStatus, error: NSError): void {
        console.info("paymentContextDidFinishWithStatusError");
        this.parent._paymentInProgress = false;
        switch (status) {
            case STPPaymentStatus.Error:
                this.listener.onError(error.code, error.localizedDescription);
                break;
            case STPPaymentStatus.Success:
                this.listener.onPaymentSuccess();
                break;
            case STPPaymentStatus.UserCancellation:
                // Nothing to do.
                break;
        }
    }

    paymentContextDidUpdateShippingAddressCompletion(paymentContext: STPPaymentContext, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void {
        console.info("paymentContextDidUpdateShippingAddressCompletion");
        let methods = this.listener.provideShippingMethods(createAddress(address));
        if (!methods.isValid) {
            completion(STPShippingStatus.Invalid, createError("ShippingError", 123, methods.validationError), null, null);
        } else {
            let sh = <NSMutableArray<PKShippingMethod>>NSMutableArray.alloc().init();
            methods.shippingMethods.forEach(m => sh.addObject(createPKShippingMethod(m)));
            completion(STPShippingStatus.Valid, null, sh, createPKShippingMethod(methods.selectedShippingMethod));
        }
    }
}

function createError(domain: string, code: number, error: string): NSError {
    let userInfo = <NSMutableDictionary<string, any>>NSMutableDictionary.alloc().init();
    userInfo.setValueForKey(error, NSLocalizedDescriptionKey);
    // let userInfo = new NSDictionary(
    //     [error],
    //     [NSLocalizedDescriptionKey]);
    return new NSError({
        domain: domain, code: code, userInfo: userInfo
    });
}

function encodeDictionary(key: string, dict: NSDictionary<string, any>): string {
    let entries = encodeComponents(key, dict);
    return entries.map(e => `${e[0]}=${e[1]}`).join("&");
}

function encodeComponents(key: string, value: any): [string, string][] {
    let result: [string, string][] = [];

    if (value instanceof NSDictionary) {
        let keys = value.allKeys;
        for (let i = 0; i < keys.count; i++) {
            let k = keys[i];
            result = result.concat(encodeComponents(`${key}[${k}]`, value.objectForKey(k)));
        }
    } else if (value instanceof NSArray) {
        for (let i = 0; i < value.count; i++) {
            result = result.concat(encodeComponents(`${key}[]`, value[i]));
        }
    } else if (typeof value === "number") {
        result.push([encodeURI(key), "" + value]);
    } else if (typeof value === "boolean") {
        result.push([encodeURI(key), value ? "1" : "0"]);
    } else {
        result.push([encodeURI(key), encodeURI(value)]);
    }
    return result;
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
    m.amount = NSDecimalNumber.alloc().initWithDouble(method.amount / 100);
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
