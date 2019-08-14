
// Generated from Stripe 8.7.0
// Using Android DTS Generator as documented at https://docs.nativescript.org/core-concepts/android-runtime/metadata/generating-typescript-declarations:
//   Download .aar from https://bintray.com/bintray/jcenter/com.stripe%3Astripe-android/8.7.0#files/com%2Fstripe%2Fstripe-android%2F8.7.0
//   Unpack with `unzip`, copy classes.jar to dts-generator folder, then
//   cd dts-generator
//   ./gradlew jar
//   java -jar build/libs/dts-generator.jar -input classes.jar
//   cp out/android.d.ts <path to src>/typings/java\!Stripe.d.ts


declare module com {
	export module stripe {
		export module android {
			export abstract class AbstractEphemeralKey extends com.stripe.android.model.StripeJsonModel {
				public static class: java.lang.Class<com.stripe.android.AbstractEphemeralKey>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static fromString<T>(param0: string, param1: java.lang.Class<T>): com.stripe.android.AbstractEphemeralKey;
				public toJson(): org.json.JSONObject;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public toMap(): java.util.Map<string,any>;
				public static fromJson<T>(param0: org.json.JSONObject, param1: java.lang.Class<T>): com.stripe.android.AbstractEphemeralKey;
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export abstract class ActivitySourceCallback<A>  extends com.stripe.android.SourceCallback {
				public static class: java.lang.Class<com.stripe.android.ActivitySourceCallback<any>>;
				public onSuccess(param0: com.stripe.android.model.Source): void;
				public onError(param0: java.lang.Exception): void;
				public getActivity(): any;
				public constructor(param0: any);
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class ApiVersion {
				public static class: java.lang.Class<com.stripe.android.ApiVersion>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

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
			export class CustomerEphemeralKey extends com.stripe.android.AbstractEphemeralKey {
				public static class: java.lang.Class<com.stripe.android.CustomerEphemeralKey>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.CustomerEphemeralKey>;
				public constructor(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: string, param6: string, param7: string);
				public constructor(param0: org.json.JSONObject);
				public constructor();
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class CustomerSession extends com.stripe.android.EphemeralKeyManager.KeyManagerListener<com.stripe.android.CustomerEphemeralKey> {
				public static class: java.lang.Class<com.stripe.android.CustomerSession>;
				public static ACTION_API_EXCEPTION: string;
				public static EXTRA_EXCEPTION: string;
				public static EVENT_SHIPPING_INFO_SAVED: string;
				public getCachedCustomer(): com.stripe.android.model.Customer;
				public addCustomerSource(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public static getInstance(): com.stripe.android.CustomerSession;
				public setCustomerShippingInformation(param0: globalAndroid.content.Context, param1: com.stripe.android.model.ShippingInformation): void;
				public onKeyUpdate(param0: com.stripe.android.CustomerEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
				public onKeyError(param0: string, param1: number, param2: string): void;
				public updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public static initCustomerSession(param0: com.stripe.android.EphemeralKeyProvider): void;
				public addProductUsageTokenIfValid(param0: string): void;
				public static cancelCallbacks(): void;
				public deleteCustomerSource(param0: globalAndroid.content.Context, param1: string, param2: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
				public setCustomerDefaultSource(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
				public onKeyUpdate(param0: any, param1: string, param2: string, param3: java.util.Map<string,any>): void;
				public static endCustomerSession(): void;
				public retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
			}
			export module CustomerSession {
				export abstract class ActivitySourceRetrievalListener<A>  extends com.stripe.android.CustomerSession.SourceRetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivitySourceRetrievalListener<any>>;
					public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
					public constructor(param0: any);
					public getActivity(): any;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class CustomerMessage {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerMessage>;
				}
				export class CustomerRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$CustomerRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class ExceptionMessage {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.ExceptionMessage>;
				}
				export class RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.RetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$RetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
				export class SourceMessage {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.SourceMessage>;
				}
				export class SourceRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
					public static class: java.lang.Class<com.stripe.android.CustomerSession.SourceRetrievalListener>;
					/**
					 * Constructs a new instance of the com.stripe.android.CustomerSession$SourceRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSourceRetrieved(param0: com.stripe.android.model.Source): void;
						onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
					});
					public constructor();
					public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
					public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class EphemeralKeyManager<TEphemeralKey>  extends java.lang.Object {
				public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager<any>>;
			}
			export module EphemeralKeyManager {
				export class ClientKeyUpdateListener extends com.stripe.android.EphemeralKeyUpdateListener {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.ClientKeyUpdateListener>;
					public onKeyUpdate(param0: string): void;
					public onKeyUpdateFailure(param0: number, param1: string): void;
				}
				export class KeyManagerListener<TEphemeralKey>  extends java.lang.Object {
					public static class: java.lang.Class<com.stripe.android.EphemeralKeyManager.KeyManagerListener<any>>;
					/**
					 * Constructs a new instance of the com.stripe.android.EphemeralKeyManager$KeyManagerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onKeyUpdate(param0: TEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
						onKeyError(param0: string, param1: number, param2: string): void;
					});
					public constructor();
					public onKeyError(param0: string, param1: number, param2: string): void;
					public onKeyUpdate(param0: TEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
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
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export class IssuingCardEphemeralKey extends com.stripe.android.AbstractEphemeralKey {
				public static class: java.lang.Class<com.stripe.android.IssuingCardEphemeralKey>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.IssuingCardEphemeralKey>;
				public constructor(param0: number, param1: string, param2: number, param3: string, param4: boolean, param5: string, param6: string, param7: string);
				public constructor(param0: org.json.JSONObject);
				public constructor();
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
				export abstract class ActivityPaymentSessionListener<A>  extends com.stripe.android.PaymentSession.PaymentSessionListener {
					public static class: java.lang.Class<com.stripe.android.PaymentSession.ActivityPaymentSessionListener<any>>;
					public constructor(param0: any);
					public onError(param0: number, param1: string): void;
					public onPaymentSessionDataChanged(param0: com.stripe.android.PaymentSessionData): void;
					public onCommunicatingStateChanged(param0: boolean): void;
					public getListenerActivity(): any;
				}
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
				public updateIsPaymentReadyToCharge(param0: com.stripe.android.PaymentSessionConfig): boolean;
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
				public createCvcUpdateToken(param0: string, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public createPiiToken(param0: string, param1: com.stripe.android.TokenCallback): void;
				public constructor(param0: globalAndroid.content.Context);
				public createToken(param0: com.stripe.android.model.Card, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public createPiiTokenSynchronous(param0: string): com.stripe.android.model.Token;
				public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.SourceCallback): void;
				public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccount): com.stripe.android.model.Token;
				public createPiiToken(param0: string, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public createCvcUpdateTokenSynchronous(param0: string): com.stripe.android.model.Token;
				public createCvcUpdateToken(param0: string, param1: com.stripe.android.TokenCallback): void;
				public retrievePaymentIntentSynchronous(param0: com.stripe.android.model.PaymentIntentParams, param1: string): com.stripe.android.model.PaymentIntent;
				public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.PaymentIntentParams, param1: string): com.stripe.android.model.PaymentIntent;
				public retrieveSourceSynchronous(param0: string, param1: string, param2: string): com.stripe.android.model.Source;
				public createToken(param0: com.stripe.android.model.Card, param1: com.stripe.android.TokenCallback): void;
				public retrieveSourceSynchronous(param0: string, param1: string): com.stripe.android.model.Source;
				public createToken(param0: com.stripe.android.model.Card, param1: java.util.concurrent.Executor, param2: com.stripe.android.TokenCallback): void;
				public createSourceSynchronous(param0: com.stripe.android.model.SourceParams, param1: string): com.stripe.android.model.Source;
				public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.PaymentMethod;
				public createCvcUpdateTokenSynchronous(param0: string, param1: string): com.stripe.android.model.Token;
				public createBankAccountToken(param0: com.stripe.android.model.BankAccount, param1: string, param2: java.util.concurrent.Executor, param3: com.stripe.android.TokenCallback): void;
				public setStripeAccount(param0: string): void;
			}
			export module Stripe {
				export class CreateSourceTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,com.stripe.android.Stripe.ResponseWrapper> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreateSourceTask>;
					public doInBackground(param0: native.Array<java.lang.Void>): com.stripe.android.Stripe.ResponseWrapper;
					public onPostExecute(param0: com.stripe.android.Stripe.ResponseWrapper): void;
				}
				export class CreateTokenTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,com.stripe.android.Stripe.ResponseWrapper> {
					public static class: java.lang.Class<com.stripe.android.Stripe.CreateTokenTask>;
					public doInBackground(param0: native.Array<java.lang.Void>): com.stripe.android.Stripe.ResponseWrapper;
					public onPostExecute(param0: com.stripe.android.Stripe.ResponseWrapper): void;
				}
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
			export class StripeError {
				public static class: java.lang.Class<com.stripe.android.StripeError>;
				public type: string;
				public message: string;
				public code: string;
				public param: string;
				public declineCode: string;
				public charge: string;
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
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public constructor(param0: string);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
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
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: com.stripe.android.StripeError, param4: java.lang.Throwable);
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
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: com.stripe.android.StripeError);
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
					public getCode(): string;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public getCharge(): string;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public getDeclineCode(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.lang.Integer, param7: com.stripe.android.StripeError);
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
					public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: string, param5: string, param6: com.stripe.android.StripeError, param7: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public getErrorDeclineCode(): string;
					public getErrorCode(): string;
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
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: com.stripe.android.StripeError);
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
					public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: string, param5: string, param6: com.stripe.android.StripeError, param7: java.lang.Throwable);
					public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer, param4: com.stripe.android.StripeError);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
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
					public getStripeError(): com.stripe.android.StripeError;
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer);
					public getRequestId(): string;
					public constructor(param0: string, param1: string, param2: java.lang.Integer, param3: java.lang.Throwable);
					public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: java.lang.Integer, param4: java.lang.Throwable);
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
					public equals(param0: any): boolean;
					public static createAccountParams(param0: boolean, param1: com.stripe.android.model.AccountParams.BusinessType, param2: java.util.Map<string,any>): com.stripe.android.model.AccountParams;
					public setTosShownAndAccepted(param0: boolean): com.stripe.android.model.AccountParams;
					public static createAccountParams(param0: boolean, param1: java.util.Map<string,any>): com.stripe.android.model.AccountParams;
					public setLegalEntity(param0: java.util.Map<string,any>): com.stripe.android.model.AccountParams;
					public hashCode(): number;
					public toParamMap(): java.util.Map<string,any>;
				}
				export module AccountParams {
					export class BusinessType {
						public static class: java.lang.Class<com.stripe.android.model.AccountParams.BusinessType>;
						public static Individual: com.stripe.android.model.AccountParams.BusinessType;
						public static Company: com.stripe.android.model.AccountParams.BusinessType;
						public code: string;
						public static values(): native.Array<com.stripe.android.model.AccountParams.BusinessType>;
						public static valueOf(param0: string): com.stripe.android.model.AccountParams.BusinessType;
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
					public equals(param0: any): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public setCountry(param0: string): void;
					public constructor();
					public getLine2(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPostalCode(): string;
					public static fromString(param0: string): com.stripe.android.model.Address;
					public hashCode(): number;
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
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string);
					public getFingerprint(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string);
					public getCountryCode(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.BankAccount;
					public getCurrency(): string;
					public getBankName(): string;
					public getAccountHolderType(): string;
					public static asBankAccountType(param0: string): string;
					public getAccountNumber(): string;
					public getRoutingNumber(): string;
					public getLast4(): string;
					public equals(param0: any): boolean;
					public static fromString(param0: string): com.stripe.android.model.BankAccount;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public hashCode(): number;
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
					public getFingerprint(): string;
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
					public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: string, param13: string, param14: string, param15: string, param16: string, param17: string, param18: java.util.Map<string,string>);
					public getLoggingTokens(): java.util.List<string>;
					public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string);
					public getMetadata(): java.util.Map<string,string>;
					public setExpYear(param0: java.lang.Integer): void;
					public setAddressState(param0: string): void;
					public getCVC(): string;
					public setMetadata(param0: java.util.Map<string,string>): void;
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
					public hashCode(): number;
					public getCustomerId(): string;
					public getNumber(): string;
					public toPaymentMethodParamsCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
					public getAddressLine1Check(): string;
					public static fromString(param0: string): com.stripe.android.model.Card;
					public getAddressLine1(): string;
					public constructor(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: java.util.Map<string,string>);
					public getCountry(): string;
					public getLast4(): string;
					public equals(param0: any): boolean;
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
						public metadata(param0: java.util.Map<string,string>): com.stripe.android.model.Card.Builder;
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
					public getTotalCount(): java.lang.Integer;
					public toMap(): java.util.Map<string,any>;
					public toJson(): org.json.JSONObject;
					public getSourceById(param0: string): com.stripe.android.model.CustomerSource;
					public getHasMore(): java.lang.Boolean;
					public equals(param0: any): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Customer;
					public getUrl(): string;
					public getDefaultSource(): string;
					public getSources(): java.util.List<com.stripe.android.model.CustomerSource>;
					public static fromString(param0: string): com.stripe.android.model.Customer;
					public hashCode(): number;
					public getShippingInformation(): com.stripe.android.model.ShippingInformation;
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
					public equals(param0: any): boolean;
					public getId(): string;
					public getSourceType(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.CustomerSource;
					public toMap(): java.util.Map<string,any>;
					public static fromString(param0: string): com.stripe.android.model.CustomerSource;
					public toJson(): org.json.JSONObject;
					public asCard(): com.stripe.android.model.Card;
					public hashCode(): number;
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
					public getCurrency(): string;
					public static fromString(param0: string): com.stripe.android.model.PaymentIntent;
					public toJson(): org.json.JSONObject;
					public getClientSecret(): string;
					public getCaptureMethod(): string;
					public getPaymentMethodTypes(): java.util.List<string>;
					public getAuthorizationUrl(): globalAndroid.net.Uri;
					public getAllowedSourceTypes(): java.util.List<string>;
					public hashCode(): number;
					public getNextAction(): java.util.Map<string,any>;
					public getAmount(): java.lang.Long;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent;
					public getCanceledAt(): java.lang.Long;
					public getReceiptEmail(): string;
					public getStatus(): string;
					public getRedirectUrl(): globalAndroid.net.Uri;
					public getConfirmationMethod(): string;
					public equals(param0: any): boolean;
					public getCreated(): java.lang.Long;
					public getNextSourceAction(): java.util.Map<string,any>;
					public getDescription(): string;
					public isLiveMode(): java.lang.Boolean;
				}
				export module PaymentIntent {
					export class NextActionType {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.NextActionType>;
						public static RedirectToUrl: com.stripe.android.model.PaymentIntent.NextActionType;
						public static AuthorizeWithUrl: com.stripe.android.model.PaymentIntent.NextActionType;
						public code: string;
						public static values(): native.Array<com.stripe.android.model.PaymentIntent.NextActionType>;
						public static fromCode(param0: string): com.stripe.android.model.PaymentIntent.NextActionType;
						public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.NextActionType;
					}
					export class Status {
						public static class: java.lang.Class<com.stripe.android.model.PaymentIntent.Status>;
						public static Canceled: com.stripe.android.model.PaymentIntent.Status;
						public static Processing: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresAction: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresAuthorization: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresCapture: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresConfirmation: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresPaymentMethod: com.stripe.android.model.PaymentIntent.Status;
						public static Succeeded: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresSource: com.stripe.android.model.PaymentIntent.Status;
						public static RequiresSourceAction: com.stripe.android.model.PaymentIntent.Status;
						public code: string;
						public static valueOf(param0: string): com.stripe.android.model.PaymentIntent.Status;
						public static fromCode(param0: string): com.stripe.android.model.PaymentIntent.Status;
						public static values(): native.Array<com.stripe.android.model.PaymentIntent.Status>;
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
				export class PaymentIntentParams {
					public static class: java.lang.Class<com.stripe.android.model.PaymentIntentParams>;
					public static createConfirmPaymentIntentWithSourceDataParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: boolean): com.stripe.android.model.PaymentIntentParams;
					public static createConfirmPaymentIntentWithSourceIdParams(param0: string, param1: string, param2: string, param3: boolean): com.stripe.android.model.PaymentIntentParams;
					public getSourceId(): string;
					public static createConfirmPaymentIntentWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: boolean): com.stripe.android.model.PaymentIntentParams;
					public static createCustomParams(): com.stripe.android.model.PaymentIntentParams;
					public static createConfirmPaymentIntentWithSourceDataParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.PaymentIntentParams;
					public getClientSecret(): string;
					public setPaymentMethodId(param0: string): com.stripe.android.model.PaymentIntentParams;
					public static createConfirmPaymentIntentWithPaymentMethodId(param0: string, param1: string, param2: string, param3: boolean): com.stripe.android.model.PaymentIntentParams;
					public getPaymentMethodId(): string;
					public setPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams): com.stripe.android.model.PaymentIntentParams;
					public static createRetrievePaymentIntentParams(param0: string): com.stripe.android.model.PaymentIntentParams;
					public setExtraParams(param0: java.util.Map<string,any>): com.stripe.android.model.PaymentIntentParams;
					public getSourceParams(): com.stripe.android.model.SourceParams;
					public static createConfirmPaymentIntentWithPaymentMethodId(param0: string, param1: string, param2: string): com.stripe.android.model.PaymentIntentParams;
					public setSourceId(param0: string): com.stripe.android.model.PaymentIntentParams;
					public setSourceParams(param0: com.stripe.android.model.SourceParams): com.stripe.android.model.PaymentIntentParams;
					public toParamMap(): java.util.Map<string,any>;
					public shouldSavePaymentMethod(): boolean;
					public setClientSecret(param0: string): com.stripe.android.model.PaymentIntentParams;
					public getExtraParams(): java.util.Map<string,any>;
					public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
					public setSavePaymentMethod(param0: boolean): com.stripe.android.model.PaymentIntentParams;
					public setReturnUrl(param0: string): com.stripe.android.model.PaymentIntentParams;
					public getReturnUrl(): string;
					public static createConfirmPaymentIntentWithSourceIdParams(param0: string, param1: string, param2: string): com.stripe.android.model.PaymentIntentParams;
					public static createConfirmPaymentIntentWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.PaymentIntentParams;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module model {
				export class PaymentMethod extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethod>;
					public id: string;
					public created: java.lang.Long;
					public liveMode: boolean;
					public type: string;
					public billingDetails: com.stripe.android.model.PaymentMethod.BillingDetails;
					public card: com.stripe.android.model.PaymentMethod.Card;
					public cardPresent: com.stripe.android.model.PaymentMethod.CardPresent;
					public ideal: com.stripe.android.model.PaymentMethod.Ideal;
					public customerId: string;
					public metadata: java.util.Map<string,string>;
					public equals(param0: any): boolean;
					public toMap(): java.util.Map<string,any>;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod;
					public isValid(): boolean;
					public toJson(): org.json.JSONObject;
					public hashCode(): number;
					public static fromString(param0: string): com.stripe.android.model.PaymentMethod;
				}
				export module PaymentMethod {
					export class BillingDetails extends com.stripe.android.model.StripeJsonModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails>;
						public address: com.stripe.android.model.Address;
						public email: string;
						public name: string;
						public phone: string;
						public toJson(): org.json.JSONObject;
						public toMap(): java.util.Map<string,any>;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.BillingDetails;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module BillingDetails {
						export class Builder {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethod.BillingDetails;
							public setPhone(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setName(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
							public setEmail(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
						}
					}
					export class Builder {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Builder>;
						public setId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public constructor();
						public setCreated(param0: java.lang.Long): com.stripe.android.model.PaymentMethod.Builder;
						public build(): com.stripe.android.model.PaymentMethod;
						public setMetadata(param0: java.util.Map<string,string>): com.stripe.android.model.PaymentMethod.Builder;
						public setType(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public setCard(param0: com.stripe.android.model.PaymentMethod.Card): com.stripe.android.model.PaymentMethod.Builder;
						public setCustomerId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
						public setCardPresent(param0: com.stripe.android.model.PaymentMethod.CardPresent): com.stripe.android.model.PaymentMethod.Builder;
						public setLiveMode(param0: boolean): com.stripe.android.model.PaymentMethod.Builder;
						public setBillingDetails(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethod.Builder;
						public setIdeal(param0: com.stripe.android.model.PaymentMethod.Ideal): com.stripe.android.model.PaymentMethod.Builder;
					}
					export class Card extends com.stripe.android.model.StripeJsonModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card>;
						public brand: string;
						public checks: com.stripe.android.model.PaymentMethod.Card.Checks;
						public country: string;
						public expiryMonth: java.lang.Integer;
						public expiryYear: java.lang.Integer;
						public funding: string;
						public last4: string;
						public threeDSecureUsage: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
						public wallet: com.stripe.android.model.wallets.Wallet;
						public toJson(): org.json.JSONObject;
						public toMap(): java.util.Map<string,any>;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export module Card {
						export class Builder {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Builder>;
							public constructor();
							public setThreeDSecureUsage(param0: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setLast4(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setFunding(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setCountry(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setWallet(param0: com.stripe.android.model.wallets.Wallet): com.stripe.android.model.PaymentMethod.Card.Builder;
							public build(): com.stripe.android.model.PaymentMethod.Card;
							public setChecks(param0: com.stripe.android.model.PaymentMethod.Card.Checks): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setExpiryYear(param0: java.lang.Integer): com.stripe.android.model.PaymentMethod.Card.Builder;
							public setBrand(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
						}
						export class Checks extends com.stripe.android.model.StripeJsonModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks>;
							public addressLine1Check: string;
							public addressPostalCodeCheck: string;
							public cvcCheck: string;
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toMap(): java.util.Map<string,any>;
							public equals(param0: any): boolean;
							public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.Checks;
						}
						export module Checks {
							export class Builder {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks.Builder>;
								public setAddressLine1Check(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
								public setAddressPostalCodeCheck(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
								public build(): com.stripe.android.model.PaymentMethod.Card.Checks;
								public constructor();
								public setCvcCheck(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
							}
						}
						export class ThreeDSecureUsage extends com.stripe.android.model.StripeJsonModel {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage>;
							public isSupported: boolean;
							public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toMap(): java.util.Map<string,any>;
							public equals(param0: any): boolean;
						}
						export module ThreeDSecureUsage {
							export class Builder {
								public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Builder>;
								public build(): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
								public constructor();
								public setSupported(param0: boolean): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Builder;
							}
						}
					}
					export class CardPresent extends com.stripe.android.model.StripeJsonModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.CardPresent>;
						public static EMPTY: com.stripe.android.model.PaymentMethod.CardPresent;
						public toJson(): org.json.JSONObject;
						public toMap(): java.util.Map<string,any>;
					}
					export class Ideal extends com.stripe.android.model.StripeJsonModel {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal>;
						public bank: string;
						public bankIdentifierCode: string;
						public toJson(): org.json.JSONObject;
						public toMap(): java.util.Map<string,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Ideal;
					}
					export module Ideal {
						export class Builder {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal.Builder>;
							public constructor();
							public setBankIdentifierCode(param0: string): com.stripe.android.model.PaymentMethod.Ideal.Builder;
							public setBank(param0: string): com.stripe.android.model.PaymentMethod.Ideal.Builder;
							public build(): com.stripe.android.model.PaymentMethod.Ideal;
						}
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
				export class PaymentMethodCreateParams {
					public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams>;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
					public toParamMap(): java.util.Map<string,any>;
					public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
				}
				export module PaymentMethodCreateParams {
					export class Card {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card>;
						public toMap(): java.util.Map<string,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static create(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card;
					}
					export module Card {
						export class Builder {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Card;
							public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setCvc(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setNumber(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
							public setExpiryYear(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
						}
					}
					export class Ideal {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal>;
						public toMap(): java.util.Map<string,any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module Ideal {
						export class Builder {
							public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder>;
							public constructor();
							public build(): com.stripe.android.model.PaymentMethodCreateParams.Ideal;
							public setBank(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder;
						}
					}
					export class Type {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Type>;
						public static Card: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static Ideal: com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static valueOf(param0: string): com.stripe.android.model.PaymentMethodCreateParams.Type;
						public static values(): native.Array<com.stripe.android.model.PaymentMethodCreateParams.Type>;
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
				export class ShippingInformation extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.ShippingInformation>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingInformation>;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.ShippingInformation;
					public toMap(): java.util.Map<string,any>;
					public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
					public describeContents(): number;
					public toJson(): org.json.JSONObject;
					public equals(param0: any): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor();
					public getName(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPhone(): string;
					public hashCode(): number;
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
					public toMap(): java.util.Map<string,any>;
					public describeContents(): number;
					public getIdentifier(): string;
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: string);
					public toJson(): org.json.JSONObject;
					public equals(param0: any): boolean;
					public getAmount(): number;
					public constructor();
					public constructor(param0: string, param1: string, param2: number, param3: string);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDetail(): string;
					public hashCode(): number;
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
					public hashCode(): number;
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
					public equals(param0: any): boolean;
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
					public static RECOMMENDED: string;
					public static UNKNOWN: string;
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
					public equals(param0: any): boolean;
					public getExpiryYear(): java.lang.Integer;
					public hashCode(): number;
				}
				export module SourceCardData {
					export class Builder extends com.stripe.android.model.StripeSourceTypeModel.BaseBuilder {
						public static class: java.lang.Class<com.stripe.android.model.SourceCardData.Builder>;
						public build(): com.stripe.android.model.SourceCardData;
					}
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
					public equals(param0: any): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceCodeVerification;
					public getAttemptsRemaining(): number;
					public toMap(): java.util.Map<string,any>;
					public static fromString(param0: string): com.stripe.android.model.SourceCodeVerification;
					public getStatus(): string;
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
				export class SourceOwner extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceOwner>;
					public toMap(): java.util.Map<string,any>;
					public getVerifiedAddress(): com.stripe.android.model.Address;
					public toJson(): org.json.JSONObject;
					public equals(param0: any): boolean;
					public getVerifiedName(): string;
					public getName(): string;
					public static fromString(param0: string): com.stripe.android.model.SourceOwner;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceOwner;
					public getPhone(): string;
					public getVerifiedEmail(): string;
					public hashCode(): number;
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
					public static createSourceFromTokenParams(param0: string): com.stripe.android.model.SourceParams;
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
					public setAmountReturned(param0: number): void;
					public toMap(): java.util.Map<string,any>;
					public getAmountCharged(): number;
					public setAddress(param0: string): void;
					public toJson(): org.json.JSONObject;
					public setAmountReceived(param0: number): void;
					public getAmountReceived(): number;
					public getAmountReturned(): number;
					public static fromString(param0: string): com.stripe.android.model.SourceReceiver;
					public getAddress(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceReceiver;
					public equals(param0: any): boolean;
					public setAmountCharged(param0: number): void;
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
				export class SourceRedirect extends com.stripe.android.model.StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceRedirect>;
					public static PENDING: string;
					public static SUCCEEDED: string;
					public static FAILED: string;
					public static NOT_REQUIRED: string;
					public equals(param0: any): boolean;
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
				export class SourceSepaDebitData extends com.stripe.android.model.StripeSourceTypeModel {
					public static class: java.lang.Class<com.stripe.android.model.SourceSepaDebitData>;
					public getFingerPrint(): string;
					public equals(param0: any): boolean;
					public getBranchCode(): string;
					public getMandateReference(): string;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceSepaDebitData;
					public toMap(): java.util.Map<string,any>;
					public getBankCode(): string;
					public getCountry(): string;
					public toJson(): org.json.JSONObject;
					public hashCode(): number;
					public getLast4(): string;
					public getMandateUrl(): string;
				}
				export module SourceSepaDebitData {
					export class Builder extends com.stripe.android.model.StripeSourceTypeModel.BaseBuilder {
						public static class: java.lang.Class<com.stripe.android.model.SourceSepaDebitData.Builder>;
						public build(): com.stripe.android.model.SourceSepaDebitData;
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
				export abstract class StripeJsonModel {
					public static class: java.lang.Class<com.stripe.android.model.StripeJsonModel>;
					public constructor();
					public toMap(): java.util.Map<string,any>;
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
				export class StripeJsonUtils {
					public static class: java.lang.Class<com.stripe.android.model.StripeJsonUtils>;
					public static optString(param0: org.json.JSONObject, param1: string): string;
					public constructor();
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
					public equals(param0: any): boolean;
					public getAdditionalFields(): java.util.Map<string,any>;
					public toMap(): java.util.Map<string,any>;
					public toJson(): org.json.JSONObject;
					public hashCode(): number;
				}
				export module StripeSourceTypeModel {
					export abstract class BaseBuilder {
						public static class: java.lang.Class<com.stripe.android.model.StripeSourceTypeModel.BaseBuilder>;
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
				export class Token extends com.stripe.android.model.StripePaymentSource {
					public static class: java.lang.Class<com.stripe.android.model.Token>;
					public static TYPE_CARD: string;
					public static TYPE_BANK_ACCOUNT: string;
					public static TYPE_PII: string;
					public static TYPE_ACCOUNT: string;
					public static TYPE_CVC_UPDATE: string;
					public getId(): string;
					public constructor(param0: string, param1: boolean, param2: java.util.Date, param3: java.lang.Boolean, param4: com.stripe.android.model.Card);
					public constructor(param0: string, param1: boolean, param2: java.util.Date, param3: java.lang.Boolean, param4: com.stripe.android.model.BankAccount);
					public getUsed(): boolean;
					public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Token;
					public getCard(): com.stripe.android.model.Card;
					public equals(param0: any): boolean;
					public static fromString(param0: string): com.stripe.android.model.Token;
					public constructor(param0: string, param1: string, param2: boolean, param3: java.util.Date, param4: java.lang.Boolean);
					public getType(): string;
					public getBankAccount(): com.stripe.android.model.BankAccount;
					public hashCode(): number;
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
			export module model {
				export module wallets {
					export class AmexExpressCheckoutWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.AmexExpressCheckoutWallet>;
					}
					export module AmexExpressCheckoutWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.AmexExpressCheckoutWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.AmexExpressCheckoutWallet.Builder>;
							public constructor();
						}
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
				export module wallets {
					export class ApplePayWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.ApplePayWallet>;
					}
					export module ApplePayWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.ApplePayWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.ApplePayWallet.Builder>;
							public constructor();
						}
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
				export module wallets {
					export class GooglePayWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.GooglePayWallet>;
					}
					export module GooglePayWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.GooglePayWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.GooglePayWallet.Builder>;
							public constructor();
						}
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
				export module wallets {
					export class MasterpassWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.MasterpassWallet>;
						public billingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public email: string;
						public name: string;
						public shippingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module MasterpassWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.MasterpassWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.MasterpassWallet.Builder>;
							public constructor();
							public setBillingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.MasterpassWallet.Builder;
							public setName(param0: string): com.stripe.android.model.wallets.MasterpassWallet.Builder;
							public setEmail(param0: string): com.stripe.android.model.wallets.MasterpassWallet.Builder;
							public build(): com.stripe.android.model.wallets.MasterpassWallet;
							public setShippingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.MasterpassWallet.Builder;
						}
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
				export module wallets {
					export class SamsungPayWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.SamsungPayWallet>;
					}
					export module SamsungPayWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.SamsungPayWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.SamsungPayWallet.Builder>;
							public constructor();
						}
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
				export module wallets {
					export class VisaCheckoutWallet extends com.stripe.android.model.wallets.Wallet {
						public static class: java.lang.Class<com.stripe.android.model.wallets.VisaCheckoutWallet>;
						public billingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public email: string;
						public name: string;
						public shippingAddress: com.stripe.android.model.wallets.Wallet.Address;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export module VisaCheckoutWallet {
						export class Builder extends com.stripe.android.model.wallets.Wallet.Builder<com.stripe.android.model.wallets.VisaCheckoutWallet> {
							public static class: java.lang.Class<com.stripe.android.model.wallets.VisaCheckoutWallet.Builder>;
							public constructor();
							public setShippingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
							public setName(param0: string): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
							public build(): com.stripe.android.model.wallets.VisaCheckoutWallet;
							public setEmail(param0: string): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
							public setBillingAddress(param0: com.stripe.android.model.wallets.Wallet.Address): com.stripe.android.model.wallets.VisaCheckoutWallet.Builder;
						}
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
				export module wallets {
					export abstract class Wallet extends com.stripe.android.model.StripeJsonModel {
						public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet>;
						public toJson(): org.json.JSONObject;
						public toMap(): java.util.Map<string,any>;
					}
					export module Wallet {
						export class Address extends com.stripe.android.model.StripeJsonModel {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Address>;
							public city: string;
							public country: string;
							public line1: string;
							public line2: string;
							public postalCode: string;
							public state: string;
							public hashCode(): number;
							public toJson(): org.json.JSONObject;
							public toMap(): java.util.Map<string,any>;
							public equals(param0: any): boolean;
						}
						export module Address {
							export class Builder {
								public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Address.Builder>;
								public setLine1(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setPostalCode(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setCountry(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setLine2(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public setState(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
								public build(): com.stripe.android.model.wallets.Wallet.Address;
								public setCity(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
							}
						}
						export abstract class Builder<W>  extends java.lang.Object {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Builder<any>>;
							public setDynamicLast4(param0: string): com.stripe.android.model.wallets.Wallet.Builder<any>;
						}
						export class Type {
							public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Type>;
							public static AmexExpressCheckout: com.stripe.android.model.wallets.Wallet.Type;
							public static ApplePay: com.stripe.android.model.wallets.Wallet.Type;
							public static GooglePay: com.stripe.android.model.wallets.Wallet.Type;
							public static Masterpass: com.stripe.android.model.wallets.Wallet.Type;
							public static SamsungPay: com.stripe.android.model.wallets.Wallet.Type;
							public static VisaCheckout: com.stripe.android.model.wallets.Wallet.Type;
							public code: string;
							public static valueOf(param0: string): com.stripe.android.model.wallets.Wallet.Type;
							public static values(): native.Array<com.stripe.android.model.wallets.Wallet.Type>;
						}
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
				export module wallets {
					export class WalletFactory {
						public static class: java.lang.Class<com.stripe.android.model.wallets.WalletFactory>;
						public constructor();
						public create(param0: org.json.JSONObject): com.stripe.android.model.wallets.Wallet;
					}
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class ClassUtils {
					public static class: java.lang.Class<com.stripe.android.utils.ClassUtils>;
					public static findField<T>(param0: java.lang.Class<T>, param1: java.util.Collection<string>): java.lang.reflect.Field;
					public static findMethod<T>(param0: java.lang.Class<T>, param1: java.util.Collection<string>): java.lang.reflect.Method;
					public static getInternalObject<T>(param0: java.lang.Class<T>, param1: java.util.Set<string>, param2: any): any;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module utils {
				export class ObjectUtils {
					public static class: java.lang.Class<com.stripe.android.utils.ObjectUtils>;
					public static hash(param0: native.Array<any>): number;
					public constructor();
					public static equals(param0: any, param1: any): boolean;
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
					export class SourceCallbackImpl extends com.stripe.android.ActivitySourceCallback<com.stripe.android.view.AddSourceActivity> {
						public static class: java.lang.Class<com.stripe.android.view.AddSourceActivity.SourceCallbackImpl>;
						public onSuccess(param0: com.stripe.android.model.Source): void;
						public onError(param0: java.lang.Exception): void;
					}
					export class SourceRetrievalListenerImpl extends com.stripe.android.CustomerSession.ActivitySourceRetrievalListener<com.stripe.android.view.AddSourceActivity> {
						public static class: java.lang.Class<com.stripe.android.view.AddSourceActivity.SourceRetrievalListenerImpl>;
						public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
						public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
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
					public setCvcLabel(param0: string): void;
					public setCardNumber(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setPostalCodeTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getCard(): com.stripe.android.model.Card;
					public setCvcNumberTextWatcher(param0: globalAndroid.text.TextWatcher): void;
					public validateCardNumber(): boolean;
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
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
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
					public mCountrySelected: string;
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
					public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
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

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class MaskedCardAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.stripe.android.view.MaskedCardAdapter.ViewHolder> {
					public static class: java.lang.Class<com.stripe.android.view.MaskedCardAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.MaskedCardAdapter.ViewHolder;
					public onBindViewHolder(param0: com.stripe.android.view.MaskedCardAdapter.ViewHolder, param1: number): void;
					public getItemCount(): number;
				}
				export module MaskedCardAdapter {
					export class ViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.MaskedCardAdapter.ViewHolder>;
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
				export class PaymentFlowExtras {
					public static class: java.lang.Class<com.stripe.android.view.PaymentFlowExtras>;
					public static EXTRA_DEFAULT_SHIPPING_METHOD: string;
					public static EXTRA_IS_SHIPPING_INFO_VALID: string;
					public static EXTRA_SHIPPING_INFO_DATA: string;
					public static EXTRA_SHIPPING_INFO_ERROR: string;
					public static EVENT_SHIPPING_INFO_PROCESSED: string;
					public static EVENT_SHIPPING_INFO_SUBMITTED: string;
					public static EXTRA_VALID_SHIPPING_METHODS: string;
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
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public constructor();
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public static newIntent(param0: globalAndroid.app.Activity): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class PaymentMethodsActivityStarter {
					public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter>;
					public startForResult(param0: number): void;
					public newIntent(): globalAndroid.content.Intent;
					public constructor(param0: globalAndroid.app.Activity);
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

declare module com {
	export module stripe {
		export module android {
			export module view {
				export class ShippingMethodAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.stripe.android.view.ShippingMethodAdapter.ViewHolder> {
					public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter>;
					public onBindViewHolder(param0: com.stripe.android.view.ShippingMethodAdapter.ViewHolder, param1: number): void;
					public getItemCount(): number;
					public getItemId(param0: number): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.stripe.android.view.ShippingMethodAdapter.ViewHolder;
				}
				export module ShippingMethodAdapter {
					export class ViewHolder {
						public static class: java.lang.Class<com.stripe.android.view.ShippingMethodAdapter.ViewHolder>;
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

declare module com {
	export module stripe {
		export module android {
			export module view {
				export module i18n {
					export class ErrorMessageTranslator {
						public static class: java.lang.Class<com.stripe.android.view.i18n.ErrorMessageTranslator>;
						/**
						 * Constructs a new instance of the com.stripe.android.view.i18n.ErrorMessageTranslator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
						});
						public constructor();
						public translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
					}
					export module ErrorMessageTranslator {
						export class Default extends com.stripe.android.view.i18n.ErrorMessageTranslator {
							public static class: java.lang.Class<com.stripe.android.view.i18n.ErrorMessageTranslator.Default>;
							public constructor();
							public translate(param0: number, param1: string, param2: com.stripe.android.StripeError): string;
						}
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
				export module i18n {
					export class TranslatorManager {
						public static class: java.lang.Class<com.stripe.android.view.i18n.TranslatorManager>;
						public static getErrorMessageTranslator(): com.stripe.android.view.i18n.ErrorMessageTranslator;
						public static setErrorMessageTranslator(param0: com.stripe.android.view.i18n.ErrorMessageTranslator): void;
					}
				}
			}
		}
	}
}

//Generics information:
//com.stripe.android.ActivitySourceCallback:1
//com.stripe.android.CustomerSession.ActivitySourceRetrievalListener:1
//com.stripe.android.EphemeralKeyManager:1
//com.stripe.android.EphemeralKeyManager.KeyManagerListener:1
//com.stripe.android.PaymentSession.ActivityPaymentSessionListener:1
//com.stripe.android.model.wallets.Wallet.Builder:1