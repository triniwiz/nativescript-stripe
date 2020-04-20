// NOTE!!!! This file contains the declarations needed for the NS plugin implementation.
//          It may not contain all declarations since the dts-generator does a poor job with Kotlin source.
// Generated from Stripe 10.2.1
// Using Android DTS Generator as documented at https://docs.nativescript.org/core-concepts/android-runtime/metadata/generating-typescript-declarations:
//   Download .aar from https://bintray.com/bintray/jcenter/com.stripe%3Astripe-android/10.2.1#files/com%2Fstripe%2Fstripe-android%2F10.2.1
//   Unpack with `unzip`, copy classes.jar to dts-generator folder, then
//   cd dts-generator
//   ./gradlew jar
//   java -jar build/libs/dts-generator.jar -input classes.jar
//   cp out/android.d.ts <path to src>/typings/java\!Stripe.d.ts

// Process same way with stripe3ds2 library
// https://bintray.com/bintray/jcenter/com.stripe%3Astripe-3ds2-android/1.1.6#files/com%2Fstripe%2Fstripe-3ds2-android%2F1.1.6

declare module com {
  export module stripe {
    export module android {
      export abstract class ActivitySourceCallback<A>  extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Source> {
        public static class: java.lang.Class<com.stripe.android.ActivitySourceCallback<any>>;
        public onSuccess(param0: any): void;
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
      export class AnalyticsDataFactory {
        public static class: java.lang.Class<com.stripe.android.AnalyticsDataFactory>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ApiKeyValidator {
        public static class: java.lang.Class<com.stripe.android.ApiKeyValidator>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export abstract class ApiOperation<ResultType>  extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,com.stripe.android.ResultWrapper<any>> {
        public static class: java.lang.Class<com.stripe.android.ApiOperation<any>>;
        public doInBackground(param0: native.Array<java.lang.Void>): com.stripe.android.ResultWrapper<any>;
        public onPostExecute(param0: com.stripe.android.ResultWrapper<any>): void;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ApiRequest extends com.stripe.android.StripeRequest {
        public static class: java.lang.Class<com.stripe.android.ApiRequest>;
        public hashCode(): number;
        public equals(param0: any): boolean;
      }
      export module ApiRequest {
        export class Options {
          public static class: java.lang.Class<com.stripe.android.ApiRequest.Options>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ApiRequestExecutor {
        public static class: java.lang.Class<com.stripe.android.ApiRequestExecutor>;
        /**
         * Constructs a new instance of the com.stripe.android.ApiRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
        });
        public constructor();
        public execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ApiResultCallback<ResultType>  extends java.lang.Object {
        public static class: java.lang.Class<com.stripe.android.ApiResultCallback<any>>;
        /**
         * Constructs a new instance of the com.stripe.android.ApiResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          onSuccess(param0: ResultType): void;
          onError(param0: java.lang.Exception): void;
        });
        public constructor();
        public onError(param0: java.lang.Exception): void;
        public onSuccess(param0: ResultType): void;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ApiVersion {
        public static class: java.lang.Class<com.stripe.android.ApiVersion>;
        public code: string;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public toString(): string;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class AppInfo {
        public static class: java.lang.Class<com.stripe.android.AppInfo>;
        public hashCode(): number;
        public static create(param0: string, param1: string, param2: string): com.stripe.android.AppInfo;
        public static create(param0: string, param1: string, param2: string, param3: string): com.stripe.android.AppInfo;
        public equals(param0: any): boolean;
        public static create(param0: string): com.stripe.android.AppInfo;
        public static create(param0: string, param1: string): com.stripe.android.AppInfo;
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
        public static LIBRARY_PACKAGE_NAME: string;
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
      export class ConnectionFactory {
        public static class: java.lang.Class<com.stripe.android.ConnectionFactory>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class CustomerEphemeralKey extends com.stripe.android.EphemeralKey {
        public static class: java.lang.Class<com.stripe.android.CustomerEphemeralKey>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.CustomerEphemeralKey>;
      }
      export module CustomerEphemeralKey {
        export class Factory extends com.stripe.android.EphemeralKey.Factory<com.stripe.android.CustomerEphemeralKey> {
          public static class: java.lang.Class<com.stripe.android.CustomerEphemeralKey.Factory>;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class CustomerSession {
        public static class: java.lang.Class<com.stripe.android.CustomerSession>;
        public static ACTION_API_EXCEPTION: string;
        public static EXTRA_EXCEPTION: string;
        public static EVENT_SHIPPING_INFO_SAVED: string;
        public getCachedCustomer(): com.stripe.android.model.Customer;
        public static getInstance(): com.stripe.android.CustomerSession;
        public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): void;
        public attachPaymentMethod(param0: string, param1: com.stripe.android.CustomerSession.PaymentMethodRetrievalListener): void;
        public updateCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
        public static initCustomerSession(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider, param2: string): void;
        public setCustomerDefaultSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
        public addProductUsageTokenIfValid(param0: string): void;
        public deleteCustomerSource(param0: string, param1: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
        public setCustomerShippingInformation(param0: com.stripe.android.model.ShippingInformation): void;
        public static cancelCallbacks(): void;
        public getPaymentMethods(param0: com.stripe.android.model.PaymentMethod.Type, param1: com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener): void;
        public addCustomerSource(param0: string, param1: string, param2: com.stripe.android.CustomerSession.SourceRetrievalListener): void;
        public static endCustomerSession(): void;
        public retrieveCurrentCustomer(param0: com.stripe.android.CustomerSession.CustomerRetrievalListener): void;
        public detachPaymentMethod(param0: string, param1: com.stripe.android.CustomerSession.PaymentMethodRetrievalListener): void;
      }
      export module CustomerSession {
        export abstract class ActivityCustomerRetrievalListener<A>  extends com.stripe.android.CustomerSession.CustomerRetrievalListener {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivityCustomerRetrievalListener<any>>;
          public onCustomerRetrieved(param0: com.stripe.android.model.Customer): void;
          public constructor(param0: any);
          public getActivity(): any;
          public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
        }
        export abstract class ActivityPaymentMethodRetrievalListener<A>  extends com.stripe.android.CustomerSession.PaymentMethodRetrievalListener {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivityPaymentMethodRetrievalListener<any>>;
          public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
          public constructor(param0: any);
          public getActivity(): any;
          public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
        }
        export abstract class ActivityPaymentMethodsRetrievalListener<A>  extends com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivityPaymentMethodsRetrievalListener<any>>;
          public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
          public constructor(param0: any);
          public getActivity(): any;
          public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
        }
        export abstract class ActivitySourceRetrievalListener<A>  extends com.stripe.android.CustomerSession.SourceRetrievalListener {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.ActivitySourceRetrievalListener<any>>;
          public onSourceRetrieved(param0: com.stripe.android.model.Source): void;
          public constructor(param0: any);
          public getActivity(): any;
          public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
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
        export class CustomerSessionHandler {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
        }
        export module CustomerSessionHandler {
          export class Listener {
            public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionHandler.Listener>;
            /**
             * Constructs a new instance of the com.stripe.android.CustomerSession$CustomerSessionHandler$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onCustomerRetrieved(param0: com.stripe.android.model.Customer, param1: string): void;
              onSourceRetrieved(param0: com.stripe.android.model.Source, param1: string): void;
              onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod, param1: string): void;
              onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>, param1: string): void;
              onCustomerShippingInfoSaved(param0: com.stripe.android.model.Customer): void;
              onError(param0: com.stripe.android.exception.StripeException, param1: string): void;
            });
            public constructor();
            public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod, param1: string): void;
            public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>, param1: string): void;
            public onSourceRetrieved(param0: com.stripe.android.model.Source, param1: string): void;
            public onCustomerShippingInfoSaved(param0: com.stripe.android.model.Customer): void;
            public onError(param0: com.stripe.android.exception.StripeException, param1: string): void;
            public onCustomerRetrieved(param0: com.stripe.android.model.Customer, param1: string): void;
          }
        }
        export abstract class CustomerSessionRunnable<T>  extends java.lang.Runnable {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionRunnable<any>>;
          public run(): void;
        }
        export module CustomerSessionRunnable {
          export class MessageData<T>  extends java.lang.Object {
            public static class: java.lang.Class<com.stripe.android.CustomerSession.CustomerSessionRunnable.MessageData<any>>;
          }
        }
        export class MessageCode {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.MessageCode>;
          /**
           * Constructs a new instance of the com.stripe.android.CustomerSession$MessageCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
          public static CUSTOMER_SHIPPING_INFO_SAVED: number;
          public static ERROR: number;
          public static SOURCE_RETRIEVED: number;
          public static CUSTOMER_RETRIEVED: number;
          public static PAYMENT_METHODS_RETRIEVED: number;
          public static PAYMENT_METHOD_RETRIEVED: number;
        }
        export class PaymentMethodRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.PaymentMethodRetrievalListener>;
          /**
           * Constructs a new instance of the com.stripe.android.CustomerSession$PaymentMethodRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
            onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
          });
          public constructor();
          public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
          public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
        }
        export class PaymentMethodsRetrievalListener extends com.stripe.android.CustomerSession.RetrievalListener {
          public static class: java.lang.Class<com.stripe.android.CustomerSession.PaymentMethodsRetrievalListener>;
          /**
           * Constructs a new instance of the com.stripe.android.CustomerSession$PaymentMethodsRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
            onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
          });
          public constructor();
          public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
          public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
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
      export abstract class EphemeralKey extends com.stripe.android.model.StripeModel {
        public static class: java.lang.Class<com.stripe.android.EphemeralKey>;
        public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
        public hashCode(): number;
        public describeContents(): number;
        public equals(param0: any): boolean;
        public static fromJson(param0: org.json.JSONObject, param1: com.stripe.android.EphemeralKey.Factory<any>): com.stripe.android.EphemeralKey;
        public toMap(): java.util.Map<string,any>;
      }
      export module EphemeralKey {
        export abstract class Factory<TEphemeralKey>  extends java.lang.Object {
          public static class: java.lang.Class<com.stripe.android.EphemeralKey.Factory<any>>;
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
      export class Factory0<ReturnType>  extends java.lang.Object {
        public static class: java.lang.Class<com.stripe.android.Factory0<any>>;
        /**
         * Constructs a new instance of the com.stripe.android.Factory0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          create(): ReturnType;
        });
        public constructor();
        public create(): ReturnType;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class FingerprintRequest extends com.stripe.android.StripeRequest {
        public static class: java.lang.Class<com.stripe.android.FingerprintRequest>;
        public hashCode(): number;
        public equals(param0: any): boolean;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class FingerprintRequestFactory extends com.stripe.android.Factory0<com.stripe.android.FingerprintRequest> {
        public static class: java.lang.Class<com.stripe.android.FingerprintRequestFactory>;
        public create(): any;
        public create(): com.stripe.android.FingerprintRequest;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class FireAndForgetRequestExecutor {
        public static class: java.lang.Class<com.stripe.android.FireAndForgetRequestExecutor>;
        /**
         * Constructs a new instance of the com.stripe.android.FireAndForgetRequestExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          executeAsync(param0: com.stripe.android.StripeRequest): void;
        });
        public constructor();
        public executeAsync(param0: com.stripe.android.StripeRequest): void;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class GooglePayConfig {
        public static class: java.lang.Class<com.stripe.android.GooglePayConfig>;
        public getTokenizationSpecification(): org.json.JSONObject;
        public constructor(param0: string);
        public constructor();
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class IssuingCardEphemeralKey extends com.stripe.android.EphemeralKey {
        public static class: java.lang.Class<com.stripe.android.IssuingCardEphemeralKey>;
        public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.IssuingCardEphemeralKey>;
      }
      export module IssuingCardEphemeralKey {
        export class Factory extends com.stripe.android.EphemeralKey.Factory<com.stripe.android.IssuingCardEphemeralKey> {
          public static class: java.lang.Class<com.stripe.android.IssuingCardEphemeralKey.Factory>;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class IssuingCardPinService extends com.stripe.android.EphemeralKeyManager.KeyManagerListener<com.stripe.android.IssuingCardEphemeralKey> {
        public static class: java.lang.Class<com.stripe.android.IssuingCardPinService>;
        public retrievePin(param0: string, param1: string, param2: string, param3: com.stripe.android.IssuingCardPinService.IssuingCardPinRetrievalListener): void;
        public static create(param0: globalAndroid.content.Context, param1: com.stripe.android.EphemeralKeyProvider): com.stripe.android.IssuingCardPinService;
        public onKeyUpdate(param0: com.stripe.android.IssuingCardEphemeralKey, param1: string, param2: string, param3: java.util.Map<string,any>): void;
        public updatePin(param0: string, param1: string, param2: string, param3: string, param4: com.stripe.android.IssuingCardPinService.IssuingCardPinUpdateListener): void;
        public onKeyError(param0: string, param1: number, param2: string): void;
        public onKeyUpdate(param0: any, param1: string, param2: string, param3: java.util.Map<string,any>): void;
      }
      export module IssuingCardPinService {
        export class CardPinActionError {
          public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.CardPinActionError>;
          public static UNKNOWN_ERROR: com.stripe.android.IssuingCardPinService.CardPinActionError;
          public static EPHEMERAL_KEY_ERROR: com.stripe.android.IssuingCardPinService.CardPinActionError;
          public static ONE_TIME_CODE_INCORRECT: com.stripe.android.IssuingCardPinService.CardPinActionError;
          public static ONE_TIME_CODE_EXPIRED: com.stripe.android.IssuingCardPinService.CardPinActionError;
          public static ONE_TIME_CODE_TOO_MANY_ATTEMPTS: com.stripe.android.IssuingCardPinService.CardPinActionError;
          public static ONE_TIME_CODE_ALREADY_REDEEMED: com.stripe.android.IssuingCardPinService.CardPinActionError;
          public static values(): native.Array<com.stripe.android.IssuingCardPinService.CardPinActionError>;
          public static valueOf(param0: string): com.stripe.android.IssuingCardPinService.CardPinActionError;
        }
        export class IssuingCardPinRetrievalListener {
          public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.IssuingCardPinRetrievalListener>;
          /**
           * Constructs a new instance of the com.stripe.android.IssuingCardPinService$IssuingCardPinRetrievalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onIssuingCardPinRetrieved(param0: string): void;
            onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
          });
          public constructor();
          public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
          public onIssuingCardPinRetrieved(param0: string): void;
        }
        export class IssuingCardPinUpdateListener {
          public static class: java.lang.Class<com.stripe.android.IssuingCardPinService.IssuingCardPinUpdateListener>;
          /**
           * Constructs a new instance of the com.stripe.android.IssuingCardPinService$IssuingCardPinUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onIssuingCardPinUpdated(): void;
            onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
          });
          public constructor();
          public onError(param0: com.stripe.android.IssuingCardPinService.CardPinActionError, param1: string, param2: java.lang.Throwable): void;
          public onIssuingCardPinUpdated(): void;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ObjectBuilder<T>  extends java.lang.Object {
        public static class: java.lang.Class<com.stripe.android.ObjectBuilder<any>>;
        /**
         * Constructs a new instance of the com.stripe.android.ObjectBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          build(): T;
        });
        public constructor();
        public build(): T;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class OperationIdFactory {
        public static class: java.lang.Class<com.stripe.android.OperationIdFactory>;
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
      export class PaymentAuthConfig {
        public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig>;
        public static init(param0: com.stripe.android.PaymentAuthConfig): void;
        public static get(): com.stripe.android.PaymentAuthConfig;
      }
      export module PaymentAuthConfig {
        export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig> {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Builder>;
          public build(): com.stripe.android.PaymentAuthConfig;
          public constructor();
          public build(): any;
          public set3ds2Config(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2Config): com.stripe.android.PaymentAuthConfig.Builder;
        }
        export class Stripe3ds2ButtonCustomization {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
        export module Stripe3ds2ButtonCustomization {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization> {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder>;
            public constructor();
            public setCornerRadius(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
            public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization;
            public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
            public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
            public setBackgroundColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
            public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization.Builder;
            public build(): any;
          }
        }
        export class Stripe3ds2Config {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config>;
        }
        export module Stripe3ds2Config {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config> {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder>;
            public setUiCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder;
            public constructor();
            public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config;
            public setTimeout(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2Config.Builder;
            public build(): any;
          }
        }
        export class Stripe3ds2LabelCustomization {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
        export module Stripe3ds2LabelCustomization {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization> {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder>;
            public constructor();
            public setHeadingTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
            public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
            public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization;
            public setHeadingTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
            public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
            public setHeadingTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
            public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization.Builder;
            public build(): any;
          }
        }
        export class Stripe3ds2TextBoxCustomization {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
        export module Stripe3ds2TextBoxCustomization {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization> {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder>;
            public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization;
            public constructor();
            public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
            public setBorderWidth(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
            public setBorderColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
            public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
            public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
            public setCornerRadius(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization.Builder;
            public build(): any;
          }
        }
        export class Stripe3ds2ToolbarCustomization {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization>;
          public equals(param0: any): boolean;
          public hashCode(): number;
        }
        export module Stripe3ds2ToolbarCustomization {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization> {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder>;
            public setTextColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
            public constructor();
            public setButtonText(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
            public setTextFontName(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
            public setBackgroundColor(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
            public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization;
            public setHeaderText(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
            public setTextFontSize(param0: number): com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization.Builder;
            public build(): any;
          }
        }
        export class Stripe3ds2UiCustomization {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization>;
          public equals(param0: any): boolean;
          public hashCode(): number;
          public getUiCustomization(): com.stripe.android.stripe3ds2.init.ui.UiCustomization;
        }
        export module Stripe3ds2UiCustomization {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization> {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder>;
            public constructor();
            public setButtonCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2ButtonCustomization, param1: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
            public setTextBoxCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2TextBoxCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
            public static createWithAppTheme(param0: globalAndroid.app.Activity): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
            public build(): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization;
            public setToolbarCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2ToolbarCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
            public setLabelCustomization(param0: com.stripe.android.PaymentAuthConfig.Stripe3ds2LabelCustomization): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.Builder;
            public build(): any;
          }
          export class ButtonType {
            public static class: java.lang.Class<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType>;
            public static SUBMIT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
            public static CONTINUE: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
            public static NEXT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
            public static CANCEL: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
            public static RESEND: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
            public static SELECT: com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
            public static values(): native.Array<com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType>;
            public static valueOf(param0: string): com.stripe.android.PaymentAuthConfig.Stripe3ds2UiCustomization.ButtonType;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class PaymentAuthWebViewStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.PaymentAuthWebViewStarter.Data> {
        public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter>;
        public static EXTRA_AUTH_URL: string;
        public static EXTRA_CLIENT_SECRET: string;
        public static EXTRA_RETURN_URL: string;
        public static EXTRA_UI_CUSTOMIZATION: string;
        public start(param0: any): void;
        public start(param0: com.stripe.android.PaymentAuthWebViewStarter.Data): void;
      }
      export module PaymentAuthWebViewStarter {
        export class Data {
          public static class: java.lang.Class<com.stripe.android.PaymentAuthWebViewStarter.Data>;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class PaymentConfiguration {
        public static class: java.lang.Class<com.stripe.android.PaymentConfiguration>;
        public getPublishableKey(): string;
        public static init(param0: globalAndroid.content.Context, param1: string): void;
        public static getInstance(param0: globalAndroid.content.Context): com.stripe.android.PaymentConfiguration;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class PaymentController {
        public static class: java.lang.Class<com.stripe.android.PaymentController>;
      }
      export module PaymentController {
        export class ConfirmStripeIntentCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.StripeIntent> {
          public static class: java.lang.Class<com.stripe.android.PaymentController.ConfirmStripeIntentCallback>;
          public onSuccess(param0: com.stripe.android.model.StripeIntent): void;
          public onError(param0: java.lang.Exception): void;
          public onSuccess(param0: any): void;
        }
        export class ConfirmStripeIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.StripeIntent> {
          public static class: java.lang.Class<com.stripe.android.PaymentController.ConfirmStripeIntentTask>;
        }
        export class PaymentAuth3ds2ChallengeStatusReceiver {
          public static class: java.lang.Class<com.stripe.android.PaymentController.PaymentAuth3ds2ChallengeStatusReceiver>;
          public completed(param0: com.stripe.android.stripe3ds2.transaction.CompletionEvent, param1: string): void;
          public runtimeError(param0: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent): void;
          public cancelled(param0: string): void;
          public timedout(param0: string): void;
          public protocolError(param0: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent): void;
        }
        export class RetrieveIntentTask extends com.stripe.android.ApiOperation<com.stripe.android.model.StripeIntent> {
          public static class: java.lang.Class<com.stripe.android.PaymentController.RetrieveIntentTask>;
        }
        export class Stripe3ds2AuthCallback extends com.stripe.android.ApiResultCallback<com.stripe.android.model.Stripe3ds2AuthResult> {
          public static class: java.lang.Class<com.stripe.android.PaymentController.Stripe3ds2AuthCallback>;
          public onSuccess(param0: com.stripe.android.model.Stripe3ds2AuthResult): void;
          public onError(param0: java.lang.Exception): void;
          public onSuccess(param0: any): void;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class PaymentFlowActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentFlowActivity> {
        public static class: java.lang.Class<com.stripe.android.PaymentFlowActivityStarter>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class PaymentIntentResult extends com.stripe.android.StripeIntentResult<com.stripe.android.model.PaymentIntent> {
        public static class: java.lang.Class<com.stripe.android.PaymentIntentResult>;
      }
      export module PaymentIntentResult {
        export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentIntentResult> {
          public static class: java.lang.Class<com.stripe.android.PaymentIntentResult.Builder>;
          public build(): any;
          public build(): com.stripe.android.PaymentIntentResult;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class PaymentRelayStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.PaymentRelayStarter.Data> {
        public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter>;
        public start(param0: any): void;
        public start(param0: com.stripe.android.PaymentRelayStarter.Data): void;
      }
      export module PaymentRelayStarter {
        export class Data {
          public static class: java.lang.Class<com.stripe.android.PaymentRelayStarter.Data>;
          public equals(param0: any): boolean;
          public hashCode(): number;
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
        public constructor(param0: globalAndroid.app.Activity);
        public constructor(param0: androidx.fragment.app.Fragment);
        public presentPaymentMethodSelection(param0: boolean): void;
        public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig): boolean;
        public presentPaymentMethodSelection(param0: string): void;
        public savePaymentSessionInstanceState(param0: globalAndroid.os.Bundle): void;
        public init(param0: com.stripe.android.PaymentSession.PaymentSessionListener, param1: com.stripe.android.PaymentSessionConfig, param2: globalAndroid.os.Bundle): boolean;
        public onCompleted(): void;
        public getPaymentSessionData(): com.stripe.android.PaymentSessionData;
        public setCartTotal(param0: number): void;
        public presentPaymentMethodSelection(): void;
        public presentShippingFlow(): void;
        public presentPaymentMethodSelection(param0: boolean, param1: string): void;
        public onDestroy(): void;
        public handlePaymentData(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
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
        export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.PaymentSessionConfig> {
          public static class: java.lang.Class<com.stripe.android.PaymentSessionConfig.Builder>;
          public setPrepopulatedShippingInfo(param0: com.stripe.android.model.ShippingInformation): com.stripe.android.PaymentSessionConfig.Builder;
          public build(): com.stripe.android.PaymentSessionConfig;
          public setOptionalShippingInfoFields(param0: native.Array<string>): com.stripe.android.PaymentSessionConfig.Builder;
          public setShippingInfoRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
          public constructor();
          public setShippingMethodsRequired(param0: boolean): com.stripe.android.PaymentSessionConfig.Builder;
          public build(): any;
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
        public updateIsPaymentReadyToCharge(param0: com.stripe.android.PaymentSessionConfig): boolean;
        public constructor();
        public getPaymentMethod(): com.stripe.android.model.PaymentMethod;
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
      export class PaymentSessionPrefs {
        public static class: java.lang.Class<com.stripe.android.PaymentSessionPrefs>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class ResultWrapper<ResultType>  extends java.lang.Object {
        public static class: java.lang.Class<com.stripe.android.ResultWrapper<any>>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class SetupIntentResult extends com.stripe.android.StripeIntentResult<com.stripe.android.model.SetupIntent> {
        public static class: java.lang.Class<com.stripe.android.SetupIntentResult>;
      }
      export module SetupIntentResult {
        export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.SetupIntentResult> {
          public static class: java.lang.Class<com.stripe.android.SetupIntentResult.Builder>;
          public build(): com.stripe.android.SetupIntentResult;
          public build(): any;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class Stripe {
        public static class: java.lang.Class<com.stripe.android.Stripe>;
        public static API_VERSION: string;
        public static VERSION: string;
        public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
        public authenticatePayment(param0: globalAndroid.app.Activity, param1: string): void;
        public authenticatePayment(param0: androidx.fragment.app.Fragment, param1: string): void;
        public authenticateSetup(param0: androidx.fragment.app.Fragment, param1: string): void;
        public authenticateSetup(param0: globalAndroid.app.Activity, param1: string): void;
        public confirmPayment(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmPaymentIntentParams): void;
        public confirmPaymentIntentSynchronous(param0: com.stripe.android.model.ConfirmPaymentIntentParams): com.stripe.android.model.PaymentIntent;
        public confirmPayment(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.ConfirmPaymentIntentParams): void;
        public confirmSetupIntent(param0: globalAndroid.app.Activity, param1: com.stripe.android.model.ConfirmSetupIntentParams): void;
        public confirmSetupIntent(param0: androidx.fragment.app.Fragment, param1: com.stripe.android.model.ConfirmSetupIntentParams): void;
        public confirmSetupIntentSynchronous(param0: com.stripe.android.model.ConfirmSetupIntentParams, param1: string): com.stripe.android.model.SetupIntent;
        public createAccountTokenSynchronous(param0: com.stripe.android.model.AccountParams): com.stripe.android.model.Token;
        public createBankAccountToken(param0: com.stripe.android.model.BankAccount, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
        public createBankAccountTokenSynchronous(param0: com.stripe.android.model.BankAccount): com.stripe.android.model.Token;
        public createCvcUpdateToken(param0: string, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
        public createCvcUpdateTokenSynchronous(param0: string): com.stripe.android.model.Token;
        public createPaymentMethod(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod>): void;
        public createPaymentMethodSynchronous(param0: com.stripe.android.model.PaymentMethodCreateParams): com.stripe.android.model.PaymentMethod;
        public createPiiToken(param0: string, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
        public createPiiTokenSynchronous(param0: string): com.stripe.android.model.Token;
        public createSource(param0: com.stripe.android.model.SourceParams, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Source>): void;
        public createSourceSynchronous(param0: com.stripe.android.model.SourceParams): com.stripe.android.model.Source;
        public createToken(param0: com.stripe.android.model.Card, param1: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
        public createCardTokenSynchronous(param0: com.stripe.android.model.Card): com.stripe.android.model.Token;
        public onPaymentResult(param0: number, param1: globalAndroid.content.Intent, param2: com.stripe.android.ApiResultCallback<com.stripe.android.PaymentIntentResult>): boolean;
        public onSetupResult(param0: number, param1: globalAndroid.content.Intent, param2: string, param3: com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>): boolean;
        public onSetupResult(param0: number, param1: globalAndroid.content.Intent, param2: com.stripe.android.ApiResultCallback<com.stripe.android.SetupIntentResult>): boolean;
        public retrievePaymentIntentSynchronous(param0: string): com.stripe.android.model.PaymentIntent;
        public retrieveSetupIntentSynchronous(param0: string): com.stripe.android.model.SetupIntent;
        public retrieveSourceSynchronous(param0: string, param1: string): com.stripe.android.model.Source;
        public static setAppInfo(param0: com.stripe.android.AppInfo): void;
      }
      export module Stripe {
        export class CreatePaymentMethodTask extends com.stripe.android.ApiOperation<com.stripe.android.model.PaymentMethod> {
          public static class: java.lang.Class<com.stripe.android.Stripe.CreatePaymentMethodTask>;
        }
        export class CreateSourceTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Source> {
          public static class: java.lang.Class<com.stripe.android.Stripe.CreateSourceTask>;
        }
        export class CreateTokenTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Token> {
          public static class: java.lang.Class<com.stripe.android.Stripe.CreateTokenTask>;
        }
        export class TokenCreator {
          public static class: java.lang.Class<com.stripe.android.Stripe.TokenCreator>;
          /**
           * Constructs a new instance of the com.stripe.android.Stripe$TokenCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            create(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string, param3: java.util.concurrent.Executor, param4: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
          });
          public constructor();
          public create(param0: java.util.Map<string,any>, param1: com.stripe.android.ApiRequest.Options, param2: string, param3: java.util.concurrent.Executor, param4: com.stripe.android.ApiResultCallback<com.stripe.android.model.Token>): void;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class Stripe3ds2AuthParams {
        public static class: java.lang.Class<com.stripe.android.Stripe3ds2AuthParams>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class Stripe3ds2CompletionStarter extends com.stripe.android.view.AuthActivityStarter<com.stripe.android.Stripe3ds2CompletionStarter.StartData> {
        public static class: java.lang.Class<com.stripe.android.Stripe3ds2CompletionStarter>;
        public start(param0: any): void;
        public start(param0: com.stripe.android.Stripe3ds2CompletionStarter.StartData): void;
      }
      export module Stripe3ds2CompletionStarter {
        export class StartData {
          public static class: java.lang.Class<com.stripe.android.Stripe3ds2CompletionStarter.StartData>;
          public equals(param0: any): boolean;
          public hashCode(): number;
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
        export class Complete3ds2AuthTask extends com.stripe.android.ApiOperation<java.lang.Boolean> {
          public static class: java.lang.Class<com.stripe.android.StripeApiHandler.Complete3ds2AuthTask>;
        }
        export class Start3ds2AuthTask extends com.stripe.android.ApiOperation<com.stripe.android.model.Stripe3ds2AuthResult> {
          public static class: java.lang.Class<com.stripe.android.StripeApiHandler.Start3ds2AuthTask>;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class StripeApiRequestExecutor extends com.stripe.android.ApiRequestExecutor {
        public static class: java.lang.Class<com.stripe.android.StripeApiRequestExecutor>;
        public execute(param0: com.stripe.android.ApiRequest): com.stripe.android.StripeResponse;
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
      export class StripeFireAndForgetRequestExecutor extends com.stripe.android.FireAndForgetRequestExecutor {
        public static class: java.lang.Class<com.stripe.android.StripeFireAndForgetRequestExecutor>;
        public executeAsync(param0: com.stripe.android.StripeRequest): void;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export abstract class StripeIntentResult<T>  extends java.lang.Object {
        public static class: java.lang.Class<com.stripe.android.StripeIntentResult<any>>;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public getIntent(): T;
        public getOutcome(): number;
        /** @deprecated */
        public getStatus(): number;
      }
      export module StripeIntentResult {
        export class Outcome {
          public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Outcome>;
          /**
           * Constructs a new instance of the com.stripe.android.StripeIntentResult$Outcome interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
          public static UNKNOWN: number;
          public static TIMEDOUT: number;
          public static FAILED: number;
          public static SUCCEEDED: number;
          public static CANCELED: number;
        }
        export class Status {
          public static class: java.lang.Class<com.stripe.android.StripeIntentResult.Status>;
          /**
           * Constructs a new instance of the com.stripe.android.StripeIntentResult$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
          public static UNKNOWN: number;
          public static TIMEDOUT: number;
          public static FAILED: number;
          public static SUCCEEDED: number;
          public static CANCELED: number;
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
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export abstract class StripeRequest {
        public static class: java.lang.Class<com.stripe.android.StripeRequest>;
      }
      export module StripeRequest {
        export class Method {
          public static class: java.lang.Class<com.stripe.android.StripeRequest.Method>;
          public static GET: com.stripe.android.StripeRequest.Method;
          public static POST: com.stripe.android.StripeRequest.Method;
          public static DELETE: com.stripe.android.StripeRequest.Method;
          public static values(): native.Array<com.stripe.android.StripeRequest.Method>;
          public static valueOf(param0: string): com.stripe.android.StripeRequest.Method;
        }
        export class Parameter {
          public static class: java.lang.Class<com.stripe.android.StripeRequest.Parameter>;
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
        public static emptyIfNull(param0: string): string;
        public static isEmpty(param0: string): boolean;
        public constructor();
        public static removeSpacesAndHyphens(param0: string): string;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class StripeUid {
        public static class: java.lang.Class<com.stripe.android.StripeUid>;
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export class Supplier<T>  extends java.lang.Object {
        public static class: java.lang.Class<com.stripe.android.Supplier<any>>;
        /**
         * Constructs a new instance of the com.stripe.android.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          get(): T;
        });
        public constructor();
        public get(): T;
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
      export class UidSupplier extends com.stripe.android.Supplier<com.stripe.android.StripeUid> {
        public static class: java.lang.Class<com.stripe.android.UidSupplier>;
        public get(): any;
        public get(): com.stripe.android.StripeUid;
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
          public static create(param0: string, param1: java.lang.Exception): com.stripe.android.exception.APIConnectionException;
          public constructor(param0: string, param1: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
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
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
          public constructor(param0: string, param1: string, param2: number, param3: com.stripe.android.StripeError, param4: java.lang.Throwable);
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
          public constructor(param0: string, param1: string, param2: com.stripe.android.StripeError);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
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
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.stripe.android.StripeError);
          public getCode(): string;
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public getCharge(): string;
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
          public getDeclineCode(): string;
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
          public constructor(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.stripe.android.StripeError, param7: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public getErrorDeclineCode(): string;
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
          public getErrorCode(): string;
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
          public constructor(param0: string, param1: string, param2: com.stripe.android.StripeError);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
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
          public constructor(param0: string, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.stripe.android.StripeError, param7: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
          public constructor(param0: string, param1: string, param2: string, param3: com.stripe.android.StripeError);
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
          public getStatusCode(): number;
          public toString(): string;
          public getStripeError(): com.stripe.android.StripeError;
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number, param4: java.lang.Throwable);
          public getRequestId(): string;
          public constructor(param0: com.stripe.android.StripeError, param1: string, param2: string, param3: number);
          public constructor(param0: string, param1: string, param2: number, param3: java.lang.Throwable);
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
        export class Address extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.Address>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.Address>;
          public toMap(): java.util.Map<string,any>;
          public describeContents(): number;
          public getLine1(): string;
          public getCountry(): string;
          public getState(): string;
          public getCity(): string;
          public equals(param0: any): boolean;
          public constructor(param0: globalAndroid.os.Parcel);
          public constructor();
          public getLine2(): string;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public getPostalCode(): string;
          public static fromString(param0: string): com.stripe.android.model.Address;
          public hashCode(): number;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Address;
        }
        export module Address {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Address> {
            public static class: java.lang.Class<com.stripe.android.model.Address.Builder>;
            public setPostalCode(param0: string): com.stripe.android.model.Address.Builder;
            public constructor();
            public setLine2(param0: string): com.stripe.android.model.Address.Builder;
            public setState(param0: string): com.stripe.android.model.Address.Builder;
            public build(): com.stripe.android.model.Address;
            public setCountry(param0: string): com.stripe.android.model.Address.Builder;
            public setCity(param0: string): com.stripe.android.model.Address.Builder;
            public setLine1(param0: string): com.stripe.android.model.Address.Builder;
            public build(): any;
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
            public static COMPANY: string;
            public static INDIVIDUAL: string;
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
        export class Card extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripePaymentSource {
          public static class: java.lang.Class<com.stripe.android.model.Card>;
          public static CVC_LENGTH_AMERICAN_EXPRESS: number;
          public static CVC_LENGTH_COMMON: number;
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
          public getCurrency(): string;
          public static asCardBrand(param0: string): string;
          public static asFundingType(param0: string): string;
          public getCvcCheck(): string;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Card;
          public getAddressCountry(): string;
          public getExpYear(): java.lang.Integer;
          public getAddressLine2(): string;
          public validateExpiryDate(): boolean;
          public validateExpMonth(): boolean;
          public hashCode(): number;
          public getAddressState(): string;
          public getCustomerId(): string;
          public getNumber(): string;
          public toPaymentMethodParamsCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
          public getExpMonth(): java.lang.Integer;
          public getBrand(): string;
          public getAddressLine1Check(): string;
          public static fromString(param0: string): com.stripe.android.model.Card;
          public getAddressLine1(): string;
          public static getBrandIcon(param0: string): number;
          public getAddressZipCheck(): string;
          public getCountry(): string;
          public validateNumber(): boolean;
          public getLast4(): string;
          public equals(param0: any): boolean;
          public getLoggingTokens(): java.util.List<string>;
          public getAddressZip(): string;
          public static create(param0: string, param1: java.lang.Integer, param2: java.lang.Integer, param3: string): com.stripe.android.model.Card;
          public toBuilder(): com.stripe.android.model.Card.Builder;
          public getName(): string;
          public getMetadata(): java.util.Map<string,string>;
          public getCvc(): string;
          public validateCard(): boolean;
        }
        export module Card {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Card> {
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
            public build(): any;
            public funding(param0: string): com.stripe.android.model.Card.Builder;
            public brand(param0: string): com.stripe.android.model.Card.Builder;
            public loggingTokens(param0: java.util.List<string>): com.stripe.android.model.Card.Builder;
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
            public static UNIONPAY: string;
            public static DISCOVER: string;
            public static MASTERCARD: string;
            public static VISA: string;
            public static JCB: string;
            public static UNKNOWN: string;
            public static DINERS_CLUB: string;
            public static AMERICAN_EXPRESS: string;
          }
          export class FundingType {
            public static class: java.lang.Class<com.stripe.android.model.Card.FundingType>;
            /**
             * Constructs a new instance of the com.stripe.android.model.Card$FundingType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static CREDIT: string;
            public static DEBIT: string;
            public static UNKNOWN: string;
            public static PREPAID: string;
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
        export class ConfirmPaymentIntentParams extends com.stripe.android.model.ConfirmStripeIntentParams {
          public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams>;
          public static API_PARAM_SOURCE_DATA: string;
          public static API_PARAM_PAYMENT_METHOD_DATA: string;
          public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithSourceId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithSourceId(param0: string, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
          public getSourceId(): string;
          public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public getClientSecret(): string;
          public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static create(param0: string, param1: string, param2: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithPaymentMethodId(param0: string, param1: string, param2: string, param3: boolean, param4: java.util.Map<string,any>): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static createWithPaymentMethodCreateParams(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
          public hashCode(): number;
          public getPaymentMethodId(): string;
          public static createWithSourceParams(param0: com.stripe.android.model.SourceParams, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
          public getSourceParams(): com.stripe.android.model.SourceParams;
          public static createWithPaymentMethodId(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public toParamMap(): java.util.Map<string,any>;
          public static create(param0: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public equals(param0: any): boolean;
          public static createWithPaymentMethodId(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public static create(param0: string, param1: string): com.stripe.android.model.ConfirmPaymentIntentParams;
          public shouldSavePaymentMethod(): boolean;
          public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
          public getExtraParams(): java.util.Map<string,any>;
          public getReturnUrl(): string;
          public static createWithSourceId(param0: string, param1: string, param2: string, param3: boolean): com.stripe.android.model.ConfirmPaymentIntentParams;
          public shouldUseStripeSdk(): boolean;
          public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
        }
        export module ConfirmPaymentIntentParams {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.ConfirmPaymentIntentParams> {
            public static class: java.lang.Class<com.stripe.android.model.ConfirmPaymentIntentParams.Builder>;
            public build(): com.stripe.android.model.ConfirmPaymentIntentParams;
            public build(): any;
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
        export class ConfirmSetupIntentParams extends com.stripe.android.model.ConfirmStripeIntentParams {
          public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams>;
          public equals(param0: any): boolean;
          public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
          public static create(param0: com.stripe.android.model.PaymentMethodCreateParams, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
          public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmSetupIntentParams;
          public getPaymentMethodCreateParams(): com.stripe.android.model.PaymentMethodCreateParams;
          public shouldUseStripeSdk(): boolean;
          public hashCode(): number;
          public toParamMap(): java.util.Map<string,any>;
          public static create(param0: string, param1: string, param2: string): com.stripe.android.model.ConfirmSetupIntentParams;
          public static create(param0: string, param1: string): com.stripe.android.model.ConfirmSetupIntentParams;
          public getClientSecret(): string;
          public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
        }
        export module ConfirmSetupIntentParams {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.ConfirmSetupIntentParams> {
            public static class: java.lang.Class<com.stripe.android.model.ConfirmSetupIntentParams.Builder>;
            public build(): com.stripe.android.model.ConfirmSetupIntentParams;
            public build(): any;
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
        export class ConfirmStripeIntentParams {
          public static class: java.lang.Class<com.stripe.android.model.ConfirmStripeIntentParams>;
          /**
           * Constructs a new instance of the com.stripe.android.model.ConfirmStripeIntentParams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            toParamMap(): java.util.Map<string,any>;
            getClientSecret(): string;
            shouldUseStripeSdk(): boolean;
            withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
          });
          public constructor();
          public static API_PARAM_CLIENT_SECRET: string;
          public static API_PARAM_PAYMENT_METHOD_DATA: string;
          public static API_PARAM_RETURN_URL: string;
          public static API_PARAM_USE_STRIPE_SDK: string;
          public static API_PARAM_PAYMENT_METHOD_ID: string;
          public shouldUseStripeSdk(): boolean;
          public toParamMap(): java.util.Map<string,any>;
          public getClientSecret(): string;
          public withShouldUseStripeSdk(param0: boolean): com.stripe.android.model.ConfirmStripeIntentParams;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module model {
        export class Customer extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.Customer>;
          public getId(): string;
          public getTotalCount(): java.lang.Integer;
          public toMap(): java.util.Map<string,any>;
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
        export class CustomerSource extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripePaymentSource {
          public static class: java.lang.Class<com.stripe.android.model.CustomerSource>;
          public getStripePaymentSource(): com.stripe.android.model.StripePaymentSource;
          public getTokenizationMethod(): string;
          public equals(param0: any): boolean;
          public getId(): string;
          public getSourceType(): string;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.CustomerSource;
          public toMap(): java.util.Map<string,any>;
          public static fromString(param0: string): com.stripe.android.model.CustomerSource;
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
        export class PaymentIntent extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeIntent {
          public static class: java.lang.Class<com.stripe.android.model.PaymentIntent>;
          public static parseIdFromClientSecret(param0: string): string;
          public getId(): string;
          public requiresConfirmation(): boolean;
          public toMap(): java.util.Map<string,any>;
          public getCurrency(): string;
          public static fromString(param0: string): com.stripe.android.model.PaymentIntent;
          public getClientSecret(): string;
          public getCaptureMethod(): string;
          public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
          public isLiveMode(): boolean;
          public getPaymentMethodTypes(): java.util.List<string>;
          public getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
          public hashCode(): number;
          public getNextAction(): java.util.Map<string,any>;
          public getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
          public getAmount(): java.lang.Long;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentIntent;
          public getCanceledAt(): java.lang.Long;
          public getReceiptEmail(): string;
          public getRedirectUrl(): globalAndroid.net.Uri;
          public getConfirmationMethod(): string;
          public equals(param0: any): boolean;
          public requiresAction(): boolean;
          public getStatus(): com.stripe.android.model.StripeIntent.Status;
          public getCreated(): java.lang.Long;
          public getDescription(): string;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module model {
        export class PaymentMethod extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.PaymentMethod>;
          // These don't map properly in NS. They map to .component1(), etc.
          // public id: string;
          // public created: java.lang.Long;
          // public liveMode: boolean;
          // public type: string;
          // public billingDetails: com.stripe.android.model.PaymentMethod.BillingDetails;
          // public card: com.stripe.android.model.PaymentMethod.Card;
          // public cardPresent: com.stripe.android.model.PaymentMethod.CardPresent;
          // public ideal: com.stripe.android.model.PaymentMethod.Ideal;
          // public customerId: string;
          // public metadata: java.util.Map<string,string>;
          public component1(): string; // id
          public component2(): java.lang.Long; // created
          public component3(): boolean; // liveMode
          public component4(): string; // type
          public component5(): com.stripe.android.model.PaymentMethod.BillingDetails; // billingDetails
          public component6(): string; // customerId
          public component7(): java.util.Map<string,string>; // metadata
          public component8(): com.stripe.android.model.PaymentMethod.Card; // card
          public component9(): com.stripe.android.model.PaymentMethod.CardPresent; // cardPresent
          public component10(): com.stripe.android.model.PaymentMethod.Fpx; // fpx
          public component11(): com.stripe.android.model.PaymentMethod.Ideal; // ideal
          public component12(): com.stripe.android.model.PaymentMethod.SepaDebit; // sepaDebit
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod>;
          public equals(param0: any): boolean;
          public toMap(): java.util.Map<string,any>;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod;
          public isValid(): boolean;
          public describeContents(): number;
          public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          public hashCode(): number;
          public static fromString(param0: string): com.stripe.android.model.PaymentMethod;
        }
        export module PaymentMethod {
          export class BillingDetails extends com.stripe.android.model.StripeModel {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails>;
            public address: com.stripe.android.model.Address;
            public email: string;
            public name: string;
            public phone: string;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.BillingDetails>;
            public describeContents(): number;
            public toMap(): java.util.Map<string,any>;
            public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.BillingDetails;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module BillingDetails {
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.BillingDetails> {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.BillingDetails.Builder>;
              public constructor();
              public build(): com.stripe.android.model.PaymentMethod.BillingDetails;
              public setPhone(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
              public build(): any;
              public setName(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
              public setAddress(param0: com.stripe.android.model.Address): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
              public setEmail(param0: string): com.stripe.android.model.PaymentMethod.BillingDetails.Builder;
            }
          }
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod> {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Builder>;
            public setId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
            public constructor();
            public setCardPresent(param0: com.stripe.android.model.PaymentMethod.CardPresent): com.stripe.android.model.PaymentMethod.Builder;
            public setIdeal(param0: com.stripe.android.model.PaymentMethod.Ideal): com.stripe.android.model.PaymentMethod.Builder;
            public build(): any;
            public setCreated(param0: java.lang.Long): com.stripe.android.model.PaymentMethod.Builder;
            public build(): com.stripe.android.model.PaymentMethod;
            public setMetadata(param0: java.util.Map<string,string>): com.stripe.android.model.PaymentMethod.Builder;
            public setType(param0: string): com.stripe.android.model.PaymentMethod.Builder;
            public setCard(param0: com.stripe.android.model.PaymentMethod.Card): com.stripe.android.model.PaymentMethod.Builder;
            public setCustomerId(param0: string): com.stripe.android.model.PaymentMethod.Builder;
            public setLiveMode(param0: boolean): com.stripe.android.model.PaymentMethod.Builder;
            public setBillingDetails(param0: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethod.Builder;
          }
          export class Card extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card>;
            // These don't map properly in NS. They map to .component1(), etc.
            // public brand: string;
            // public checks: com.stripe.android.model.PaymentMethod.Card.Checks;
            // public country: string;
            // public expiryMonth: java.lang.Integer;
            // public expiryYear: java.lang.Integer;
            // public funding: string;
            // public last4: string;
            // public threeDSecureUsage: com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
            // public wallet: com.stripe.android.model.wallets.Wallet;
            public component1(): string; // brand
            public component2(): com.stripe.android.model.PaymentMethod.Card.Checks; // checks
            public component3(): string; // country
            public component4(): java.lang.Integer; // expiryMonth
            public component5(): java.lang.Integer; // expiryYear
            public component6(): string; // funding
            public component7(): string; // last4
            public component8(): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage; // threeDSecureUsage
            public component9(): com.stripe.android.model.wallets.Wallet; // wallet
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Card>;
            public describeContents(): number;
            public toMap(): java.util.Map<string,any>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card;
            public equals(param0: any): boolean;
            public hashCode(): number;
          }
          export module Card {
            export class Brand {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Brand>;
              /**
               * Constructs a new instance of the com.stripe.android.model.PaymentMethod$Card$Brand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
              });
              public constructor();
              public static UNIONPAY: string;
              public static DISCOVER: string;
              public static MASTERCARD: string;
              public static VISA: string;
              public static JCB: string;
              public static UNKNOWN: string;
              public static DINERS_CLUB: string;
              public static AMERICAN_EXPRESS: string;
            }
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card> {
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
              public build(): any;
              public setBrand(param0: string): com.stripe.android.model.PaymentMethod.Card.Builder;
            }
            export class Checks extends com.stripe.android.model.StripeModel {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks>;
              public addressLine1Check: string;
              public addressPostalCodeCheck: string;
              public cvcCheck: string;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Card.Checks>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public toMap(): java.util.Map<string,any>;
              public equals(param0: any): boolean;
              public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.Checks;
            }
            export module Checks {
              export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card.Checks> {
                public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.Checks.Builder>;
                public setAddressLine1Check(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
                public setAddressPostalCodeCheck(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
                public build(): com.stripe.android.model.PaymentMethod.Card.Checks;
                public build(): any;
                public constructor();
                public setCvcCheck(param0: string): com.stripe.android.model.PaymentMethod.Card.Checks.Builder;
              }
            }
            export class ThreeDSecureUsage extends com.stripe.android.model.StripeModel {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage>;
              public isSupported: boolean;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage>;
              public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public toMap(): java.util.Map<string,any>;
              public equals(param0: any): boolean;
            }
            export module ThreeDSecureUsage {
              export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage> {
                public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Builder>;
                public build(): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage;
                public build(): any;
                public constructor();
                public setSupported(param0: boolean): com.stripe.android.model.PaymentMethod.Card.ThreeDSecureUsage.Builder;
              }
            }
          }
          export class CardPresent extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.CardPresent>;
            public static EMPTY: com.stripe.android.model.PaymentMethod.CardPresent;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.CardPresent>;
            public toMap(): java.util.Map<string,any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
					export class Fpx {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Fpx>;
						public bank: string;
						public accountHolderType: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Fpx>;
						public describeContents(): number;
						public component2(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string): com.stripe.android.model.PaymentMethod.Fpx;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
          export class Ideal extends com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal>;
            public bank: string;
            public bankIdentifierCode: string;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.Ideal>;
            public toMap(): java.util.Map<string,any>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethod.Ideal;
          }
          export module Ideal {
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethod.Ideal> {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Ideal.Builder>;
              public constructor();
              public setBankIdentifierCode(param0: string): com.stripe.android.model.PaymentMethod.Ideal.Builder;
              public setBank(param0: string): com.stripe.android.model.PaymentMethod.Ideal.Builder;
              public build(): any;
              public build(): com.stripe.android.model.PaymentMethod.Ideal;
            }
          }
          export class SepaDebit {
						public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.SepaDebit>;
						public bankCode: string;
						public branchCode: string;
						public country: string;
						public fingerprint: string;
						public last4: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.PaymentMethod.SepaDebit>;
						public component4(): string;
						public component3(): string;
						public describeContents(): number;
						public component5(): string;
						public component2(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.PaymentMethod.SepaDebit;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
						public toString(): string;
					}
        export abstract class PaymentMethodTypeImpl extends com.stripe.android.model.StripeModel {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.PaymentMethodTypeImpl>;
            public type: com.stripe.android.model.PaymentMethod.Type;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
          export class Type {
            public static class: java.lang.Class<com.stripe.android.model.PaymentMethod.Type>;
            public static Card: com.stripe.android.model.PaymentMethod.Type;
            public static CardPresent: com.stripe.android.model.PaymentMethod.Type;
            public static Ideal: com.stripe.android.model.PaymentMethod.Type;
            public code: string;
            public static values(): native.Array<com.stripe.android.model.PaymentMethod.Type>;
            public static valueOf(param0: string): com.stripe.android.model.PaymentMethod.Type;
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
          public equals(param0: any): boolean;
          public getTypeCode(): string;
          public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails): com.stripe.android.model.PaymentMethodCreateParams;
          public static createFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.PaymentMethodCreateParams;
          public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Ideal, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
          public static create(param0: com.stripe.android.model.PaymentMethodCreateParams.Card, param1: com.stripe.android.model.PaymentMethod.BillingDetails, param2: java.util.Map<string,string>): com.stripe.android.model.PaymentMethodCreateParams;
          public hashCode(): number;
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
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Card> {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Card.Builder>;
              public constructor();
              public build(): com.stripe.android.model.PaymentMethodCreateParams.Card;
              public setExpiryMonth(param0: java.lang.Integer): com.stripe.android.model.PaymentMethodCreateParams.Card.Builder;
              public build(): any;
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
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.PaymentMethodCreateParams.Ideal> {
              public static class: java.lang.Class<com.stripe.android.model.PaymentMethodCreateParams.Ideal.Builder>;
              public constructor();
              public build(): any;
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
        export class SetupIntent extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripeIntent {
          public static class: java.lang.Class<com.stripe.android.model.SetupIntent>;
          public static parseIdFromClientSecret(param0: string): string;
          public getId(): string;
          public getUsage(): com.stripe.android.model.StripeIntent.Usage;
          public requiresConfirmation(): boolean;
          public getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
          public toMap(): java.util.Map<string,any>;
          public getCreated(): number;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SetupIntent;
          public static fromString(param0: string): com.stripe.android.model.SetupIntent;
          public getRedirectUrl(): globalAndroid.net.Uri;
          public getClientSecret(): string;
          public equals(param0: any): boolean;
          public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
          public requiresAction(): boolean;
          public getStatus(): com.stripe.android.model.StripeIntent.Status;
          public isLiveMode(): boolean;
          public getPaymentMethodTypes(): java.util.List<string>;
          public getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
          public getDescription(): string;
          public hashCode(): number;
          public getPaymentMethodId(): string;
        }
        export module SetupIntent {
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.SetupIntent> {
            public static class: java.lang.Class<com.stripe.android.model.SetupIntent.Builder>;
            public build(): com.stripe.android.model.SetupIntent;
            public build(): any;
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
        export class ShippingInformation extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.ShippingInformation>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingInformation>;
          public equals(param0: any): boolean;
          public constructor(param0: globalAndroid.os.Parcel);
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.ShippingInformation;
          public constructor();
          public getName(): string;
          public toMap(): java.util.Map<string,any>;
          public constructor(param0: com.stripe.android.model.Address, param1: string, param2: string);
          public describeContents(): number;
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
        export class ShippingMethod extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.ShippingMethod>;
          public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.ShippingMethod>;
          public getLabel(): string;
          public toMap(): java.util.Map<string,any>;
          public describeContents(): number;
          public getIdentifier(): string;
          public constructor(param0: string, param1: string, param2: string, param3: java.util.Currency, param4: string);
          public equals(param0: any): boolean;
          public getAmount(): number;
          public constructor();
          public constructor(param0: string, param1: string, param2: number, param3: string, param4: string);
					public constructor(param0: string, param1: string, param2: number, param3: java.util.Currency);
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
        export class Source extends com.stripe.android.model.StripeModel implements com.stripe.android.model.StripePaymentSource {
          public static class: java.lang.Class<com.stripe.android.model.Source>;
          public getId(): string;
          public getReceiver(): com.stripe.android.model.SourceReceiver;
          public getCurrency(): string;
          public getCodeVerification(): com.stripe.android.model.SourceCodeVerification;
          public getClientSecret(): string;
          public getRedirect(): com.stripe.android.model.SourceRedirect;
          public getOwner(): com.stripe.android.model.SourceOwner;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Source;
          public getFlow(): string;
          public getUsage(): string;
          public getType(): string;
          public hashCode(): number;
          public getSourceTypeModel(): com.stripe.android.model.StripeSourceTypeModel;
          public static fromString(param0: string): com.stripe.android.model.Source;
          public getAmount(): java.lang.Long;
          public getMetaData(): java.util.Map<string,string>;
          public getStatus(): string;
          public getSourceTypeData(): java.util.Map<string,any>;
          public getTypeRaw(): string;
          public equals(param0: any): boolean;
          public getCreated(): java.lang.Long;
          public isLiveMode(): java.lang.Boolean;
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
            public static CODE_VERIFICATION: string;
            public static NONE: string;
            public static REDIRECT: string;
            public static RECEIVER: string;
          }
          export class SourceStatus {
            public static class: java.lang.Class<com.stripe.android.model.Source.SourceStatus>;
            /**
             * Constructs a new instance of the com.stripe.android.model.Source$SourceStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static FAILED: string;
            public static CANCELED: string;
            public static CONSUMED: string;
            public static CHARGEABLE: string;
            public static PENDING: string;
          }
          export class SourceType {
            public static class: java.lang.Class<com.stripe.android.model.Source.SourceType>;
            /**
             * Constructs a new instance of the com.stripe.android.model.Source$SourceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static IDEAL: string;
            public static P24: string;
            public static MULTIBANCO: string;
            public static ALIPAY: string;
            public static THREE_D_SECURE: string;
            public static EPS: string;
            public static SOFORT: string;
            public static UNKNOWN: string;
            public static GIROPAY: string;
            public static BANCONTACT: string;
            public static CARD: string;
            public static SEPA_DEBIT: string;
          }
          export class Usage {
            public static class: java.lang.Class<com.stripe.android.model.Source.Usage>;
            /**
             * Constructs a new instance of the com.stripe.android.model.Source$Usage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static REUSABLE: string;
            public static SINGLE_USE: string;
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
          public getExpiryMonth(): java.lang.Integer;
          public getFunding(): string;
          public getAddressLine1Check(): string;
          public getBrand(): string;
          public toMap(): java.util.Map<string,any>;
          public getDynamicLast4(): string;
          public getAddressZipCheck(): string;
          public getCountry(): string;
          public getThreeDSecureStatus(): string;
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
            public static NOT_SUPPORTED: string;
            public static OPTIONAL: string;
            public static RECOMMENDED: string;
            public static REQUIRED: string;
            public static UNKNOWN: string;
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
        export class SourceCodeVerification extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.SourceCodeVerification>;
          public equals(param0: any): boolean;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceCodeVerification;
          public getAttemptsRemaining(): number;
          public toMap(): java.util.Map<string,any>;
          public static fromString(param0: string): com.stripe.android.model.SourceCodeVerification;
          public getStatus(): string;
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
        export class SourceOwner extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.SourceOwner>;
          public toMap(): java.util.Map<string,any>;
          public getVerifiedAddress(): com.stripe.android.model.Address;
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
          public hashCode(): number;
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
          public setApiParameterMap(param0: java.util.Map<string,any>): com.stripe.android.model.SourceParams;
          public static createRetrieveSourceParams(param0: string): java.util.Map<string,string>;
          public equals(param0: any): boolean;
          public static createAlipaySingleUseParams(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
          public static createP24Params(param0: number, param1: string, param2: string, param3: string, param4: string): com.stripe.android.model.SourceParams;
          public setReturnUrl(param0: string): com.stripe.android.model.SourceParams;
          public static createCardParamsFromGooglePay(param0: org.json.JSONObject): com.stripe.android.model.SourceParams;
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
        export class SourceReceiver extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.SourceReceiver>;
          public getAddress(): string;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceReceiver;
          public equals(param0: any): boolean;
          public toMap(): java.util.Map<string,any>;
          public getAmountCharged(): number;
          public hashCode(): number;
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
        export class SourceRedirect extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.SourceRedirect>;
          public equals(param0: any): boolean;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.SourceRedirect;
          public static fromString(param0: string): com.stripe.android.model.SourceRedirect;
          public getUrl(): string;
          public toMap(): java.util.Map<string,any>;
          public getReturnUrl(): string;
          public getStatus(): string;
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
        export class Stripe3ds2AuthResult {
          public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult>;
          public id: string;
          public objectType: string;
          public ares: com.stripe.android.model.Stripe3ds2AuthResult.Ares;
          public created: java.lang.Long;
          public source: string;
          public state: string;
          public liveMode: boolean;
          public error: com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
          public fallbackRedirectUrl: string;
          public equals(param0: any): boolean;
          public static fromJson(param0: org.json.JSONObject): com.stripe.android.model.Stripe3ds2AuthResult;
          public hashCode(): number;
        }
        export module Stripe3ds2AuthResult {
          export class Ares {
            public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares>;
            public threeDSServerTransId: string;
            public acsChallengeMandated: string;
            public acsSignedContent: string;
            public acsTransId: string;
            public acsUrl: string;
            public authenticationType: string;
            public cardholderInfo: string;
            public messageExtension: java.util.List<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
            public messageType: string;
            public messageVersion: string;
            public sdkTransId: string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public shouldChallenge(): boolean;
          }
          export module Ares {
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult.Ares> {
              public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Ares.Builder>;
              public build(): any;
              public build(): com.stripe.android.model.Stripe3ds2AuthResult.Ares;
            }
          }
          export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult> {
            public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.Builder>;
            public build(): com.stripe.android.model.Stripe3ds2AuthResult;
            public build(): any;
          }
          export class MessageExtension {
            public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension>;
            public name: string;
            public criticalityIndicator: boolean;
            public id: string;
            public data: java.util.Map<string,string>;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module MessageExtension {
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension> {
              public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension.Builder>;
              public build(): com.stripe.android.model.Stripe3ds2AuthResult.MessageExtension;
              public build(): any;
            }
          }
          export class ThreeDS2Error {
            public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error>;
            public threeDSServerTransId: string;
            public acsTransId: string;
            public dsTransId: string;
            public errorCode: string;
            public errorComponent: string;
            public errorDescription: string;
            public errorDetail: string;
            public errorMessageType: string;
            public messageType: string;
            public messageVersion: string;
            public sdkTransId: string;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module ThreeDS2Error {
            export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error> {
              public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error.Builder>;
              public build(): any;
              public build(): com.stripe.android.model.Stripe3ds2AuthResult.ThreeDS2Error;
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
        export class Stripe3ds2Fingerprint {
          public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint>;
          public source: string;
          public directoryServer: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
          public serverTransactionId: string;
          public directoryServerEncryption: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption;
          public static create(param0: com.stripe.android.model.StripeIntent.SdkData): com.stripe.android.model.Stripe3ds2Fingerprint;
        }
        export module Stripe3ds2Fingerprint {
          export class DirectoryServer {
            public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer>;
            public static Visa: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
            public static Mastercard: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
            public static Amex: com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
            public name: string;
            public id: string;
            public static valueOf(param0: string): com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer;
            public static values(): native.Array<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServer>;
          }
          export class DirectoryServerEncryption {
            public static class: java.lang.Class<com.stripe.android.model.Stripe3ds2Fingerprint.DirectoryServerEncryption>;
            public directoryServerId: string;
            public directoryServerPublicKey: java.security.PublicKey;
            public rootCerts: java.util.List<java.security.cert.X509Certificate>;
            public keyId: string;
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
        export class Stripe3dsRedirect {
          public static class: java.lang.Class<com.stripe.android.model.Stripe3dsRedirect>;
          public getUrl(): string;
          public static create(param0: com.stripe.android.model.StripeIntent.SdkData): com.stripe.android.model.Stripe3dsRedirect;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module model {
        export class StripeIntent {
          public static class: java.lang.Class<com.stripe.android.model.StripeIntent>;
          /**
           * Constructs a new instance of the com.stripe.android.model.StripeIntent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getId(): string;
            isLiveMode(): boolean;
            requiresAction(): boolean;
            requiresConfirmation(): boolean;
            getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
            getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
            getClientSecret(): string;
            getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
            getStatus(): com.stripe.android.model.StripeIntent.Status;
          });
          public constructor();
          public getNextActionType(): com.stripe.android.model.StripeIntent.NextActionType;
          public getId(): string;
          public requiresAction(): boolean;
          public isLiveMode(): boolean;
          public requiresConfirmation(): boolean;
          public getStripeSdkData(): com.stripe.android.model.StripeIntent.SdkData;
          public getRedirectData(): com.stripe.android.model.StripeIntent.RedirectData;
          public getClientSecret(): string;
        }
        export module StripeIntent {
          export class NextActionType {
            public static class: java.lang.Class<com.stripe.android.model.StripeIntent.NextActionType>;
            public static RedirectToUrl: com.stripe.android.model.StripeIntent.NextActionType;
            public static UseStripeSdk: com.stripe.android.model.StripeIntent.NextActionType;
            public code: string;
            public static values(): native.Array<com.stripe.android.model.StripeIntent.NextActionType>;
            public static valueOf(param0: string): com.stripe.android.model.StripeIntent.NextActionType;
            public static fromCode(param0: string): com.stripe.android.model.StripeIntent.NextActionType;
            public toString(): string;
          }
          export class RedirectData {
            public static class: java.lang.Class<com.stripe.android.model.StripeIntent.RedirectData>;
            public url: globalAndroid.net.Uri;
            public returnUrl: string;
          }
          export class SdkData {
            public static class: java.lang.Class<com.stripe.android.model.StripeIntent.SdkData>;
            public is3ds1(): boolean;
            public is3ds2(): boolean;
          }
          export class Status {
            public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Status>;
            public static Canceled: com.stripe.android.model.StripeIntent.Status;
            public static Processing: com.stripe.android.model.StripeIntent.Status;
            public static RequiresAction: com.stripe.android.model.StripeIntent.Status;
            public static RequiresConfirmation: com.stripe.android.model.StripeIntent.Status;
            public static RequiresPaymentMethod: com.stripe.android.model.StripeIntent.Status;
            public static Succeeded: com.stripe.android.model.StripeIntent.Status;
            public static RequiresCapture: com.stripe.android.model.StripeIntent.Status;
            public code: string;
            public static valueOf(param0: string): com.stripe.android.model.StripeIntent.Status;
            public static values(): native.Array<com.stripe.android.model.StripeIntent.Status>;
            public static fromCode(param0: string): com.stripe.android.model.StripeIntent.Status;
            public toString(): string;
          }
          export class Usage {
            public static class: java.lang.Class<com.stripe.android.model.StripeIntent.Usage>;
            public static OnSession: com.stripe.android.model.StripeIntent.Usage;
            public static OffSession: com.stripe.android.model.StripeIntent.Usage;
            public static OneTime: com.stripe.android.model.StripeIntent.Usage;
            public code: string;
            public static valueOf(param0: string): com.stripe.android.model.StripeIntent.Usage;
            public static values(): native.Array<com.stripe.android.model.StripeIntent.Usage>;
            public static fromCode(param0: string): com.stripe.android.model.StripeIntent.Usage;
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
        export abstract class StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.StripeModel>;
          public equals(param0: any): boolean;
          public constructor();
          public toMap(): java.util.Map<string,any>;
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
        export abstract class StripeSourceTypeModel extends com.stripe.android.model.StripeModel {
          public static class: java.lang.Class<com.stripe.android.model.StripeSourceTypeModel>;
          public equals(param0: any): boolean;
          public toMap(): java.util.Map<string,any>;
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
            public static PII: string;
            public static BANK_ACCOUNT: string;
            public static ACCOUNT: string;
            public static CARD: string;
            public static CVC_UPDATE: string;
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
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.AmexExpressCheckoutWallet>;
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
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.ApplePayWallet>;
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
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.GooglePayWallet>;
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
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.MasterpassWallet>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.SamsungPayWallet>;
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
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.VisaCheckoutWallet>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
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
          export abstract class Wallet extends com.stripe.android.model.StripeModel {
            public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet>;
            public describeContents(): number;
            public toMap(): java.util.Map<string,any>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module Wallet {
            export class Address extends com.stripe.android.model.StripeModel {
              public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Address>;
              public city: string;
              public country: string;
              public line1: string;
              public line2: string;
              public postalCode: string;
              public state: string;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.model.wallets.Wallet.Address>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public toMap(): java.util.Map<string,any>;
              public equals(param0: any): boolean;
            }
            export module Address {
              export class Builder extends com.stripe.android.ObjectBuilder<com.stripe.android.model.wallets.Wallet.Address> {
                public static class: java.lang.Class<com.stripe.android.model.wallets.Wallet.Address.Builder>;
                public setLine1(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
                public setPostalCode(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
                public setCountry(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
                public setLine2(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
                public setState(param0: string): com.stripe.android.model.wallets.Wallet.Address.Builder;
                public build(): any;
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
        export class ObjectUtils {
          public static class: java.lang.Class<com.stripe.android.utils.ObjectUtils>;
          public static hash(param0: native.Array<any>): number;
          public constructor();
          public static getOrDefault(param0: any, param1: any): any;
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
        export abstract class ActivityStarter<T>  extends java.lang.Object {
          public static class: java.lang.Class<com.stripe.android.view.ActivityStarter<any>>;
          public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<T>);
          public startForResult(param0: number): void;
          public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<T>);
          public startForResult(param0: number, param1: globalAndroid.os.Bundle): void;
          public newIntent(): globalAndroid.content.Intent;
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module view {
        export class AddPaymentMethodActivity extends com.stripe.android.view.StripeActivity {
          public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity>;
          public static TOKEN_ADD_PAYMENT_METHOD_ACTIVITY: string;
          public onActionSave(): void;
          public setCommunicatingProgress(param0: boolean): void;
          public onCreate(param0: globalAndroid.os.Bundle): void;
          public constructor();
          public static newIntent(param0: globalAndroid.content.Context, param1: boolean, param2: boolean): globalAndroid.content.Intent;
        }
        export module AddPaymentMethodActivity {
          export abstract class ActivityPaymentMethodCallback<A>  extends com.stripe.android.ApiResultCallback<com.stripe.android.model.PaymentMethod> {
            public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.ActivityPaymentMethodCallback<any>>;
            public onSuccess(param0: any): void;
            public onError(param0: java.lang.Exception): void;
            public getActivity(): any;
          }
          export class OnEditorActionListenerImpl {
            public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.OnEditorActionListenerImpl>;
            public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
          }
          export class PaymentMethodCallbackImpl extends com.stripe.android.view.AddPaymentMethodActivity.ActivityPaymentMethodCallback<com.stripe.android.view.AddPaymentMethodActivity> {
            public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.PaymentMethodCallbackImpl>;
            public onSuccess(param0: any): void;
            public onError(param0: java.lang.Exception): void;
            public onSuccess(param0: com.stripe.android.model.PaymentMethod): void;
          }
          export class PaymentMethodRetrievalListenerImpl extends com.stripe.android.CustomerSession.ActivityPaymentMethodRetrievalListener<com.stripe.android.view.AddPaymentMethodActivity> {
            public static class: java.lang.Class<com.stripe.android.view.AddPaymentMethodActivity.PaymentMethodRetrievalListenerImpl>;
            public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
            public onPaymentMethodRetrieved(param0: com.stripe.android.model.PaymentMethod): void;
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
        export class AuthActivityStarter<StartDataType>  extends java.lang.Object {
          public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter<any>>;
          /**
           * Constructs a new instance of the com.stripe.android.view.AuthActivityStarter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            start(param0: StartDataType): void;
          });
          public constructor();
          public start(param0: StartDataType): void;
        }
        export module AuthActivityStarter {
          export class Host {
            public static class: java.lang.Class<com.stripe.android.view.AuthActivityStarter.Host>;
            public getActivity(): globalAndroid.app.Activity;
            public static create(param0: androidx.fragment.app.Fragment): com.stripe.android.view.AuthActivityStarter.Host;
            public startActivityForResult(param0: java.lang.Class<any>, param1: globalAndroid.os.Bundle, param2: number): void;
            public static create(param0: globalAndroid.app.Activity): com.stripe.android.view.AuthActivityStarter.Host;
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
        export class CardInputWidget implements com.stripe.android.view.CardWidget {
          public static class: java.lang.Class<com.stripe.android.view.CardInputWidget>;
          public setEnabled(param0: boolean): void;
          public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
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
          public getCardBuilder(): com.stripe.android.model.Card.Builder;
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
        export class CardMultilineWidget implements com.stripe.android.view.CardWidget {
          public static class: java.lang.Class<com.stripe.android.view.CardMultilineWidget>;
          public setEnabled(param0: boolean): void;
          public getPaymentMethodCard(): com.stripe.android.model.PaymentMethodCreateParams.Card;
          public setCvcLabel(param0: string): void;
          public setCardNumber(param0: string): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public getPaymentMethodBillingDetails(): com.stripe.android.model.PaymentMethod.BillingDetails;
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
          public getCardBuilder(): com.stripe.android.model.Card.Builder;
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
        export class CardWidget {
          public static class: java.lang.Class<com.stripe.android.view.CardWidget>;
          /**
           * Constructs a new instance of the com.stripe.android.view.CardWidget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getCard(): com.stripe.android.model.Card;
            getCardBuilder(): com.stripe.android.model.Card.Builder;
          });
          public constructor();
          public getCard(): com.stripe.android.model.Card;
          public getCardBuilder(): com.stripe.android.model.Card.Builder;
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
        export class PaymentAuthWebView {
          public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        }
        export module PaymentAuthWebView {
          export class PaymentAuthWebViewClient {
            public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebView.PaymentAuthWebViewClient>;
            public onPageCommitVisible(param0: globalAndroid.webkit.WebView, param1: string): void;
            public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
            public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
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
        export class PaymentAuthWebViewActivity {
          public static class: java.lang.Class<com.stripe.android.view.PaymentAuthWebViewActivity>;
          public onCreate(param0: globalAndroid.os.Bundle): void;
          public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
          public constructor();
          public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
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
          public static TOKEN_PAYMENT_FLOW_ACTIVITY: string;
          public static TOKEN_SHIPPING_INFO_SCREEN: string;
          public static TOKEN_SHIPPING_METHOD_SCREEN: string;
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
          public static TOKEN_PAYMENT_METHODS_ACTIVITY: string;
          public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
          public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
          public onCreate(param0: globalAndroid.os.Bundle): void;
          public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
          public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
          public constructor();
          public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
        }
        export module PaymentMethodsActivity {
          export class GetPaymentMethodsRetrievalListener extends com.stripe.android.CustomerSession.ActivityPaymentMethodsRetrievalListener<com.stripe.android.view.PaymentMethodsActivity> {
            public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivity.GetPaymentMethodsRetrievalListener>;
            public onPaymentMethodsRetrieved(param0: java.util.List<com.stripe.android.model.PaymentMethod>): void;
            public onError(param0: number, param1: string, param2: com.stripe.android.StripeError): void;
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
        export class PaymentMethodsActivityStarter extends com.stripe.android.view.ActivityStarter<com.stripe.android.view.PaymentMethodsActivity> {
          public static class: java.lang.Class<com.stripe.android.view.PaymentMethodsActivityStarter>;
          public constructor(param0: globalAndroid.app.Activity, param1: java.lang.Class<any>);
          public constructor(param0: androidx.fragment.app.Fragment, param1: java.lang.Class<any>);
          public constructor(param0: androidx.fragment.app.Fragment);
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
        export class PaymentRelayActivity {
          public static class: java.lang.Class<com.stripe.android.view.PaymentRelayActivity>;
          public onCreate(param0: globalAndroid.os.Bundle): void;
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
            public static CITY_FIELD: string;
            public static STATE_FIELD: string;
            public static PHONE_FIELD: string;
            public static ADDRESS_LINE_TWO_FIELD: string;
            public static ADDRESS_LINE_ONE_FIELD: string;
            public static POSTAL_CODE_FIELD: string;
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
        export class StripeIntentResultExtras {
          public static class: java.lang.Class<com.stripe.android.view.StripeIntentResultExtras>;
          public static CLIENT_SECRET: string;
          public static AUTH_EXCEPTION: string;
          public static FLOW_OUTCOME: string;
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
//com.stripe.android.ApiOperation:1
//com.stripe.android.ApiResultCallback:1
//com.stripe.android.CustomerSession.ActivityCustomerRetrievalListener:1
//com.stripe.android.CustomerSession.ActivityPaymentMethodRetrievalListener:1
//com.stripe.android.CustomerSession.ActivityPaymentMethodsRetrievalListener:1
//com.stripe.android.CustomerSession.ActivitySourceRetrievalListener:1
//com.stripe.android.CustomerSession.CustomerSessionRunnable:1
//com.stripe.android.CustomerSession.CustomerSessionRunnable.MessageData:1
//com.stripe.android.EphemeralKey.Factory:1
//com.stripe.android.EphemeralKeyManager:1
//com.stripe.android.EphemeralKeyManager.KeyManagerListener:1
//com.stripe.android.Factory0:1
//com.stripe.android.ObjectBuilder:1
//com.stripe.android.PaymentSession.ActivityPaymentSessionListener:1
//com.stripe.android.ResultWrapper:1
//com.stripe.android.StripeIntentResult:1
//com.stripe.android.Supplier:1
//com.stripe.android.model.wallets.Wallet.Builder:1
//com.stripe.android.view.ActivityStarter:1
//com.stripe.android.view.AddPaymentMethodActivity.ActivityPaymentMethodCallback:1
//com.stripe.android.view.AuthActivityStarter:1


declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module exceptions {
          export class InvalidInputException {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.exceptions.InvalidInputException>;
            public constructor(param0: java.lang.RuntimeException);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module exceptions {
          export class SDKAlreadyInitializedException {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.exceptions.SDKAlreadyInitializedException>;
            public constructor(param0: java.lang.RuntimeException);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module exceptions {
          export class SDKNotInitializedException {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.exceptions.SDKNotInitializedException>;
            public constructor(param0: java.lang.RuntimeException);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module exceptions {
          export class SDKRuntimeException {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.exceptions.SDKRuntimeException>;
            public static create(param0: java.lang.Exception): com.stripe.android.stripe3ds2.exceptions.SDKRuntimeException;
            public constructor(param0: java.lang.RuntimeException);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module init {
          export class ConfigParameters {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ConfigParameters>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ConfigParameters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              addParam(param0: string, param1: string, param2: string): void;
              getParamValue(param0: string, param1: string): string;
              removeParam(param0: string, param1: string): string;
            });
            public constructor();
            public addParam(param0: string, param1: string, param2: string): void;
            public removeParam(param0: string, param1: string): string;
            public getParamValue(param0: string, param1: string): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module init {
          export class StripeConfigParameters extends com.stripe.android.stripe3ds2.init.ConfigParameters {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.StripeConfigParameters>;
            public constructor();
            public addParam(param0: string, param1: string, param2: string): void;
            public removeParam(param0: string, param1: string): string;
            public getParamValue(param0: string, param1: string): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module init {
          export class Warning {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.Warning>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.init.Warning interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getID(): string;
              getMessage(): string;
              getSeverity(): com.stripe.android.stripe3ds2.init.Warning.Severity;
            });
            public constructor();
            public getMessage(): string;
            public getID(): string;
            public getSeverity(): com.stripe.android.stripe3ds2.init.Warning.Severity;
          }
          export module Warning {
            export class Severity {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.Warning.Severity>;
              public static LOW: com.stripe.android.stripe3ds2.init.Warning.Severity;
              public static MEDIUM: com.stripe.android.stripe3ds2.init.Warning.Severity;
              public static HIGH: com.stripe.android.stripe3ds2.init.Warning.Severity;
              public static values(): native.Array<com.stripe.android.stripe3ds2.init.Warning.Severity>;
              public static valueOf(param0: string): com.stripe.android.stripe3ds2.init.Warning.Severity;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export abstract class BaseCustomization extends com.stripe.android.stripe3ds2.init.ui.Customization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.BaseCustomization>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public getTextColor(): string;
              public getTextFontSize(): number;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class ButtonCustomization extends com.stripe.android.stripe3ds2.init.ui.Customization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.ButtonCustomization>;
              /**
               * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ui.ButtonCustomization interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setBackgroundColor(param0: string): void;
                setCornerRadius(param0: number): void;
                getBackgroundColor(): string;
                getCornerRadius(): number;
                setTextFontName(param0: string): void;
                setTextColor(param0: string): void;
                setTextFontSize(param0: number): void;
                getTextFontName(): string;
                getTextColor(): string;
                getTextFontSize(): number;
              });
              public constructor();
              public getBackgroundColor(): string;
              public setBackgroundColor(param0: string): void;
              public getCornerRadius(): number;
              public setCornerRadius(param0: number): void;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public getTextColor(): string;
              public getTextFontSize(): number;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class Customization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.Customization>;
              /**
               * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ui.Customization interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setTextFontName(param0: string): void;
                setTextColor(param0: string): void;
                setTextFontSize(param0: number): void;
                getTextFontName(): string;
                getTextColor(): string;
                getTextFontSize(): number;
              });
              public constructor();
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public getTextColor(): string;
              public getTextFontSize(): number;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class LabelCustomization extends com.stripe.android.stripe3ds2.init.ui.Customization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.LabelCustomization>;
              /**
               * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ui.LabelCustomization interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setHeadingTextColor(param0: string): void;
                setHeadingTextFontName(param0: string): void;
                setHeadingTextFontSize(param0: number): void;
                getHeadingTextColor(): string;
                getHeadingTextFontName(): string;
                getHeadingTextFontSize(): number;
                setTextFontName(param0: string): void;
                setTextColor(param0: string): void;
                setTextFontSize(param0: number): void;
                getTextFontName(): string;
                getTextColor(): string;
                getTextFontSize(): number;
              });
              public constructor();
              public setHeadingTextColor(param0: string): void;
              public getHeadingTextFontSize(): number;
              public getHeadingTextColor(): string;
              public setTextFontName(param0: string): void;
              public getHeadingTextFontName(): string;
              public getTextFontName(): string;
              public setHeadingTextFontSize(param0: number): void;
              public getTextColor(): string;
              public setHeadingTextFontName(param0: string): void;
              public getTextFontSize(): number;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class StripeButtonCustomization extends com.stripe.android.stripe3ds2.init.ui.BaseCustomization implements com.stripe.android.stripe3ds2.init.ui.ButtonCustomization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.StripeButtonCustomization>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.init.ui.StripeButtonCustomization>;
              public constructor();
              public getBackgroundColor(): string;
              public setBackgroundColor(param0: string): void;
              public setCornerRadius(param0: number): void;
              public hashCode(): number;
              public getTextColor(): string;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
              public getCornerRadius(): number;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public equals(param0: any): boolean;
              public getTextFontSize(): number;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class StripeLabelCustomization extends com.stripe.android.stripe3ds2.init.ui.BaseCustomization implements com.stripe.android.stripe3ds2.init.ui.LabelCustomization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.StripeLabelCustomization>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.init.ui.StripeLabelCustomization>;
              public constructor();
              public setHeadingTextColor(param0: string): void;
              public getHeadingTextFontSize(): number;
              public hashCode(): number;
              public getHeadingTextFontName(): string;
              public setHeadingTextFontSize(param0: number): void;
              public getTextColor(): string;
              public setHeadingTextFontName(param0: string): void;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getHeadingTextColor(): string;
              public describeContents(): number;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public equals(param0: any): boolean;
              public getTextFontSize(): number;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class StripeTextBoxCustomization extends com.stripe.android.stripe3ds2.init.ui.BaseCustomization implements com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.StripeTextBoxCustomization>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.init.ui.StripeTextBoxCustomization>;
              public constructor();
              public getBorderWidth(): number;
              public setCornerRadius(param0: number): void;
              public hashCode(): number;
              public getBorderColor(): string;
              public getTextColor(): string;
              public setBorderColor(param0: string): void;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
              public getCornerRadius(): number;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public equals(param0: any): boolean;
              public setBorderWidth(param0: number): void;
              public getTextFontSize(): number;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class StripeToolbarCustomization extends com.stripe.android.stripe3ds2.init.ui.BaseCustomization implements com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.init.ui.StripeToolbarCustomization>;
              public constructor();
              public getBackgroundColor(): string;
              public setBackgroundColor(param0: string): void;
              public setHeaderText(param0: string): void;
              public hashCode(): number;
              public getTextColor(): string;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public setButtonText(param0: string): void;
              public describeContents(): number;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public getHeaderText(): string;
              public getButtonText(): string;
              public equals(param0: any): boolean;
              public getTextFontSize(): number;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class StripeUiCustomization extends com.stripe.android.stripe3ds2.init.ui.UiCustomization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization>;
              public constructor();
              public hashCode(): number;
              public setLabelCustomization(param0: com.stripe.android.stripe3ds2.init.ui.LabelCustomization): void;
              public getLabelCustomization(): com.stripe.android.stripe3ds2.init.ui.LabelCustomization;
              public setButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization, param1: string): void;
              public getButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
              public getButtonCustomization(param0: string): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
              public setTextBoxCustomization(param0: com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization): void;
              public static createWithAppTheme(param0: globalAndroid.app.Activity): com.stripe.android.stripe3ds2.init.ui.StripeUiCustomization;
              public setToolbarCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization): void;
              public setButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization, param1: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType): void;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public getToolbarCustomization(): com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization;
              public getTextBoxCustomization(): com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization;
              public equals(param0: any): boolean;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class TextBoxCustomization extends com.stripe.android.stripe3ds2.init.ui.Customization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization>;
              /**
               * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setBorderWidth(param0: number): void;
                getBorderWidth(): number;
                setBorderColor(param0: string): void;
                getBorderColor(): string;
                setCornerRadius(param0: number): void;
                getCornerRadius(): number;
                setTextFontName(param0: string): void;
                setTextColor(param0: string): void;
                setTextFontSize(param0: number): void;
                getTextFontName(): string;
                getTextColor(): string;
                getTextFontSize(): number;
              });
              public constructor();
              public getBorderWidth(): number;
              public getCornerRadius(): number;
              public setCornerRadius(param0: number): void;
              public setTextFontName(param0: string): void;
              public getBorderColor(): string;
              public getTextFontName(): string;
              public getTextColor(): string;
              public setBorderWidth(param0: number): void;
              public setBorderColor(param0: string): void;
              public getTextFontSize(): number;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class ToolbarCustomization extends com.stripe.android.stripe3ds2.init.ui.Customization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization>;
              /**
               * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setBackgroundColor(param0: string): void;
                setHeaderText(param0: string): void;
                setButtonText(param0: string): void;
                getBackgroundColor(): string;
                getHeaderText(): string;
                getButtonText(): string;
                setTextFontName(param0: string): void;
                setTextColor(param0: string): void;
                setTextFontSize(param0: number): void;
                getTextFontName(): string;
                getTextColor(): string;
                getTextFontSize(): number;
              });
              public constructor();
              public getBackgroundColor(): string;
              public setBackgroundColor(param0: string): void;
              public setHeaderText(param0: string): void;
              public setButtonText(param0: string): void;
              public setTextFontName(param0: string): void;
              public getTextFontName(): string;
              public getHeaderText(): string;
              public getButtonText(): string;
              public getTextColor(): string;
              public getTextFontSize(): number;
              public setTextColor(param0: string): void;
              public setTextFontSize(param0: number): void;
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
      export module stripe3ds2 {
        export module init {
          export module ui {
            export class UiCustomization {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.UiCustomization>;
              /**
               * Constructs a new instance of the com.stripe.android.stripe3ds2.init.ui.UiCustomization interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                setButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization, param1: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType): void;
                setButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization, param1: string): void;
                setToolbarCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization): void;
                setLabelCustomization(param0: com.stripe.android.stripe3ds2.init.ui.LabelCustomization): void;
                setTextBoxCustomization(param0: com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization): void;
                getButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
                getButtonCustomization(param0: string): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
                getToolbarCustomization(): com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization;
                getLabelCustomization(): com.stripe.android.stripe3ds2.init.ui.LabelCustomization;
                getTextBoxCustomization(): com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization;
              });
              public constructor();
              public setToolbarCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization): void;
              public setButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization, param1: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType): void;
              public setLabelCustomization(param0: com.stripe.android.stripe3ds2.init.ui.LabelCustomization): void;
              public getLabelCustomization(): com.stripe.android.stripe3ds2.init.ui.LabelCustomization;
              public setButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.ButtonCustomization, param1: string): void;
              public getButtonCustomization(param0: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
              public getButtonCustomization(param0: string): com.stripe.android.stripe3ds2.init.ui.ButtonCustomization;
              public getToolbarCustomization(): com.stripe.android.stripe3ds2.init.ui.ToolbarCustomization;
              public getTextBoxCustomization(): com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization;
              public setTextBoxCustomization(param0: com.stripe.android.stripe3ds2.init.ui.TextBoxCustomization): void;
            }
            export module UiCustomization {
              export class ButtonType {
                public static class: java.lang.Class<com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType>;
                public static SUBMIT: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static CONTINUE: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static NEXT: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static CANCEL: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static RESEND: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static SELECT: com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static valueOf(param0: string): com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType;
                public static values(): native.Array<com.stripe.android.stripe3ds2.init.ui.UiCustomization.ButtonType>;
              }
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
      export module stripe3ds2 {
        export module service {
          export class StripeThreeDs2Service extends com.stripe.android.stripe3ds2.service.ThreeDS2Service {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.service.StripeThreeDs2Service>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.service.StripeThreeDs2Service interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              createTransaction(param0: string, param1: string, param2: boolean, param3: string): com.stripe.android.stripe3ds2.transaction.Transaction;
              createTransaction(param0: string, param1: string, param2: boolean, param3: string, param4: java.util.List<java.security.cert.X509Certificate>, param5: java.security.PublicKey, param6: string): com.stripe.android.stripe3ds2.transaction.Transaction;
              initialize(param0: globalAndroid.content.Context, param1: com.stripe.android.stripe3ds2.init.ConfigParameters, param2: string, param3: com.stripe.android.stripe3ds2.init.ui.UiCustomization): void;
              createTransaction(param0: string, param1: string): com.stripe.android.stripe3ds2.transaction.Transaction;
              cleanup(param0: globalAndroid.content.Context): void;
              getSDKVersion(): string;
              getWarnings(): java.util.List<com.stripe.android.stripe3ds2.init.Warning>;
            });
            public constructor();
            public cleanup(param0: globalAndroid.content.Context): void;
            public createTransaction(param0: string, param1: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public createTransaction(param0: string, param1: string, param2: boolean, param3: string, param4: java.util.List<java.security.cert.X509Certificate>, param5: java.security.PublicKey, param6: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public getWarnings(): java.util.List<com.stripe.android.stripe3ds2.init.Warning>;
            public createTransaction(param0: string, param1: string, param2: boolean, param3: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public getSDKVersion(): string;
            public initialize(param0: globalAndroid.content.Context, param1: com.stripe.android.stripe3ds2.init.ConfigParameters, param2: string, param3: com.stripe.android.stripe3ds2.init.ui.UiCustomization): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module service {
          export class StripeThreeDs2ServiceImpl extends com.stripe.android.stripe3ds2.service.StripeThreeDs2Service {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.service.StripeThreeDs2ServiceImpl>;
            public cleanup(param0: globalAndroid.content.Context): void;
            public constructor(param0: globalAndroid.content.Context);
            public createTransaction(param0: string, param1: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public createTransaction(param0: string, param1: string, param2: boolean, param3: string, param4: java.util.List<java.security.cert.X509Certificate>, param5: java.security.PublicKey, param6: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public getWarnings(): java.util.List<com.stripe.android.stripe3ds2.init.Warning>;
            public constructor(param0: globalAndroid.content.Context, param1: javax.net.ssl.SSLSocketFactory);
            public createTransaction(param0: string, param1: string, param2: boolean, param3: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public getSDKVersion(): string;
            public initialize(param0: globalAndroid.content.Context, param1: com.stripe.android.stripe3ds2.init.ConfigParameters, param2: string, param3: com.stripe.android.stripe3ds2.init.ui.UiCustomization): void;
            public constructor(param0: globalAndroid.content.Context, param1: string, param2: javax.net.ssl.SSLSocketFactory);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module service {
          export class ThreeDS2Service {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.service.ThreeDS2Service>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.service.ThreeDS2Service interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              initialize(param0: globalAndroid.content.Context, param1: com.stripe.android.stripe3ds2.init.ConfigParameters, param2: string, param3: com.stripe.android.stripe3ds2.init.ui.UiCustomization): void;
              createTransaction(param0: string, param1: string): com.stripe.android.stripe3ds2.transaction.Transaction;
              cleanup(param0: globalAndroid.content.Context): void;
              getSDKVersion(): string;
              getWarnings(): java.util.List<com.stripe.android.stripe3ds2.init.Warning>;
            });
            public constructor();
            public cleanup(param0: globalAndroid.content.Context): void;
            public createTransaction(param0: string, param1: string): com.stripe.android.stripe3ds2.transaction.Transaction;
            public getWarnings(): java.util.List<com.stripe.android.stripe3ds2.init.Warning>;
            public getSDKVersion(): string;
            public initialize(param0: globalAndroid.content.Context, param1: com.stripe.android.stripe3ds2.init.ConfigParameters, param2: string, param3: com.stripe.android.stripe3ds2.init.ui.UiCustomization): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class AuthenticationRequestParameters {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.AuthenticationRequestParameters>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.AuthenticationRequestParameters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getDeviceData(): string;
              getSDKTransactionID(): string;
              getSDKAppID(): string;
              getSDKReferenceNumber(): string;
              getSDKEphemeralPublicKey(): string;
              getMessageVersion(): string;
            });
            public constructor();
            public getMessageVersion(): string;
            public getSDKEphemeralPublicKey(): string;
            public getSDKReferenceNumber(): string;
            public getDeviceData(): string;
            public getSDKTransactionID(): string;
            public getSDKAppID(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class ChallengeParameters {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.ChallengeParameters>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.ChallengeParameters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              set3DSServerTransactionID(param0: string): void;
              setAcsTransactionID(param0: string): void;
              setAcsRefNumber(param0: string): void;
              setAcsSignedContent(param0: string): void;
              get3DSServerTransactionID(): string;
              getAcsTransactionID(): string;
              getAcsRefNumber(): string;
              getAcsSignedContent(): string;
            });
            public constructor();
            public setAcsRefNumber(param0: string): void;
            public get3DSServerTransactionID(): string;
            public getAcsRefNumber(): string;
            public setAcsTransactionID(param0: string): void;
            public set3DSServerTransactionID(param0: string): void;
            public getAcsSignedContent(): string;
            public setAcsSignedContent(param0: string): void;
            public getAcsTransactionID(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class ChallengeStatusReceiver {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.ChallengeStatusReceiver>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.ChallengeStatusReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              completed(param0: com.stripe.android.stripe3ds2.transaction.CompletionEvent, param1: string): void;
              cancelled(param0: string): void;
              timedout(param0: string): void;
              protocolError(param0: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent): void;
              runtimeError(param0: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent): void;
            });
            public constructor();
            public runtimeError(param0: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent): void;
            public protocolError(param0: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent): void;
            public cancelled(param0: string): void;
            public completed(param0: com.stripe.android.stripe3ds2.transaction.CompletionEvent, param1: string): void;
            public timedout(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class CompletionEvent {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.CompletionEvent>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.CompletionEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getSDKTransactionID(): string;
              getTransactionStatus(): string;
            });
            public constructor();
            public getTransactionStatus(): string;
            public getSDKTransactionID(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class ErrorMessage {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.ErrorMessage>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.ErrorMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getTransactionID(): string;
              getErrorCode(): string;
              getErrorDescription(): string;
              getErrorDetails(): string;
            });
            public constructor();
            public getErrorDescription(): string;
            public getTransactionID(): string;
            public getErrorDetails(): string;
            public getErrorCode(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class MessageVersionRegistry {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.MessageVersionRegistry>;
            public constructor();
            public getCurrent(): string;
            public isSupported(param0: string): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class ProtocolErrorEvent {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getSDKTransactionID(): string;
              getErrorMessage(): com.stripe.android.stripe3ds2.transaction.ErrorMessage;
            });
            public constructor();
            public getSDKTransactionID(): string;
            public getErrorMessage(): com.stripe.android.stripe3ds2.transaction.ErrorMessage;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class RuntimeErrorEvent {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getErrorCode(): string;
              getErrorMessage(): string;
            });
            public constructor();
            public getErrorMessage(): string;
            public getErrorCode(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class StripeChallengeParameters extends com.stripe.android.stripe3ds2.transaction.ChallengeParameters {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.StripeChallengeParameters>;
            public constructor();
            public setAcsRefNumber(param0: string): void;
            public get3DSServerTransactionID(): string;
            public getAcsRefNumber(): string;
            public setAcsTransactionID(param0: string): void;
            public set3DSServerTransactionID(param0: string): void;
            public getAcsSignedContent(): string;
            public setAcsSignedContent(param0: string): void;
            public getAcsTransactionID(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class StripeChallengeStatusReceiver extends com.stripe.android.stripe3ds2.transaction.ChallengeStatusReceiver {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.StripeChallengeStatusReceiver>;
            public runtimeError(param0: com.stripe.android.stripe3ds2.transaction.RuntimeErrorEvent): void;
            public constructor();
            public protocolError(param0: com.stripe.android.stripe3ds2.transaction.ProtocolErrorEvent): void;
            public cancelled(param0: string): void;
            public completed(param0: com.stripe.android.stripe3ds2.transaction.CompletionEvent, param1: string): void;
            public timedout(param0: string): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transaction {
          export class Transaction {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transaction.Transaction>;
            /**
             * Constructs a new instance of the com.stripe.android.stripe3ds2.transaction.Transaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getAuthenticationRequestParameters(): com.stripe.android.stripe3ds2.transaction.AuthenticationRequestParameters;
              doChallenge(param0: globalAndroid.app.Activity, param1: com.stripe.android.stripe3ds2.transaction.ChallengeParameters, param2: com.stripe.android.stripe3ds2.transaction.ChallengeStatusReceiver, param3: number): void;
              getProgressView(param0: globalAndroid.app.Activity): globalAndroid.app.ProgressDialog;
              close(): void;
              getInitialChallengeUiType(): string;
            });
            public constructor();
            public getAuthenticationRequestParameters(): com.stripe.android.stripe3ds2.transaction.AuthenticationRequestParameters;
            public getProgressView(param0: globalAndroid.app.Activity): globalAndroid.app.ProgressDialog;
            public close(): void;
            public doChallenge(param0: globalAndroid.app.Activity, param1: com.stripe.android.stripe3ds2.transaction.ChallengeParameters, param2: com.stripe.android.stripe3ds2.transaction.ChallengeStatusReceiver, param3: number): void;
            public getInitialChallengeUiType(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module transactions {
          export class ChallengeResponseData {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData>;
            public serverTransId: string;
            public acsTransId: string;
            public acsHtml: string;
            public acsHtmlRefresh: string;
            public uiType: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
            public isChallengeCompleted: boolean;
            public challengeInfoHeader: string;
            public challengeInfoLabel: string;
            public challengeInfoText: string;
            public challengeAdditionalInfoText: string;
            public shouldShowChallengeInfoTextIndicator: boolean;
            public challengeSelectOptions: java.util.List<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.ChallengeSelectOption>;
            public expandInfoLabel: string;
            public expandInfoText: string;
            public issuerImage: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.Image;
            public messageExtensions: java.util.List<com.stripe.android.stripe3ds2.transactions.MessageExtension>;
            public messageVersion: string;
            public oobAppUrl: string;
            public oobAppLabel: string;
            public oobContinueLabel: string;
            public paymentSystemImage: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.Image;
            public resendInformationLabel: string;
            public sdkTransId: string;
            public submitAuthenticationLabel: string;
            public whitelistingInfoText: string;
            public whyInfoLabel: string;
            public whyInfoText: string;
            public transStatus: string;
            public toJson(): org.json.JSONObject;
            public describeContents(): number;
            public static fromJson(param0: org.json.JSONObject): com.stripe.android.stripe3ds2.transactions.ChallengeResponseData;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module ChallengeResponseData {
            export class ChallengeSelectOption {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.ChallengeSelectOption>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.ChallengeSelectOption>;
              public name: string;
              public text: string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public constructor(param0: string, param1: string);
              public describeContents(): number;
              public equals(param0: any): boolean;
            }
            export class Image {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.Image>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.Image>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public constructor(param0: string, param1: string, param2: string);
              public equals(param0: any): boolean;
              public getHighestFidelityImageUrl(): string;
              public getUrlForDensity(param0: number): string;
            }
            export class a {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.a>;
              public constructor();
            }
            export class b {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b>;
              public static a: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
              public static b: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
              public static c: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
              public static d: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
              public static e: com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
              public f: string;
              public g: com.ults.listeners.ChallengeType;
              public static valueOf(param0: string): com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b;
              public static values(): native.Array<com.stripe.android.stripe3ds2.transactions.ChallengeResponseData.b>;
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
      export module stripe3ds2 {
        export module transactions {
          export class MessageExtension {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.MessageExtension>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.stripe.android.stripe3ds2.transactions.MessageExtension>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export module MessageExtension {
            export class a {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.transactions.MessageExtension.a>;
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
      export module stripe3ds2 {
        export module views {
          export class BrandZoneView {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.BrandZoneView>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class ChallengeActivity implements com.ults.listeners.SdkChallengeInterface, com.ults.listeners.challenges.MultiSelectChallenge, com.ults.listeners.challenges.SingleSelectChallenge, com.ults.listeners.challenges.TextChallenge, com.ults.listeners.challenges.WebChallenge {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ChallengeActivity>;
            public selectObject(param0: number): void;
            public constructor();
            public getCurrentChallenge(): com.ults.listeners.BaseSdkChallenge;
            public typeTextChallengeValue(param0: string): void;
            public getCheckboxesOrdered(): native.Array<any>;
            public onResume(): void;
            public onTrimMemory(param0: number): void;
            public onLowMemory(): void;
            public onBackPressed(): void;
            public onPause(): void;
            public clickSubmitButton(): void;
            public getChallengeType(): com.ults.listeners.ChallengeType;
            public onDestroy(): void;
            public clickCancelButton(): void;
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public expandTextsBeforeScreenshot(): void;
            public getWebView(): any;
            public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class ChallengeProgressDialogActivity {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ChallengeProgressDialogActivity>;
            public static EXTRA_DIRECTORY_SERVER_NAME: string;
            public static EXTRA_CANCELABLE: string;
            public constructor();
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public static show(param0: globalAndroid.content.Context, param1: string): void;
            public static show(param0: globalAndroid.content.Context, param1: string, param2: boolean): void;
            public onStop(): void;
            public onBackPressed(): void;
          }
          export module ChallengeProgressDialogActivity {
            export class a {
              public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ChallengeProgressDialogActivity.a>;
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
      export module stripe3ds2 {
        export module views {
          export class ChallengeZoneView {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ChallengeZoneView>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class InformationZoneView {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.InformationZoneView>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class ThreeDS2Button {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ThreeDS2Button>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class ThreeDS2HeaderTextView extends com.stripe.android.stripe3ds2.views.ThreeDS2TextView {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ThreeDS2HeaderTextView>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class ThreeDS2TextView {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ThreeDS2TextView>;
            public constructor(param0: globalAndroid.content.Context);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
        }
      }
    }
  }
}

declare module com {
  export module stripe {
    export module android {
      export module stripe3ds2 {
        export module views {
          export class ThreeDS2WebView {
            public static class: java.lang.Class<com.stripe.android.stripe3ds2.views.ThreeDS2WebView>;
            public constructor(param0: globalAndroid.content.Context);
            public getSettings(): globalAndroid.webkit.WebSettings;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public setWebViewClient(param0: globalAndroid.webkit.WebViewClient): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export class BaseSdkChallenge {
        public static class: java.lang.Class<com.ults.listeners.BaseSdkChallenge>;
        /**
         * Constructs a new instance of the com.ults.listeners.BaseSdkChallenge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          clickSubmitButton(): void;
          clickCancelButton(): void;
          getChallengeType(): com.ults.listeners.ChallengeType;
          expandTextsBeforeScreenshot(): void;
        });
        public constructor();
        public clickSubmitButton(): void;
        public clickCancelButton(): void;
        public getChallengeType(): com.ults.listeners.ChallengeType;
        public expandTextsBeforeScreenshot(): void;
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export class ChallengeType {
        public static class: java.lang.Class<com.ults.listeners.ChallengeType>;
        public static SINGLE_TEXT_INPUT: com.ults.listeners.ChallengeType;
        public static SINGLE_SELECT: com.ults.listeners.ChallengeType;
        public static MULTI_SELECT: com.ults.listeners.ChallengeType;
        public static OUT_OF_BAND: com.ults.listeners.ChallengeType;
        public static HTML_UI: com.ults.listeners.ChallengeType;
        public static values(): native.Array<com.ults.listeners.ChallengeType>;
        public static valueOf(param0: string): com.ults.listeners.ChallengeType;
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export class SdkChallengeInterface {
        public static class: java.lang.Class<com.ults.listeners.SdkChallengeInterface>;
        /**
         * Constructs a new instance of the com.ults.listeners.SdkChallengeInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getCurrentChallenge(): com.ults.listeners.BaseSdkChallenge;
        });
        public constructor();
        public static UL_HANDLE_CHALLENGE_ACTION: string;
        public getCurrentChallenge(): com.ults.listeners.BaseSdkChallenge;
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export module challenges {
        export class MultiSelectChallenge extends com.ults.listeners.BaseSdkChallenge {
          public static class: java.lang.Class<com.ults.listeners.challenges.MultiSelectChallenge>;
          /**
           * Constructs a new instance of the com.ults.listeners.challenges.MultiSelectChallenge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getCheckboxesOrdered(): native.Array<any>;
            clickSubmitButton(): void;
            clickCancelButton(): void;
            getChallengeType(): com.ults.listeners.ChallengeType;
            expandTextsBeforeScreenshot(): void;
          });
          public constructor();
          public clickSubmitButton(): void;
          public getCheckboxesOrdered(): native.Array<any>;
          public expandTextsBeforeScreenshot(): void;
          public clickCancelButton(): void;
          public getChallengeType(): com.ults.listeners.ChallengeType;
        }
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export module challenges {
        export class OutOfBandChallenge extends com.ults.listeners.BaseSdkChallenge {
          public static class: java.lang.Class<com.ults.listeners.challenges.OutOfBandChallenge>;
          /**
           * Constructs a new instance of the com.ults.listeners.challenges.OutOfBandChallenge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            clickSubmitButton(): void;
            clickCancelButton(): void;
            getChallengeType(): com.ults.listeners.ChallengeType;
            expandTextsBeforeScreenshot(): void;
          });
          public constructor();
          public clickSubmitButton(): void;
          public expandTextsBeforeScreenshot(): void;
          public clickCancelButton(): void;
          public getChallengeType(): com.ults.listeners.ChallengeType;
        }
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export module challenges {
        export class SingleSelectChallenge extends com.ults.listeners.BaseSdkChallenge {
          public static class: java.lang.Class<com.ults.listeners.challenges.SingleSelectChallenge>;
          /**
           * Constructs a new instance of the com.ults.listeners.challenges.SingleSelectChallenge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            selectObject(param0: number): void;
            clickSubmitButton(): void;
            clickCancelButton(): void;
            getChallengeType(): com.ults.listeners.ChallengeType;
            expandTextsBeforeScreenshot(): void;
          });
          public constructor();
          public clickSubmitButton(): void;
          public expandTextsBeforeScreenshot(): void;
          public clickCancelButton(): void;
          public selectObject(param0: number): void;
          public getChallengeType(): com.ults.listeners.ChallengeType;
        }
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export module challenges {
        export class TextChallenge extends com.ults.listeners.BaseSdkChallenge {
          public static class: java.lang.Class<com.ults.listeners.challenges.TextChallenge>;
          /**
           * Constructs a new instance of the com.ults.listeners.challenges.TextChallenge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            typeTextChallengeValue(param0: string): void;
            clickSubmitButton(): void;
            clickCancelButton(): void;
            getChallengeType(): com.ults.listeners.ChallengeType;
            expandTextsBeforeScreenshot(): void;
          });
          public constructor();
          public typeTextChallengeValue(param0: string): void;
          public clickSubmitButton(): void;
          public expandTextsBeforeScreenshot(): void;
          public clickCancelButton(): void;
          public getChallengeType(): com.ults.listeners.ChallengeType;
        }
      }
    }
  }
}

declare module com {
  export module ults {
    export module listeners {
      export module challenges {
        export class WebChallenge extends com.ults.listeners.BaseSdkChallenge {
          public static class: java.lang.Class<com.ults.listeners.challenges.WebChallenge>;
          /**
           * Constructs a new instance of the com.ults.listeners.challenges.WebChallenge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getWebView(): any;
            clickSubmitButton(): void;
            clickCancelButton(): void;
            getChallengeType(): com.ults.listeners.ChallengeType;
            expandTextsBeforeScreenshot(): void;
          });
          public constructor();
          public clickSubmitButton(): void;
          public expandTextsBeforeScreenshot(): void;
          public clickCancelButton(): void;
          public getChallengeType(): com.ults.listeners.ChallengeType;
          public getWebView(): any;
        }
      }
    }
  }
}

//Generics information:
