declare module com {
	export module stripe {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<com.stripe.android.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CardUtils {
				public static class: java.lang.Class<com.stripe.android.CardUtils>;
				public static isValidCardNumber(param0: string): boolean;
				public constructor();
				public static getPossibleCardType(param0: string): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerSession extends com.stripe.android.EphemeralKeyManager.KeyManagerListener {
				public static class: java.lang.Class<com.stripe.android.CustomerSession>;
				public static ACTION_API_EXCEPTION: string;
				public static EXTRA_EXCEPTION: string;
				public static EVENT_SHIPPING_INFO_SAVED: string;
				public getCachedCustomer(): com.stripe.android.model.Customer;
				public addCustomerSource(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public static getInstance(): com.stripe.android.CustomerSession;
				public setCustomerShippingInformation(param0: globalAndroid.content.Context, param1: com.stripe.android.model.ShippingInformation): void;
				public updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public static initCustomerSession(param0: com.stripe.android.EphemeralKeyProvider): void;
				public addProductUsageTokenIfValid(param0: string): void;
				public deleteCustomerSource(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public setCustomerDefaultSource(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public onKeyUpdate(param0: com.stripe.android.EphemeralKey, param1: string, param2: java.util.Map<string,any>): void;
				public static endCustomerSession(): void;
				public retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public onKeyError(param0: number, param1: string): void;
			}
			export module CustomerSession {
				export class CustomerRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$CustomerRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
						onError(param0: number, param1: string): void;
					});
					public constructor();
					public onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
					public onError(param0: number, param1: string): void;
				}
				export class SourceRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.SourceRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$SourceRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSourceRetrieved(param0: com.stripe.android.model.Source): void;
						onError(param0: number, param1: string): void;
					});
					public constructor();
					public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
					public onError(param0: number, param1: string): void;
				}
				export class StripeApiProxy {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.StripeApiProxy>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$StripeApiProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						retrieveCustomerWithKey(param0: string, param1: string): com.stripe.android.model.Customer;
						addCustomerSourceWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: string, param6: string): com.stripe.android.model.Source;
						deleteCustomerSourceWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: string): com.stripe.android.model.Source;
						setDefaultCustomerSourceWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: string, param6: string): com.stripe.android.model.Customer;
						setCustomerShippingInfoWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: com.stripe.android.model.ShippingInformation, param5: string): com.stripe.android.model.Customer;
					});
					public constructor();
					public addCustomerSourceWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: string, param6: string): com.stripe.android.model.Source;
					public deleteCustomerSourceWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: string): com.stripe.android.model.Source;
					public retrieveCustomerWithKey(param0: string, param1: string): com.stripe.android.model.Customer;
					public setDefaultCustomerSourceWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: string, param6: string): com.stripe.android.model.Customer;
					public setCustomerShippingInfoWithKey(param0: globalAndroid.content.Context, param1: string, param2: string, param3: java.util.List<string>, param4: com.stripe.android.model.ShippingInformation, param5: string): com.stripe.android.model.Customer;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKey extends com.stripe.android.model.StripeJsonModel {
				public static class: java.lang.Class<com.stripe.android.EphemeralKey>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.EphemeralKey>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public toJson(): org.json.JSONObject;
				public describeContents(): number;
				public toMap(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyManager {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager>;
			}
			export module EphemeralKeyManager {
				export class ClientKeyUpdateListener extends com.stripe.android.EphemeralKeyUpdateListener {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.ClientKeyUpdateListener>;
					public onKeyUpdate(param0: string): void;
					public onKeyUpdateFailure(param0: number, param1: string): void;
				}
				export class KeyManagerListener {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.KeyManagerListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.EphemeralKeyManager$KeyManagerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKeyUpdate(param0: com.stripe.android.EphemeralKey, param1: string, param2: java.util.Map<string,any>): void;
						onKeyError(param0: number, param1: string): void;
					});
					public constructor();
					public onKeyError(param0: number, param1: string): void;
					public onKeyUpdate(param0: com.stripe.android.EphemeralKey, param1: string, param2: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyProvider {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyProvider>;
				/**
				 * Constructs a new instance of the com.stripe.android.EphemeralKeyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createEphemeralKey(param0: string, param1: com.stripe.android.EphemeralKeyUpdateListener): void;
				});
				public constructor();
				public createEphemeralKey(param0: string, param1: com.stripe.android.EphemeralKeyUpdateListener): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyUpdateListener {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyUpdateListener>;
				/**
				 * Constructs a new instance of the com.stripe.android.EphemeralKeyUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onKeyUpdate(param0: string): void;
					onKeyUpdateFailure(param0: number, param1: string): void;
				});
				public constructor();
				public onKeyUpdate(param0: string): void;
				public onKeyUpdateFailure(param0: number, param1: string): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ErrorParser {
				public static class: java.lang.Class<com.stripe.android.ErrorParser>;
			}
			export module ErrorParser {
				export class StripeError {
					public static class: java.lang.Class<com.stripe.android.ErrorParser.StripeError>;
					public type: string;
					public message: string;
					public code: string;
					public param: string;
					public decline_code: string;
					public charge: string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class LoggingUtils {
				public static class: java.lang.Class<com.stripe.android.LoggingUtils>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PayWithGoogleUtils {
				public static class: java.lang.Class<com.stripe.android.PayWithGoogleUtils>;
				public static getPriceString(param0: number, param1: java.util.Currency): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentCompletionProvider {
				public static class: java.lang.Class<com.stripe.android.PaymentCompletionProvider>;
				/**
				 * Constructs a new instance of the com.stripe.android.PaymentCompletionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					completePayment(param0: com.stripe.android.PaymentSessionData, param1: com.stripe.android.PaymentResultListener): void;
				});
				public constructor();
				public completePayment(param0: com.stripe.android.PaymentSessionData, param1: com.stripe.android.PaymentResultListener): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentConfiguration {
				public static class: java.lang.Class<com.stripe.android.PaymentConfiguration>;
				public getShouldUseSourcesForCards(): boolean;
				public setShouldUseSourcesForCards(param0: boolean): com.stripe.android.PaymentConfiguration;
				public getPublishableKey(): string;
				public getRequiredBillingAddressFields(): number;
				public static init(param0: string): void;
				public static getInstance(): com.stripe.android.PaymentConfiguration;
				public setRequiredBillingAddressFields(param0: number): com.stripe.android.PaymentConfiguration;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentResultListener {
				public static class: java.lang.Class<com.stripe.android.PaymentResultListener>;
				/**
				 * Constructs a new instance of the com.stripe.android.PaymentResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPaymentResult(param0: string): void;
				});
				public constructor();
				public static SUCCESS: string;
				public static INCOMPLETE: string;
				public static ERROR: string;
				public static USER_CANCELLED: string;
				public onPaymentResult(param0: string): void;
			}
			export module PaymentResultListener {
				export class PaymentResult {
					public static class: java.lang.Class<com.stripe.android.PaymentResultListener.PaymentResult>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentResultListener$PaymentResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSession {
				public static class: java.lang.Class<com.stripe.android.PaymentSession>;
				public static TOKEN_PAYMENT_SESSION: string;
				public static EXTRA_PAYMENT_SESSION_ACTIVE: string;
				public static PAYMENT_SESSION_DATA_KEY: string;
				public static PAYMENT_SESSION_CONFIG: string;
				public savePaymentSessionInstanceState(param0: globalAndroid.os.Bundle): void;
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig, param2: globalAndroid.os.Bundle): boolean;
				public constructor(param0: globalAndroid.app.Activity);
				public updateIsPaymentReadyToCharge(param0: com.stripe.android.PaymentSessionConfig, param1: com.stripe.android.PaymentSessionData): boolean;
				public getPaymentSessionData(): com.stripe.android.PaymentSessionData;
				public setCartTotal(param0: number): void;
				public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig): boolean;
				public presentPaymentMethodSelection(): void;
				public presentShippingFlow(): void;
				public onDestroy(): void;
				public handlePaymentData(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public completePayment(param0: com.stripe.android.PaymentCompletionProvider): void;
			}
			export module PaymentSession {
				export class PaymentSessionListener {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.PaymentSessionListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.PaymentSession$PaymentSessionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCommunicatingStateChanged(param0: boolean): void;
						onError(param0: number, param1: string): void;
						onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					});
					public constructor();
					public onError(param0: number, param1: string): void;
					public onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					public onCommunicatingStateChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionConfig {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.PaymentSessionConfig>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getOptionalShippingInfoFields(): java.util.List<string>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public isShippingInfoRequired(): boolean;
				public isShippingMethodRequired(): boolean;
				public getPrepopulatedShippingInfo(): com.stripe.android.model.ShippingInformation;
				public getHiddenShippingInfoFields(): java.util.List<string>;
			}
			export module PaymentSessionConfig {
				export class Builder {
					public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.Builder>;
					public setPrepopulatedShippingInfo(param0: com.stripe.android.model.ShippingInformation): com.stripe.android.PaymentSessionConfig.Builder;
					public build(): com.stripe.android.PaymentSessionConfig;
					public setOptionalShippingInfoFields(param0: native.Array<string>): com.stripe.android.PaymentSessionConfig.Builder;
					public setShippingInfoRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public constructor();
					public setShippingMethodsRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
					public setHiddenShippingInfoFields(param0: native.Array<string>): com.stripe.android.PaymentSessionConfig.Builder;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionData {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionData>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.PaymentSessionData>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				public getSelectedPaymentMethodId(): string;
				public getPaymentResult(): string;
				public constructor();
				public setShippingInformation(param0: com.stripe.android.model.ShippingInformation): void;
				public getShippingMethod(): com.stripe.android.model.ShippingMethod;
				public isPaymentReadyToCharge(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getCartTotal(): number;
				public setPaymentReadyToCharge(param0: boolean): void;
				public setShippingMethod(param0: com.stripe.android.model.ShippingMethod): void;
				public getShippingTotal(): number;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class PaymentSessionUtils {
				public static class: java.lang.Class<com.stripe.android.PaymentSessionUtils>;
				public static paymentResultFromString(param0: string): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class RequestOptions {
				public static class: java.lang.Class<com.stripe.android.RequestOptions>;
				public static TYPE_QUERY: string;
				public static TYPE_JSON: string;
				public static builder(param0: string): com.stripe.android.RequestOptions.RequestOptionsBuilder;
				public static builder(param0: string, param1: string, param2: string): com.stripe.android.RequestOptions.RequestOptionsBuilder;
				public static builder(param0: string, param1: string): com.stripe.android.RequestOptions.RequestOptionsBuilder;
			}
			export module RequestOptions {
				export class RequestOptionsBuilder {
					public static class: java.lang.Class<com.stripe.android.RequestOptions.RequestOptionsBuilder>;
					public build(): com.stripe.android.RequestOptions;
				}
				export class RequestType {
					public static class: java.lang.Class<com.stripe.android.RequestOptions.RequestType>;
					/**
					 * Constructs a new instance of the com.stripe.android.RequestOptions$RequestType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class SourceCallback {
				public static class: java.lang.Class<com.stripe.android.SourceCallback>;
				/**
				 * Constructs a new instance of the com.stripe.android.SourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onError(param0: java.lang.Exception): void;
					onSuccess(param0: com.stripe.android.model.Source): void;
				});
				public constructor();
				public onSuccess(param0: com.stripe.android.model.Source): void;
				public onError(param0: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class Stripe {
				public static class: java.lang.Class<com.stripe.android.Stripe>;
				public createBankAccountToken(param0: com.stripe.android.model.BankAccount, param1: com.stripe.android.TokenCallback): void;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams): com.stripe.android.model.Source;
				public createTokenSynchronous(param0: com.stripe.android.model.Card): com.stripe.android.model.Token;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public setDefaultPublishableKey(param0: string): void;
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams, param1: string): com.stripe.android.model.Token;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccount, param1: string): com.stripe.android.model.Token;
				public logEventSynchronous(param0: java.util.List<string>, param1: com.stripe.android.model.StripePaymentSource): void;
				public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams): com.stripe.android.model.Token;
				public createTokenSynchronous(param0: com.stripe.android.model.Card, param1: string): com.stripe.android.model.Token;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.SourceCallback, param2: string, param3: java.util.concurrent.Executor): void;
				public createToken(param0: com.stripe.android.model.Card, param1: string, param2: com.stripe.android.TokenCallback): void;
				public createPiiTokenSynchronous(param0: string, param1: string): com.stripe.android.model.Token;
				public createPiiToken(param0: string, param1: com.stripe.android.TokenCallback): void;
				public constructor(param0: globalAndroid.content.Context);
				public createToken(param0: com.stripe.android.model.Card, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public createPiiTokenSynchronous(param0: string): com.stripe.android.model.Token;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.SourceCallback): void;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccount): com.stripe.android.model.Token;
				public createPiiToken(param0: string, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public retrievePaymentIntentSynchronous(param0: com.stripe.android.model.PaymentIntentParams, param1: string): com.stripe.android.model.PaymentIntent;
				public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.PaymentIntentParams, param1: string): com.stripe.android.model.PaymentIntent;
				public retrieveSourceSynchronous(param0: string, param1: string, param2: string): com.stripe.android.model.Source;
				public createToken(param0: com.stripe.android.model.Card, param1: com.stripe.android.TokenCallback): void;
				public retrieveSourceSynchronous(param0: string, param1: string): com.stripe.android.model.Source;
				public createToken(param0: com.stripe.android.model.Card, param1: java.util.concurrent.Executor, param2: com.stripe.android.TokenCallback): void;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams, param1: string): com.stripe.android.model.Source;
				public createBankAccountToken(param0: com.stripe.android.model.BankAccount, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public setStripeAccount(param0: string): void;
			}
			export module Stripe {
				export class ResponseWrapper {
					public static class: java.lang.Class<com.stripe.android.Stripe.ResponseWrapper>;
				}
				export class SourceCreator {
					public static class: java.lang.Class<com.stripe.android.Stripe.SourceCreator>;
					/**
					 * Constructs a new instance of the com.stripe.android.Stripe$SourceCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.util.concurrent.Executor, param4: com.stripe.android.SourceCallback): void;
					});
					public constructor();
					public create(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: java.util.concurrent.Executor, param4: com.stripe.android.SourceCallback): void;
				}
				export class TokenCreator {
					public static class: java.lang.Class<com.stripe.android.Stripe.TokenCreator>;
					/**
					 * Constructs a new instance of the com.stripe.android.Stripe$TokenCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: java.util.Map<string,any>, param1: string, param2: string, param3: string, param4: java.util.concurrent.Executor, param5: com.stripe.android.TokenCallback): void;
					});
					public constructor();
					public create(param0: java.util.Map<string,any>, param1: string, param2: string, param3: string, param4: java.util.concurrent.Executor, param5: com.stripe.android.TokenCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeApiHandler {
				public static class: java.lang.Class<com.stripe.android.StripeApiHandler>;
			}
			export module StripeApiHandler {
				export class LoggingResponseListener {
					public static class: java.lang.Class<com.stripe.android.StripeApiHandler.LoggingResponseListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripeApiHandler$LoggingResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldLogTest(): boolean;
						onLoggingResponse(param0: com.stripe.android.StripeResponse): void;
						onStripeException(param0: com.stripe.android.exception.StripeException): void;
					});
					public constructor();
					public onStripeException(param0: com.stripe.android.exception.StripeException): void;
					public shouldLogTest(): boolean;
					public onLoggingResponse(param0: com.stripe.android.StripeResponse): void;
				}
				export class Parameter {
					public static class: java.lang.Class<com.stripe.android.StripeApiHandler.Parameter>;
					public key: string;
					public value: string;
				}
				export class StripeResponseListener {
					public static class: java.lang.Class<com.stripe.android.StripeApiHandler.StripeResponseListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripeApiHandler$StripeResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStripeResponse(param0: com.stripe.android.StripeResponse): void;
					});
					public constructor();
					public onStripeResponse(param0: com.stripe.android.StripeResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeNetworkUtils {
				public static class: java.lang.Class<com.stripe.android.StripeNetworkUtils>;
				public static removeNullAndEmptyParams(param0: java.util.Map<string,any>): void;
				public constructor();
			}
			export module StripeNetworkUtils {
				export class UidProvider {
					public static class: java.lang.Class<com.stripe.android.StripeNetworkUtils.UidProvider>;
					/**
					 * Constructs a new instance of the com.stripe.android.StripeNetworkUtils$UidProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUid(): string;
						getPackageName(): string;
					});
					public constructor();
					public getUid(): string;
					public getPackageName(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeResponse {
				public static class: java.lang.Class<com.stripe.android.StripeResponse>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeSSLSocketFactory {
				public static class: java.lang.Class<com.stripe.android.StripeSSLSocketFactory>;
				public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
				public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
				public getDefaultCipherSuites(): native.Array<string>;
				public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				public getSupportedCipherSuites(): native.Array<string>;
				public createSocket(param0: string, param1: number): java.net.Socket;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class StripeTextUtils {
				public static class: java.lang.Class<com.stripe.android.StripeTextUtils>;
				public static nullIfBlank(param0: string): string;
				public static isBlank(param0: string): boolean;
				public constructor();
				public static removeSpacesAndHyphens(param0: string): string;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class TelemetryClientUtil {
				public static class: java.lang.Class<com.stripe.android.TelemetryClientUtil>;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class TokenCallback {
				public static class: java.lang.Class<com.stripe.android.TokenCallback>;
				/**
				 * Constructs a new instance of the com.stripe.android.TokenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onError(param0: java.lang.Exception): void;
					onSuccess(param0: com.stripe.android.model.Token): void;
				});
				public constructor();
				public onSuccess(param0: com.stripe.android.model.Token): void;
				public onError(param0: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class APIConnectionException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.APIConnectionException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class APIException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.APIException>;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class AuthenticationException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.AuthenticationException>;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class CardException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.CardException>;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: java.lang.Throwable);
					public getCode(): string;
					public getCharge(): string;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public getDeclineCode(): string;
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
					public getParam(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class InvalidRequestException extends com.stripe.android.exception.StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.InvalidRequestException>;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
					public getParam(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class PermissionException extends com.stripe.android.exception.AuthenticationException {
					public static class: java.lang.Class<com.stripe.android.exception.PermissionException>;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export class RateLimitException extends com.stripe.android.exception.InvalidRequestException {
					public static class: java.lang.Class<com.stripe.android.exception.RateLimitException>;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module exception {
				export abstract class StripeException {
					public static class: java.lang.Class<com.stripe.android.exception.StripeException>;
					public static serialVersionUID: number;
					public getStatusCode(): java.lang.Integer;
					public toString(): string;
					public getRequestId(): string;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class AccountParams {
					public static class: java.lang.Class<com.stripe.android.model.AccountParams>;
					public setTosShownAndAccepted(param0: boolean): com.stripe.android.model.AccountParams;
					public static createAccountParams(param0: boolean, param1: java.util.Map<string,any>): com.stripe.android.model.AccountParams;
					public constructor();
					public setLegalEntity(param0: java.util.Map<string,any>): com.stripe.android.model.AccountParams;
					public toParamMap(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Address extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.Address>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.Address>;
					public setState(param0: string): void;
					public toMap(): java.util.Map<string,any>;
					public describeContents(): number;
					public getLine1(): string;
					public getCountry(): string;
					public getState(): string;
					public toJson(): org.json.JSONObject;
					public getCity(): string;
					public setPostalCode(param0: string): void;
					public setCity(param0: string): void;
					public constructor(param0: globalAndroid.os.Parcel);
					public setCountry(param0: string): void;
					public getLine2(): string;
					public constructor();
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPostalCode(): string;
					public static fromString(param0: string): com.stripe.android.model.Address;
					public setLine1(param0: string): void;
					public setLine2(param0: string): void;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Address;
				}
				export module Address {
					export class Builder {
						public static class: java.lang.Class<com.stripe.android.model.Address.Builder>;
						public setPostalCode(param0: string): com.stripe.android.model.Address.Builder;
						public constructor();
						public setLine2(param0: string): com.stripe.android.model.Address.Builder;
						public setState(param0: string): com.stripe.android.model.Address.Builder;
						public build(): com.stripe.android.model.Address;
						public setCountry(param0: string): com.stripe.android.model.Address.Builder;
						public setCity(param0: string): com.stripe.android.model.Address.Builder;
						public setLine1(param0: string): com.stripe.android.model.Address.Builder;
					}
					export class RequiredBillingAddressFields {
						public static class: java.lang.Class<com.stripe.android.model.Address.RequiredBillingAddressFields>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Address$RequiredBillingAddressFields interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static NONE: number;
						public static NAME: number;
						public static FULL: number;
						public static ZIP: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class BankAccount {
					public static class: java.lang.Class<com.stripe.android.model.BankAccount>;
					public static TYPE_COMPANY: string;
					public static TYPE_INDIVIDUAL: string;
					public getFingerprint(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string);
					public getCountryCode(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.BankAccount;
					public getCurrency(): string;
					public getBankName(): string;
					public getAccountHolderType(): string;
					public static asBankAccountType(param0: string): string;
					public setAccountHolderName(param0: string): com.stripe.android.model.BankAccount;
					public getAccountNumber(): string;
					public getRoutingNumber(): string;
					public getLast4(): string;
					public static fromString(param0: string): com.stripe.android.model.BankAccount;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public setAccountHolderType(param0: string): com.stripe.android.model.BankAccount;
					public getAccountHolderName(): string;
				}
				export module BankAccount {
					export class BankAccountType {
						public static class: java.lang.Class<com.stripe.android.model.BankAccount.BankAccountType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.BankAccount$BankAccountType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Card extends com.stripe.android.model.StripeJsonModel implements com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Card>;
					public static AMERICAN_EXPRESS: string;
					public static DISCOVER: string;
					public static JCB: string;
					public static DINERS_CLUB: string;
					public static VISA: string;
					public static MASTERCARD: string;
					public static UNIONPAY: string;
					public static UNKNOWN: string;
					public static CVC_LENGTH_AMERICAN_EXPRESS: number;
					public static CVC_LENGTH_COMMON: number;
					public static FUNDING_CREDIT: string;
					public static FUNDING_DEBIT: string;
					public static FUNDING_PREPAID: string;
					public static FUNDING_UNKNOWN: string;
					public static BRAND_RESOURCE_MAP: java.util.Map<string,java.lang.Integer>;
					public static PREFIXES_AMERICAN_EXPRESS: native.Array<string>;
					public static PREFIXES_DISCOVER: native.Array<string>;
					public static PREFIXES_JCB: native.Array<string>;
					public static PREFIXES_DINERS_CLUB: native.Array<string>;
					public static PREFIXES_VISA: native.Array<string>;
					public static PREFIXES_MASTERCARD: native.Array<string>;
					public static PREFIXES_UNIONPAY: native.Array<string>;
					public static MAX_LENGTH_STANDARD: number;
					public static MAX_LENGTH_AMERICAN_EXPRESS: number;
					public static MAX_LENGTH_DINERS_CLUB: number;
					public validateCVC(): boolean;
					public getFunding(): string;
					public getId(): string;
					public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string);
					public getFingerprint(): string;
					public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string);
					public toMap(): java.util.Map<string,any>;
					public getAddressCity(): string;
					public toJson(): org.json.JSONObject;
					public getCvcCheck(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Card;
					public setAddressZip(param0: string): void;
					public constructor();
					public getAddressLine2(): string;
					public setAddressLine2(param0: string): void;
					public getAddressState(): string;
					public setExpMonth(param0: java.lang.Integer): void;
					public getExpMonth(): java.lang.Integer;
					public getBrand(): string;
					public setCVC(param0: string): void;
					public getAddressZipCheck(): string;
					public validateNumber(): boolean;
					public setCurrency(param0: string): void;
					public setName(param0: string): void;
					public getLoggingTokens(): java.util.List<string>;
					public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string);
					public setExpYear(param0: java.lang.Integer): void;
					public setAddressState(param0: string): void;
					public getCVC(): string;
					public validateCard(): boolean;
					public setAddressLine1(param0: string): void;
					public setAddressCountry(param0: string): void;
					public getCurrency(): string;
					public static asCardBrand(param0: string): string;
					public static asFundingType(param0: string): string;
					public getAddressCountry(): string;
					public getExpYear(): java.lang.Integer;
					public validateExpiryDate(): boolean;
					public validateExpMonth(): boolean;
					public setAddressCity(param0: string): void;
					public addLoggingToken(param0: string): com.stripe.android.model.Card;
					public setNumber(param0: string): void;
					public getType(): string;
					public getCustomerId(): string;
					public getNumber(): string;
					public getAddressLine1Check(): string;
					public static fromString(param0: string): com.stripe.android.model.Card;
					public getAddressLine1(): string;
					public getCountry(): string;
					public getLast4(): string;
					public getAddressZip(): string;
					public getName(): string;
				}
				export module Card {
					export class Builder {
						public static class: java.lang.Class<com.stripe.android.model.Card.Builder>;
						public addressLine2(param0: string): com.stripe.android.model.Card.Builder;
						public last4(param0: string): com.stripe.android.model.Card.Builder;
						public addressCountry(param0: string): com.stripe.android.model.Card.Builder;
						public tokenizationMethod(param0: string): com.stripe.android.model.Card.Builder;
						public fingerprint(param0: string): com.stripe.android.model.Card.Builder;
						public addressZip(param0: string): com.stripe.android.model.Card.Builder;
						public name(param0: string): com.stripe.android.model.Card.Builder;
						public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string);
						public addressLine1(param0: string): com.stripe.android.model.Card.Builder;
						public currency(param0: string): com.stripe.android.model.Card.Builder;
						public funding(param0: string): com.stripe.android.model.Card.Builder;
						public brand(param0: string): com.stripe.android.model.Card.Builder;
						public cvcCheck(param0: string): com.stripe.android.model.Card.Builder;
						public addressZipCheck(param0: string): com.stripe.android.model.Card.Builder;
						public customer(param0: string): com.stripe.android.model.Card.Builder;
						public build(): com.stripe.android.model.Card;
						public id(param0: string): com.stripe.android.model.Card.Builder;
						public addressLine1Check(param0: string): com.stripe.android.model.Card.Builder;
						public country(param0: string): com.stripe.android.model.Card.Builder;
						public addressCity(param0: string): com.stripe.android.model.Card.Builder;
						public addressState(param0: string): com.stripe.android.model.Card.Builder;
					}
					export class CardBrand {
						public static class: java.lang.Class<com.stripe.android.model.Card.CardBrand>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Card$CardBrand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class FundingType {
						public static class: java.lang.Class<com.stripe.android.model.Card.FundingType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Card$FundingType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Customer extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.Customer>;
					public getId(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Customer;
					public getUrl(): string;
					public getTotalCount(): java.lang.Integer;
					public toMap(): java.util.Map<string,any>;
					public getDefaultSource(): string;
					public getSources(): java.util.List<com.stripe.android.model.CustomerSource>;
					public static fromString(param0: string): com.stripe.android.model.Customer;
					public toJson(): org.json.JSONObject;
					public getSourceById(param0: string): com.stripe.android.model.CustomerSource;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
					public getHasMore(): java.lang.Boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class CustomerSource extends com.stripe.android.model.StripeJsonModel implements com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.CustomerSource>;
					public getStripePaymentSource(): com.stripe.android.model.StripePaymentSource;
					public getTokenizationMethod(): string;
					public getId(): string;
					public getSourceType(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.CustomerSource;
					public toMap(): java.util.Map<string,any>;
					public static fromString(param0: string): com.stripe.android.model.CustomerSource;
					public toJson(): org.json.JSONObject;
					public asCard(): com.stripe.android.model.Card;
					public asSource(): com.stripe.android.model.Source;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ModelUtils {
					public static class: java.lang.Class<com.stripe.android.model.ModelUtils>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentIntent extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentIntent>;
					public static parseIdFromClientSecret(param0: string): string;
					public getId(): string;
					public getSource(): string;
					public toMap(): java.util.Map<string,any>;
					public getAmount(): java.lang.Long;
					public getCurrency(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent;
					public getCanceledAt(): java.lang.Long;
					public getReceiptEmail(): string;
					public getStatus(): string;
					public static fromString(param0: string): com.stripe.android.model.PaymentIntent;
					public toJson(): org.json.JSONObject;
					public getClientSecret(): string;
					public getConfirmationMethod(): string;
					public getCaptureMethod(): string;
					public getCreated(): java.lang.Long;
					public getAuthorizationUrl(): globalAndroid.net.Uri;
					public getAllowedSourceTypes(): java.util.List<string>;
					public getNextSourceAction(): java.util.Map<string,any>;
					public getDescription(): string;
					public isLiveMode(): java.lang.Boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentIntentParams {
					public static class: java.lang.Class<com.stripe.android.model.PaymentIntentParams>;
					public static createRetrievePaymentIntentParams(param0: string): com.stripe.android.model.PaymentIntentParams;
					public setExtraParams(param0: java.util.Map<string,any>): com.stripe.android.model.PaymentIntentParams;
					public getSourceParams(): com.stripe.android.model.SourceParams;
					public getSourceId(): string;
					public setSourceId(param0: string): com.stripe.android.model.PaymentIntentParams;
					public setSourceParams(param0: com.stripe.android.model.SourceParams): com.stripe.android.model.PaymentIntentParams;
					public toParamMap(): java.util.Map<string,any>;
					public static createCustomParams(): com.stripe.android.model.PaymentIntentParams;
					public static createConfirmPaymentIntentWithSourceDataParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.PaymentIntentParams;
					public getClientSecret(): string;
					public setClientSecret(param0: string): com.stripe.android.model.PaymentIntentParams;
					public getExtraParams(): java.util.Map<string,any>;
					public setReturnUrl(param0: string): com.stripe.android.model.PaymentIntentParams;
					public getReturnUrl(): string;
					public static createConfirmPaymentIntentWithSourceIdParams(param0: string, param1: string, param2: string): com.stripe.android.model.PaymentIntentParams;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ShippingInformation extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingInformation>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingInformation>;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.ShippingInformation;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor();
					public getName(): string;
					public toMap(): java.util.Map<string,any>;
					public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
					public describeContents(): number;
					public toJson(): org.json.JSONObject;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPhone(): string;
					public getAddress(): com.stripe.android.model.Address;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class ShippingMethod extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingMethod>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingMethod>;
					public getLabel(): string;
					public getAmount(): number;
					public constructor();
					public toMap(): java.util.Map<string,any>;
					public describeContents(): number;
					public getIdentifier(): string;
					public constructor(param0: string, param1: string, param2: number, param3: string);
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: string);
					public toJson(): org.json.JSONObject;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDetail(): string;
					public getCurrency(): java.util.Currency;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Source extends com.stripe.android.model.StripeJsonModel implements com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Source>;
					public static ALIPAY: string;
					public static CARD: string;
					public static THREE_D_SECURE: string;
					public static GIROPAY: string;
					public static SEPA_DEBIT: string;
					public static IDEAL: string;
					public static SOFORT: string;
					public static BANCONTACT: string;
					public static P24: string;
					public static EPS: string;
					public static MULTIBANCO: string;
					public static UNKNOWN: string;
					public static MODELED_TYPES: java.util.Set<string>;
					public static PENDING: string;
					public static CHARGEABLE: string;
					public static CONSUMED: string;
					public static CANCELED: string;
					public static FAILED: string;
					public static REUSABLE: string;
					public static SINGLE_USE: string;
					public static REDIRECT: string;
					public static RECEIVER: string;
					public static CODE_VERIFICATION: string;
					public static NONE: string;
					public getId(): string;
					public setRedirect(param0: com.stripe.android.model.SourceRedirect): void;
					public toMap(): java.util.Map<string,any>;
					public getReceiver(): com.stripe.android.model.SourceReceiver;
					public getCurrency(): string;
					public setType(param0: string): void;
					public setMetaData(param0: java.util.Map<string,string>): void;
					public setSourceTypeData(param0: java.util.Map<string,any>): void;
					public toJson(): org.json.JSONObject;
					public getCodeVerification(): com.stripe.android.model.SourceCodeVerification;
					public setReceiver(param0: com.stripe.android.model.SourceReceiver): void;
					public getClientSecret(): string;
					public getRedirect(): com.stripe.android.model.SourceRedirect;
					public setAmount(param0: number): void;
					public getOwner(): com.stripe.android.model.SourceOwner;
					public setUsage(param0: string): void;
					public setStatus(param0: string): void;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Source;
					public getFlow(): string;
					public getUsage(): string;
					public setLiveMode(param0: boolean): void;
					public getType(): string;
					public getSourceTypeModel(): com.stripe.android.model.StripeSourceTypeModel;
					public setCodeVerification(param0: com.stripe.android.model.SourceCodeVerification): void;
					public static fromString(param0: string): com.stripe.android.model.Source;
					public getAmount(): java.lang.Long;
					public setFlow(param0: string): void;
					public getMetaData(): java.util.Map<string,string>;
					public getStatus(): string;
					public getSourceTypeData(): java.util.Map<string,any>;
					public getTypeRaw(): string;
					public setCurrency(param0: string): void;
					public setClientSecret(param0: string): void;
					public getCreated(): java.lang.Long;
					public setCreated(param0: number): void;
					public setId(param0: string): void;
					public isLiveMode(): java.lang.Boolean;
					public setOwner(param0: com.stripe.android.model.SourceOwner): void;
					public setTypeRaw(param0: string): void;
				}
				export module Source {
					export class SourceFlow {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceFlow>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceFlow interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class SourceStatus {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceStatus>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class SourceType {
						public static class: java.lang.Class<com.stripe.android.model.Source.SourceType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$SourceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class Usage {
						public static class: java.lang.Class<com.stripe.android.model.Source.Usage>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Source$Usage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceCardData extends com.stripe.android.model.StripeSourceTypeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceCardData>;
					public static REQUIRED: string;
					public static OPTIONAL: string;
					public static NOT_SUPPORTED: string;
					public static UNKNOWN: string;
					public static FIELD_ADDRESS_LINE1_CHECK: string;
					public static FIELD_ADDRESS_ZIP_CHECK: string;
					public static FIELD_BRAND: string;
					public static FIELD_COUNTRY: string;
					public static FIELD_CVC_CHECK: string;
					public static FIELD_DYNAMIC_LAST4: string;
					public static FIELD_EXP_MONTH: string;
					public static FIELD_EXP_YEAR: string;
					public static FIELD_FUNDING: string;
					public static FIELD_LAST4: string;
					public static FIELD_THREE_D_SECURE: string;
					public static FIELD_TOKENIZATION_METHOD: string;
					public getExpiryMonth(): java.lang.Integer;
					public getFunding(): string;
					public getAddressLine1Check(): string;
					public getBrand(): string;
					public toMap(): java.util.Map<string,any>;
					public getDynamicLast4(): string;
					public getAddressZipCheck(): string;
					public getCountry(): string;
					public getThreeDSecureStatus(): string;
					public toJson(): org.json.JSONObject;
					public getLast4(): string;
					public getCvcCheck(): string;
					public getTokenizationMethod(): string;
					public getExpiryYear(): java.lang.Integer;
				}
				export module SourceCardData {
					export class ThreeDSecureStatus {
						public static class: java.lang.Class<com.stripe.android.model.SourceCardData.ThreeDSecureStatus>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.SourceCardData$ThreeDSecureStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceCodeVerification extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceCodeVerification>;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceCodeVerification;
					public getAttemptsRemaining(): number;
					public toMap(): java.util.Map<string,any>;
					public static fromString(param0: string): com.stripe.android.model.SourceCodeVerification;
					public getStatus(): string;
					public toJson(): org.json.JSONObject;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceOwner extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceOwner>;
					public getVerifiedName(): string;
					public getName(): string;
					public toMap(): java.util.Map<string,any>;
					public static fromString(param0: string): com.stripe.android.model.SourceOwner;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceOwner;
					public getVerifiedAddress(): com.stripe.android.model.Address;
					public toJson(): org.json.JSONObject;
					public getPhone(): string;
					public getVerifiedEmail(): string;
					public getAddress(): com.stripe.android.model.Address;
					public getEmail(): string;
					public getVerifiedPhone(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceParams {
					public static class: java.lang.Class<com.stripe.android.model.SourceParams>;
					public setToken(param0: string): com.stripe.android.model.SourceParams;
					public getRedirect(): java.util.Map<string,any>;
					public static createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): com.stripe.android.model.SourceParams;
					public static createCardParams(param0: com.stripe.android.model.Card): com.stripe.android.model.SourceParams;
					public static createMasterpassParams(param0: string, param1: string): com.stripe.android.model.SourceParams;
					public static createBancontactParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public getCurrency(): string;
					public static createVisaCheckoutParams(param0: string): com.stripe.android.model.SourceParams;
					public setAmount(param0: number): com.stripe.android.model.SourceParams;
					public static createEPSParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createSofortParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createCustomParams(): com.stripe.android.model.SourceParams;
					public static createIdealParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public setMetaData(param0: java.util.Map<string,string>): com.stripe.android.model.SourceParams;
					public getOwner(): java.util.Map<string,any>;
					public getUsage(): string;
					public setUsage(param0: string): com.stripe.android.model.SourceParams;
					public static createSepaDebitParams(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string): com.stripe.android.model.SourceParams;
					public setCurrency(param0: string): com.stripe.android.model.SourceParams;
					public static createGiropayParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public getType(): string;
					public static createMultibancoParams(param0: number, param1: string, param2: string): com.stripe.android.model.SourceParams;
					public setTypeRaw(param0: string): com.stripe.android.model.SourceParams;
					public getApiParameterMap(): java.util.Map<string,any>;
					public setExtraParams(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public getAmount(): java.lang.Long;
					public getMetaData(): java.util.Map<string,string>;
					public static createAlipayReusableParams(param0: string, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public static createThreeDSecureParams(param0: number, param1: string, param2: string, param3: string): com.stripe.android.model.SourceParams;
					public getTypeRaw(): string;
					public setOwner(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public toParamMap(): java.util.Map<string,any>;
					public static createRetrieveSourceParams(param0: string): java.util.Map<string,any>;
					public setApiParameterMap(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public static createAlipaySingleUseParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public static createP24Params(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
					public setReturnUrl(param0: string): com.stripe.android.model.SourceParams;
					public setRedirect(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
					public setType(param0: string): com.stripe.android.model.SourceParams;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceReceiver extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceReceiver>;
					public getAddress(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceReceiver;
					public setAmountCharged(param0: number): void;
					public setAmountReturned(param0: number): void;
					public toMap(): java.util.Map<string,any>;
					public getAmountCharged(): number;
					public setAddress(param0: string): void;
					public toJson(): org.json.JSONObject;
					public setAmountReceived(param0: number): void;
					public getAmountReceived(): number;
					public getAmountReturned(): number;
					public static fromString(param0: string): com.stripe.android.model.SourceReceiver;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceRedirect extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceRedirect>;
					public static PENDING: string;
					public static SUCCEEDED: string;
					public static FAILED: string;
					public setReturnUrl(param0: string): void;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceRedirect;
					public static fromString(param0: string): com.stripe.android.model.SourceRedirect;
					public getUrl(): string;
					public setStatus(param0: string): void;
					public toMap(): java.util.Map<string,any>;
					public setUrl(param0: string): void;
					public getReturnUrl(): string;
					public getStatus(): string;
					public toJson(): org.json.JSONObject;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class SourceSepaDebitData extends com.stripe.android.model.StripeSourceTypeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceSepaDebitData>;
					public getFingerPrint(): string;
					public getBranchCode(): string;
					public getMandateReference(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceSepaDebitData;
					public toMap(): java.util.Map<string,any>;
					public getBankCode(): string;
					public getCountry(): string;
					public toJson(): org.json.JSONObject;
					public getLast4(): string;
					public getMandateUrl(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeJsonModel>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public toMap(): java.util.Map<string,any>;
					public toJson(): org.json.JSONObject;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripeJsonUtils {
					public static class: java.lang.Class<com.stripe.android.model.StripeJsonUtils>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.StripePaymentSource>;
					/**
					 * Constructs a new instance of the com.stripe.android.model.StripePaymentSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): string;
					});
					public constructor();
					public getId(): string;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export abstract class StripeSourceTypeModel extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeSourceTypeModel>;
					public getAdditionalFields(): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class Token extends com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Token>;
					public static TYPE_CARD: string;
					public static TYPE_BANK_ACCOUNT: string;
					public static TYPE_PII: string;
					public static TYPE_ACCOUNT: string;
					public getCard(): com.stripe.android.model.Card;
					public static fromString(param0: string): com.stripe.android.model.Token;
					public constructor(param0: string, param1: string, param2: boolean, param3: java.util.Date, param4: java.lang.Boolean);
					public getId(): string;
					public constructor(param0: string, param1: boolean, param2: java.util.Date, param3: java.lang.Boolean, param4: com.stripe.android.model.Card);
					public constructor(param0: string, param1: boolean, param2: java.util.Date, param3: java.lang.Boolean, param4: com.stripe.android.model.BankAccount);
					public getUsed(): boolean;
					public getType(): string;
					public getBankAccount(): com.stripe.android.model.BankAccount;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Token;
					public getCreated(): java.util.Date;
					public getLivemode(): boolean;
				}
				export module Token {
					export class TokenType {
						public static class: java.lang.Class<com.stripe.android.model.Token.TokenType>;
						/**
						 * Constructs a new instance of the com.stripe.android.model.Token$TokenType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class AddSourceActivity extends com.stripe.android.view.StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.AddSourceActivity>;
					public static EXTRA_NEW_SOURCE: string;
					public onActionSave(): void;
					public setCommunicatingProgress(param0: boolean): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public static newIntent(param0: globalAndroid.content.Context, param1: boolean, param2: boolean): globalAndroid.content.Intent;
				}
				export module AddSourceActivity {
					export class CustomerSessionProxy {
						public static class: java.lang.Class<com.stripe.android.view.AddSourceActivity.CustomerSessionProxy>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.AddSourceActivity$CustomerSessionProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addProductUsageTokenIfValid(param0: string): void;
							addCustomerSource(param0: string, param1: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
						});
						public constructor();
						public addCustomerSource(param0: string, param1: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
						public addProductUsageTokenIfValid(param0: string): void;
					}
					export class StripeProvider {
						public static class: java.lang.Class<com.stripe.android.view.AddSourceActivity.StripeProvider>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.AddSourceActivity$StripeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getStripe(param0: globalAndroid.content.Context): com.stripe.android.Stripe;
						});
						public constructor();
						public getStripe(param0: globalAndroid.content.Context): com.stripe.android.Stripe;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class BackUpFieldDeleteListener extends com.stripe.android.view.StripeEditText.DeleteEmptyListener {
					public static class: java.lang.Class<com.stripe.android.view.BackUpFieldDeleteListener>;
					public onDeleteEmpty(): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputListener {
					public static class: java.lang.Class<com.stripe.android.view.CardInputListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.view.CardInputListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFocusChange(param0: string): void;
						onCardComplete(): void;
						onExpirationComplete(): void;
						onCvcComplete(): void;
						onPostalCodeComplete(): void;
					});
					public constructor();
					public onCvcComplete(): void;
					public onExpirationComplete(): void;
					public onFocusChange(param0: string): void;
					public onCardComplete(): void;
					public onPostalCodeComplete(): void;
				}
				export module CardInputListener {
					export class FocusField {
						public static class: java.lang.Class<com.stripe.android.view.CardInputListener.FocusField>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardInputListener$FocusField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static FOCUS_CARD: string;
						public static FOCUS_CVC: string;
						public static FOCUS_EXPIRY: string;
						public static FOCUS_POSTAL: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardInputWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardInputWidget>;
					public setEnabled(param0: boolean): void;
					public setCardNumber(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setExpiryDate(param0: number, param1: number): void;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCard(): com.stripe.android.model.Card;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public clear(): void;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public setCvcCode(param0: string): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public isEnabled(): boolean;
					public onWindowFocusChanged(param0: boolean): void;
				}
				export module CardInputWidget {
					export abstract class AnimationEndListener {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.AnimationEndListener>;
						public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
						public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
					}
					export class DimensionOverrideSettings {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.DimensionOverrideSettings>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardInputWidget$DimensionOverrideSettings interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPixelWidth(param0: string, param1: globalAndroid.widget.EditText): number;
							getFrameWidth(): number;
						});
						public constructor();
						public getPixelWidth(param0: string, param1: globalAndroid.widget.EditText): number;
						public getFrameWidth(): number;
					}
					export class PlacementParameters {
						public static class: java.lang.Class<com.stripe.android.view.CardInputWidget.PlacementParameters>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardMultilineWidget {
					public static class: java.lang.Class<com.stripe.android.view.CardMultilineWidget>;
					public setEnabled(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCard(): com.stripe.android.model.Card;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setCardNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public setExpiryDateTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public clear(): void;
					public setCardInputListener(param0: com.stripe.android.view.CardInputListener): void;
					public setShouldShowPostalCode(param0: boolean): void;
					public onWindowFocusChanged(param0: boolean): void;
					public isEnabled(): boolean;
					public validateAllFields(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CardNumberEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCardNumber(): string;
					public getCardBrand(): string;
					public getLengthMax(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public isCardNumberValid(): boolean;
				}
				export module CardNumberEditText {
					export class CardBrandChangeListener {
						public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.CardBrandChangeListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardNumberEditText$CardBrandChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCardBrandChanged(param0: string): void;
						});
						public constructor();
						public onCardBrandChanged(param0: string): void;
					}
					export class CardNumberCompleteListener {
						public static class: java.lang.Class<com.stripe.android.view.CardNumberEditText.CardNumberCompleteListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CardNumberEditText$CardNumberCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCardNumberComplete(): void;
						});
						public constructor();
						public onCardNumberComplete(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryAdapter {
					public static class: java.lang.Class<com.stripe.android.view.CountryAdapter>;
					public getFilter(): globalAndroid.widget.Filter;
					public getCount(): number;
					public getItem(param0: number): string;
					public getItemId(param0: number): number;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryAutoCompleteTextView {
					public static class: java.lang.Class<com.stripe.android.view.CountryAutoCompleteTextView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module CountryAutoCompleteTextView {
					export class CountryChangeListener {
						public static class: java.lang.Class<com.stripe.android.view.CountryAutoCompleteTextView.CountryChangeListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.CountryAutoCompleteTextView$CountryChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCountryChanged(param0: string): void;
						});
						public constructor();
						public onCountryChanged(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class CountryUtils {
					public static class: java.lang.Class<com.stripe.android.view.CountryUtils>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class DateUtils {
					public static class: java.lang.Class<com.stripe.android.view.DateUtils>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ErrorListener extends com.stripe.android.view.StripeEditText.ErrorMessageListener {
					public static class: java.lang.Class<com.stripe.android.view.ErrorListener>;
					public displayErrorMessage(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ExpiryDateEditText extends com.stripe.android.view.StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.ExpiryDateEditText>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isDateValid(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setExpiryDateEditListener(param0: com.stripe.android.view.ExpiryDateEditText.ExpiryDateEditListener): void;
					public getValidDateFields(): native.Array<number>;
				}
				export module ExpiryDateEditText {
					export class ExpiryDateEditListener {
						public static class: java.lang.Class<com.stripe.android.view.ExpiryDateEditText.ExpiryDateEditListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ExpiryDateEditText$ExpiryDateEditListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onExpiryDateComplete(): void;
						});
						public constructor();
						public onExpiryDateComplete(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class IconTextInputLayout {
					public static class: java.lang.Class<com.stripe.android.view.IconTextInputLayout>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class LockableHorizontalScrollView {
					public static class: java.lang.Class<com.stripe.android.view.LockableHorizontalScrollView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isScrollable(): boolean;
					public setScrollable(param0: boolean): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public scrollTo(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				}
				export module LockableHorizontalScrollView {
					export class LockableScrollChangedListener {
						public static class: java.lang.Class<com.stripe.android.view.LockableHorizontalScrollView.LockableScrollChangedListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.LockableHorizontalScrollView$LockableScrollChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSmoothScrollBy(param0: number, param1: number): void;
						});
						public constructor();
						public onSmoothScrollBy(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

// declare module com {
// 	export module stripe {
// 		export module android {
// 			export module view {
// 				export class MaskedCardAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.stripe.android.view.MaskedCardAdapter.ViewHolder> {
// 					public static class: java.lang.Class<com.stripe.android.view.MaskedCardAdapter>;
// 					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.MaskedCardAdapter.ViewHolder;
// 					public onBindViewHolder(param0: com.stripe.android.view.MaskedCardAdapter.ViewHolder, param1: number): void;
// 					public getItemCount(): number;
// 				}
// 				export module MaskedCardAdapter {
// 					export class ViewHolder {
// 						public static class: java.lang.Class<com.stripe.android.view.MaskedCardAdapter.ViewHolder>;
// 					}
// 				}
// 			}
// 		}
// 	}
// }

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class MaskedCardView {
					public static class: java.lang.Class<com.stripe.android.view.MaskedCardView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setSelected(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public isSelected(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowActivity extends com.stripe.android.view.StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowActivity>;
					public static EXTRA_DEFAULT_SHIPPING_METHOD: string;
					public static EXTRA_IS_SHIPPING_INFO_VALID: string;
					public static EXTRA_SHIPPING_INFO_DATA: string;
					public static EXTRA_SHIPPING_INFO_ERROR: string;
					public static EVENT_SHIPPING_INFO_PROCESSED: string;
					public static EVENT_SHIPPING_INFO_SUBMITTED: string;
					public static EXTRA_VALID_SHIPPING_METHODS: string;
					public onActionSave(): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public onPause(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowPagerAdapter {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerAdapter>;
					public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					public getCount(): number;
					public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
					public getPageTitle(param0: number): string;
					public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentFlowPagerEnum {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowPagerEnum>;
					public static SHIPPING_INFO: com.stripe.android.view.PaymentFlowPagerEnum;
					public static SHIPPING_METHOD: com.stripe.android.view.PaymentFlowPagerEnum;
					public static valueOf(param0: string): com.stripe.android.view.PaymentFlowPagerEnum;
					public static values(): native.Array<com.stripe.android.view.PaymentFlowPagerEnum>;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsActivity {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity>;
					public static EXTRA_SELECTED_PAYMENT: string;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public static newIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public constructor();
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				}
				export module PaymentMethodsActivity {
					export class CustomerSessionProxy {
						public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity.CustomerSessionProxy>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.PaymentMethodsActivity$CustomerSessionProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addProductUsageTokenIfValid(param0: string): void;
							getCachedCustomer(): com.stripe.android.model.Customer;
							retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
							setCustomerDefaultSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
							updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
						});
						public constructor();
						public updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
						public setCustomerDefaultSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
						public retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
						public addProductUsageTokenIfValid(param0: string): void;
						public getCachedCustomer(): com.stripe.android.model.Customer;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentUtils {
					public static class: java.lang.Class<com.stripe.android.view.PaymentUtils>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class SelectShippingMethodWidget {
					public static class: java.lang.Class<com.stripe.android.view.SelectShippingMethodWidget>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setShippingMethods(param0: java.util.List<com.stripe.android.model.ShippingMethod>, param1: com.stripe.android.model.ShippingMethod): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getSelectedShippingMethod(): com.stripe.android.model.ShippingMethod;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingInfoWidget {
					public static class: java.lang.Class<com.stripe.android.view.ShippingInfoWidget>;
					public static ADDRESS_LINE_ONE_FIELD: string;
					public static ADDRESS_LINE_TWO_FIELD: string;
					public static CITY_FIELD: string;
					public static POSTAL_CODE_FIELD: string;
					public static STATE_FIELD: string;
					public static PHONE_FIELD: string;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOptionalFields(param0: java.util.List<string>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public populateShippingInfo(param0: com.stripe.android.model.ShippingInformation): void;
					public validateAllFields(): boolean;
					public setHiddenFields(param0: java.util.List<string>): void;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
				}
				export module ShippingInfoWidget {
					export class CustomizableShippingField {
						public static class: java.lang.Class<com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.ShippingInfoWidget$CustomizableShippingField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

// declare module com {
// 	export module stripe {
// 		export module android {
// 			export module view {
// 				export class ShippingMethodAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.stripe.android.view.ShippingMethodAdapter.ViewHolder> {
// 					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter>;
// 					public onBindViewHolder(param0: com.stripe.android.view.ShippingMethodAdapter.ViewHolder, param1: number): void;
// 					public getItemCount(): number;
// 					public getItemId(param0: number): number;
// 					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.ShippingMethodAdapter.ViewHolder;
// 				}
// 				export module ShippingMethodAdapter {
// 					export class ViewHolder {
// 						public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter.ViewHolder>;
// 					}
// 				}
// 			}
// 		}
// 	}
// }

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingMethodView {
					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodView>;
					public setSelected(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export abstract class StripeActivity {
					public static class: java.lang.Class<com.stripe.android.view.StripeActivity>;
					public onActionSave(): void;
					public setCommunicatingProgress(param0: boolean): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPause(): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public onResume(): void;
				}
				export module StripeActivity {
					export class AlertMessageListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeActivity.AlertMessageListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeActivity$AlertMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAlertMessageDisplayed(param0: string): void;
						});
						public constructor();
						public onAlertMessageDisplayed(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class StripeEditText {
					public static class: java.lang.Class<com.stripe.android.view.StripeEditText>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onDetachedFromWindow(): void;
					public getShouldShowError(): boolean;
					public setErrorColor(param0: number): void;
					public setHintDelayed(param0: number, param1: number): void;
					public getCachedColorStateList(): globalAndroid.content.res.ColorStateList;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getDefaultErrorColorInt(): number;
					public setShouldShowError(param0: boolean): void;
					public onCreateInputConnection(param0: globalAndroid.view.inputmethod.EditorInfo): globalAndroid.view.inputmethod.InputConnection;
				}
				export module StripeEditText {
					export class AfterTextChangedListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.AfterTextChangedListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$AfterTextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTextChanged(param0: string): void;
						});
						public constructor();
						public onTextChanged(param0: string): void;
					}
					export class DeleteEmptyListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.DeleteEmptyListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$DeleteEmptyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDeleteEmpty(): void;
						});
						public constructor();
						public onDeleteEmpty(): void;
					}
					export class ErrorMessageListener {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.ErrorMessageListener>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.StripeEditText$ErrorMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							displayErrorMessage(param0: string): void;
						});
						public constructor();
						public displayErrorMessage(param0: string): void;
					}
					export class SoftDeleteInputConnection {
						public static class: java.lang.Class<com.stripe.android.view.StripeEditText.SoftDeleteInputConnection>;
						public deleteSurroundingText(param0: number, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ViewUtils {
					public static class: java.lang.Class<com.stripe.android.view.ViewUtils>;
				}
			}
		}
	}
}

//Generics information:

