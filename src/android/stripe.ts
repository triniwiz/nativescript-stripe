import { android as androidApp } from "application";
import { Page } from "ui/page/page";
import * as utils from "utils/utils";
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingAddressField, StripeShippingMethod } from "../common";

export class Stripe {
    private _stripe: com.stripe.android.Stripe;
    private _ctx;
    constructor(apiKey: string) {
        this._ctx = utils.ad.getApplicationContext();
        this._stripe = new com.stripe.android.Stripe(this._ctx, apiKey);
    }
    createToken(card: any/*Native Card Instance*/, cb: Function) {
        this._stripe.createToken(
            card,
            new com.stripe.android.TokenCallback({
                onSuccess: function (token) {
                    if (typeof cb === "function") {
                        cb(null, token);
                    }
                },
                onError: function (error) {
                    // Show localized error message
                    console.log(error.getLocalizedMessage());
                    if (typeof cb === "function") {
                        cb(new Error(error.getLocalizedMessage()));
                    }
                }
            })
        );
    }
}

export class StripeConfig extends StripeConfigCommon {
    private _native: com.stripe.android.PaymentSessionConfig;
    get native(): com.stripe.android.PaymentSessionConfig {
        // getter gives client a chance to set properties before using.
        if (!this._native) this._native = this.toNative();
        return this._native;
    }

    private toNative(): com.stripe.android.PaymentSessionConfig {
        if (!this.publishableKey) throw new Error("publishableKey must be set");
        com.stripe.android.PaymentConfiguration.init(this.publishableKey);

        let optionalFields = [];
        if ((this.requiredShippingAddressFields & StripeShippingAddressField.PostalAddress) === 0) {
            optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.ADDRESS_LINE_ONE_FIELD);
        }
        if ((this.requiredShippingAddressFields & StripeShippingAddressField.Phone) === 0) {
            optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.PHONE_FIELD);
        }

        let config = new com.stripe.android.PaymentSessionConfig.Builder()
            .setShippingInfoRequired(this.requiredShippingAddressFields !== StripeShippingAddressField.None)
            .setOptionalShippingInfoFields(optionalFields)
            .build();
        return config;
    }

    static shared(): StripeConfig {
        if (!StripeConfigCommon.instance) StripeConfigCommon.instance = new StripeConfig();
        return <StripeConfig>StripeConfigCommon.instance;
    }
}

export class StripeCustomerSession {
    native: com.stripe.android.CustomerSession;

    constructor() {
        com.stripe.android.CustomerSession.initCustomerSession(createKeyProvider());
        this.native = com.stripe.android.CustomerSession.getInstance();
    }
}

function createKeyProvider(): com.stripe.android.EphemeralKeyProvider {
    return new com.stripe.android.EphemeralKeyProvider({
        createEphemeralKey(apiVersion: string, keyUpdateListener: com.stripe.android.EphemeralKeyUpdateListener): void {
            StripeConfig.shared().backendAPI.createCustomerKey(apiVersion)
                .then(key => {
                    keyUpdateListener.onKeyUpdate(JSON.stringify(key));
                    console.log("CustomerKey: " + JSON.stringify(key));
                }).catch(e => {
                    // TODO: Figure out what message to display here, instead of JSON.stringify()
                    console.log("CustomerKeyError: " + JSON.stringify(e));
                    keyUpdateListener.onKeyUpdateFailure(500, "CustomerKey: " + JSON.stringify(e));
                });
        }
    });
}

export class StripePaymentSession {
    native: com.stripe.android.PaymentSession;
    private receiver: android.content.BroadcastReceiver;
    loading: boolean;
    private _paymentInProgress: boolean;

    constructor(private page: Page,
        public customerSession: StripeCustomerSession,
        amount: number,
        public currency: string,
        listener?: StripePaymentListener) {
        this.native = new com.stripe.android.PaymentSession(this.patchActivity());
        if (!this.native.init(createPaymentListener(this, listener), StripeConfig.shared().native)) {
            throw new Error("CustomerSession not initialized");
        }
        this.native.setCartTotal(amount);
        this.receiver = createShippingBroadcastReceiver(this, listener);
        android.support.v4.content.LocalBroadcastManager.getInstance(androidApp.foregroundActivity).registerReceiver(this.receiver, new android.content.IntentFilter(com.stripe.android.view.PaymentFlowActivity.EVENT_SHIPPING_INFO_SUBMITTED));
    }

    get amount(): number {
        let data = this.native.getPaymentSessionData();
        return data.getCartTotal() + (data.getShippingMethod() ? data.getShippingMethod().getAmount() : 0);
    }

    get isPaymentReady(): boolean {
        return this.native.getPaymentSessionData().isPaymentReadyToCharge();
    }

    get paymentInProgress(): boolean {
        return this._paymentInProgress;
    }

    set paymentInProgress(progress: boolean) {
        this._paymentInProgress = progress;
    }

    get selectedPaymentMethod(): StripePaymentMethod {
        return createPaymentMethod(this, this.native.getPaymentSessionData().getSelectedPaymentMethodId());
    }

    get selectedShippingMethod(): StripeShippingMethod {
        return createShippingMethod(this, this.native.getPaymentSessionData());
    }

    requestPayment() {
        this._paymentInProgress = true;
        this.native.completePayment(createPaymentCompletionProvider());
    }

    presentPaymentMethods(): void {
        this.native.presentPaymentMethodSelection();
    }

    presentShipping(): void {
        this.native.presentShippingFlow();
    }

    private patchActivity(): android.app.Activity {
        let activity = androidApp.foregroundActivity;
        let session = this;

        // TODO: How do I call the original activity handler? The following doesn't work,
        // it throws an "undefined" exception. Note JSON.stringify(oldResultCallback) returns "undefined".
        let oldResultCallback = activity.onActivityResult;
        activity.onActivityResult = function (requestCode, resultCode, data) {
            console.log("oldResultCallback: " + JSON.stringify(oldResultCallback));
            // if (oldResultCallback) oldResultCallback(requestCode, resultCode, data);
            session.native.handlePaymentData(requestCode, resultCode, data);
        };
        let oldDestroyCallback = activity.onDestroy;
        activity.onDestroy = function () {
            console.log("oldDestroyCallback: " + JSON.stringify(oldDestroyCallback));
            if (oldDestroyCallback) oldDestroyCallback();
            session.native.onDestroy();
            android.support.v4.content.LocalBroadcastManager.getInstance(activity).unregisterReceiver(this.receiver);
        };
        return activity;
    }
}

function createPaymentListener(parent: StripePaymentSession, listener: StripePaymentListener): com.stripe.android.PaymentSession.PaymentSessionListener {
    return new com.stripe.android.PaymentSession.PaymentSessionListener({
        onPaymentSessionDataChanged(paymentData: com.stripe.android.PaymentSessionData): void {
            if (parent.paymentInProgress) {
                if (paymentData.getPaymentResult() === com.stripe.android.PaymentResultListener.SUCCESS) {
                    listener.onPaymentSuccess();
                } else if (paymentData.getPaymentResult() === com.stripe.android.PaymentResultListener.ERROR) {
                    // TODO: What to pass here?
                    listener.onError(100, "Payment processing failed");
                }
                parent.paymentInProgress = false;
                return;
            }
            let data = {
                isReadyToCharge: paymentData.isPaymentReadyToCharge(),
                paymentMethod: createPaymentMethod(parent, paymentData.getSelectedPaymentMethodId()),
                shippingInfo: createShippingMethod(parent, paymentData)
            };
            listener.onPaymentDataChanged(data);
            console.log("Data now: " + JSON.stringify(data));
        },
        onCommunicatingStateChanged(isCommunicating: boolean): void {
            parent.loading = isCommunicating;
            listener.onCommunicatingStateChanged(isCommunicating);
            console.log("isCommunicating: " + isCommunicating);
        },
        onError(code: number, message: string): void {
            listener.onError(code, message);
            console.log("Error: " + code + ", " + message);
        }
    });
}

function createShippingBroadcastReceiver(parent: StripePaymentSession, listener: StripePaymentListener): android.content.BroadcastReceiver {
    class InternalReceiver extends android.content.BroadcastReceiver {
        constructor(private parent: StripePaymentSession, private listener: StripePaymentListener) {
            super();
            return global.__native(this);
        }

        onReceive(context: android.content.Context, intent: android.content.Intent) {
            let shippingInformation = <com.stripe.android.model.ShippingInformation>intent.getParcelableExtra(com.stripe.android.view.PaymentFlowActivity.EXTRA_SHIPPING_INFO_DATA);
            let shippingMethods = this.listener.provideShippingMethods(createAddress(shippingInformation));

            let shippingInfoProcessedIntent = new android.content.Intent(com.stripe.android.view.PaymentFlowActivity.EVENT_SHIPPING_INFO_PROCESSED);
            if (!shippingMethods.isValid) {
                shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowActivity.EXTRA_IS_SHIPPING_INFO_VALID, false);
                shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowActivity.EXTRA_SHIPPING_INFO_ERROR, shippingMethods.validationError);
            } else {
                shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowActivity.EXTRA_IS_SHIPPING_INFO_VALID, true);
                let methods = new java.util.ArrayList<com.stripe.android.model.ShippingMethod>();
                shippingMethods.shippingMethods.forEach(m => methods.add(createAdShippingMethod(m, this.parent.currency)));
                shippingInfoProcessedIntent.putParcelableArrayListExtra(com.stripe.android.view.PaymentFlowActivity.EXTRA_VALID_SHIPPING_METHODS, methods);
                shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowActivity.EXTRA_DEFAULT_SHIPPING_METHOD,
                    createAdShippingMethod(shippingMethods.selectedShippingMethod, this.parent.currency));
            }
            android.support.v4.content.LocalBroadcastManager.getInstance(context).sendBroadcast(shippingInfoProcessedIntent);
        }
    }
    return new InternalReceiver(parent, listener);
}

function createPaymentCompletionProvider(): com.stripe.android.PaymentCompletionProvider {
    return new com.stripe.android.PaymentCompletionProvider({
        completePayment(data: com.stripe.android.PaymentSessionData, listener: com.stripe.android.PaymentResultListener): void {
            StripeConfig.shared().backendAPI.completeCharge(
                data.getSelectedPaymentMethodId(),
                data.getCartTotal() + data.getShippingMethod().getAmount(),
                encodeMap("shipping", data.getShippingInformation().toMap()))
                .then(() => {
                    listener.onPaymentResult(com.stripe.android.PaymentResultListener.SUCCESS);
                }).catch(e => {
                    // TODO: How to return the error? createError("PaymentError", 100, e));
                    listener.onPaymentResult(com.stripe.android.PaymentResultListener.ERROR);
                });
        }
    });
}

function encodeMap(key: string, map: java.util.Map<string, any>): string {
    let entries = encodeEntries(key, map);
    return entries.map(e => `${e[0]}=${e[1]}`).join("&");
}

function encodeEntries(key: string, value: any): [string, string][] {
    let result: [string, string][] = [];

    if (value instanceof java.util.Map) {
        let keys = value.keySet().iterator();
        while (keys.hasNext()) {
            let k = keys.next();
            result = result.concat(encodeEntries(`${key}[${k}]`, value.get(k)));
        }
    } else if (value instanceof java.util.ArrayList) {
        for (let i = 0; i < value.size(); i++) {
            result = result.concat(encodeEntries(`${key}[]`, value[i]));
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

function createPaymentMethod(paymentSession: StripePaymentSession, paymentMethodId: string): StripePaymentMethod {
    if (!paymentMethodId) return undefined;
    let label: string;
    let image: any;
    paymentSession.customerSession.native.retrieveCurrentCustomer(new com.stripe.android.CustomerSession.CustomerRetrievalListener({
        onCustomerRetrieved(customer: com.stripe.android.model.Customer) {
            let sourceId = customer.getDefaultSource();
            if (sourceId == null) return undefined;
            let source = customer.getSourceById(sourceId).asSource();
            if (source.getType() === com.stripe.android.model.Source.CARD) {
                let card = <com.stripe.android.model.SourceCardData>source.getSourceTypeModel();
                label = `${card.getBrand()} ...${card.getLast4()}`;
                image = com.stripe.android.model.Card.BRAND_RESOURCE_MAP.get(card.getBrand()).longValue();
            } else {
                label = source.getType();
            }
        },

        onError(errorCode: number, errorMessage: string) {
            label = `${errorMessage} (${errorCode})`;
        }
    }));
    return {
        label: label,
        image: image,
        templateImage: undefined
    };
}

function createShippingMethod(paymentSession: StripePaymentSession, paymentData: com.stripe.android.PaymentSessionData): StripeShippingMethod {
    if (!paymentData) return undefined;
    let shipping = paymentData.getShippingMethod();
    if (!shipping) return undefined;
    return {
        amount: shipping.getAmount(),
        detail: shipping.getDetail(),
        label: shipping.getLabel(),
        identifier: shipping.getIdentifier()
    };
}

function createAddress(info: com.stripe.android.model.ShippingInformation): StripeAddress {
    let address = info.getAddress();
    return {
        name: info.getName(),
        line1: address.getLine1(),
        line2: address.getLine2(),
        city: address.getCity(),
        state: address.getState(),
        postalCode: address.getPostalCode(),
        country: address.getCountry(),
        phone: info.getPhone(),
        email: undefined
    };
}

function createAdShippingMethod(method: StripeShippingMethod, currency: string): com.stripe.android.model.ShippingMethod {
    return new com.stripe.android.model.ShippingMethod(
        method.label,
        method.identifier,
        method.detail,
        method.amount,
        currency
    );
}