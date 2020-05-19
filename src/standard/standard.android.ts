import { android as androidApp } from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";
import * as utils from "tns-core-modules/utils/utils";
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingAddressField, StripeShippingMethod } from "./standard.common";
export * from "./standard.common";

declare let global: any;
function getLocalBroadcastManagerPackage() {
  return useAndroidX() ? global.androidx.localbroadcastmanager.content : global.android.support.v4.content;
}

function useAndroidX() {
  return global.androidx && global.androidx.appcompat;
}

export class StripeConfig extends StripeConfigCommon {
  private _paymentConfigurationInitiated: boolean = false;
  get native(): com.stripe.android.PaymentSessionConfig {
    // getter gives client a chance to set properties before using.
    return this.nativeBuilder.build();
  }

  get nativeBuilder(): com.stripe.android.PaymentSessionConfig.Builder {
    this.initPaymentConfiguration();
    const shippingRequired = this.requiredShippingAddressFields && this.requiredShippingAddressFields.length !== 0;
    let optionalFields = [];
    if (shippingRequired) {
      if (this.requiredShippingAddressFields.indexOf(StripeShippingAddressField.PostalAddress) < 0) {
        optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField.ADDRESS_LINE_ONE_FIELD);
        optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField.ADDRESS_LINE_TWO_FIELD);
        optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField.CITY_FIELD);
        optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField.STATE_FIELD);
        optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField.POSTAL_CODE_FIELD);
      }
      if (this.requiredShippingAddressFields.indexOf(StripeShippingAddressField.Phone) < 0) {
        optionalFields.unshift(com.stripe.android.view.ShippingInfoWidget.CustomizableShippingField.PHONE_FIELD);
      }
    }

    return new com.stripe.android.PaymentSessionConfig.Builder()
      .setShippingInfoRequired(shippingRequired)
      .setShippingMethodsRequired(shippingRequired)
      .setOptionalShippingInfoFields(optionalFields);
  }

  initPaymentConfiguration(): void {
    if (!this.publishableKey) throw new Error("publishableKey must be set");
    if (this._paymentConfigurationInitiated) return;
    com.stripe.android.PaymentConfiguration.init(utils.ad.getApplicationContext(), this.publishableKey);
    this._paymentConfigurationInitiated = true;
  }

  static shared(): StripeConfig {
    if (!StripeConfigCommon.instance) StripeConfigCommon.instance = new StripeConfig();
    return <StripeConfig>StripeConfigCommon.instance;
  }
}


export class StripeCustomerSession {
  native: com.stripe.android.CustomerSession;

  constructor() {
    StripeConfig.shared().initPaymentConfiguration();
    com.stripe.android.CustomerSession.initCustomerSession(this.context, createKeyProvider());
    this.native = com.stripe.android.CustomerSession.getInstance();
  }

  private get context(): android.content.Context {
    return androidApp.context;
  }
}

function createKeyProvider(): com.stripe.android.EphemeralKeyProvider {
  return new com.stripe.android.EphemeralKeyProvider({
    createEphemeralKey(apiVersion: string, keyUpdateListener: com.stripe.android.EphemeralKeyUpdateListener): void {
      StripeConfig.shared().backendAPI.createCustomerKey(apiVersion)
        .then(key => {
          keyUpdateListener.onKeyUpdate(JSON.stringify(key));
        }).catch(e => {
          keyUpdateListener.onKeyUpdateFailure(500, JSON.stringify(e));
        });
    }
  });
}

export class StripePaymentSession {
  native: com.stripe.android.PaymentSession;
  selectedPaymentMethod: StripePaymentMethod;
  selectedShippingMethod: StripeShippingMethod;
  shippingAddress: StripeAddress;
  loading: boolean;
  paymentInProgress: boolean;
  private receiver: android.content.BroadcastReceiver;

  constructor(
    _page: Page,
    public customerSession: StripeCustomerSession,
    amount: number,
    public currency: string,
    public listener: StripePaymentListener,
    prefilledAddress?: StripeAddress) {
    let builder = StripeConfig.shared().nativeBuilder;
    if (prefilledAddress) {
      const info = new com.stripe.android.model.ShippingInformation(
        new com.stripe.android.model.Address.Builder()
          .setLine1(prefilledAddress.line1)
          .setLine2(prefilledAddress.line2)
          .setCity(prefilledAddress.city)
          .setState(prefilledAddress.state)
          .setCountry(prefilledAddress.country)
          .setPostalCode(prefilledAddress.postalCode)
          .build(),
        prefilledAddress.name,
        prefilledAddress.phone
      );
      builder.setPrepopulatedShippingInfo(info);
    }
    let config = builder.build();
    this.native = new com.stripe.android.PaymentSession(this.patchActivity());

    if (!this.native.init(createPaymentSessionListener(this, listener), config)) {
      throw new Error("CustomerSession not initialized");
    }
    this.native.setCartTotal(amount);
    this.receiver = createShippingBroadcastReceiver(this, listener);
    getLocalBroadcastManagerPackage().LocalBroadcastManager.getInstance(androidApp.foregroundActivity).registerReceiver(this.receiver, new android.content.IntentFilter(com.stripe.android.view.PaymentFlowExtras.EVENT_SHIPPING_INFO_SUBMITTED));
  }

  get amount(): number {
    let data = this.native.getPaymentSessionData();
    return data.getCartTotal() + (data.getShippingMethod() ? data.getShippingMethod().getAmount() : 0);
  }

  get isPaymentReady(): boolean {
    return this.native.getPaymentSessionData().isPaymentReadyToCharge();
  }

  requestPayment() {
    this.paymentInProgress = true;
    const data = this.native.getPaymentSessionData();
    const shippingMethod = data.getShippingMethod();
    const shippingCost = shippingMethod ? shippingMethod.getAmount() : 0;
    StripeConfig.shared().backendAPI.capturePayment(
      data.getPaymentMethod().component1(), // id
      data.getCartTotal() + shippingCost,
      createShippingMethod(shippingMethod),
      createAddress(data.getShippingInformation()))
      .then(() => {
        this.paymentInProgress = false;
        this.listener.onPaymentSuccess();
        this.native.onCompleted();
      }).catch(e => {
        this.listener.onError(100, e);
        this.paymentInProgress = false;
      });
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

    // TODO: How do I call the callback? The code below doesn't work,
    // it throws an "undefined" exception. Note JSON.stringify(oldResultCallback) returns "undefined".
    let oldResultCallback = activity.onActivityResult;
    console.log("oldResultCallback: " + JSON.stringify(oldResultCallback));
    activity.onActivityResult = function (requestCode, resultCode, data) {
      // if (oldResultCallback) oldResultCallback(requestCode, resultCode, data);
      session.native.handlePaymentData(requestCode, resultCode, data);
    };
    let oldDestroyCallback = activity.onDestroy;
    console.log("oldDestroyCallback: " + JSON.stringify(oldDestroyCallback));
    activity.onDestroy = function () {
      // if (oldDestroyCallback) oldDestroyCallback();
      session.native.onDestroy();
      getLocalBroadcastManagerPackage().LocalBroadcastManager.getInstance(activity).unregisterReceiver(this.receiver);
    };
    return activity;
  }
}

function createPaymentSessionListener(parent: StripePaymentSession, listener: StripePaymentListener): com.stripe.android.PaymentSession.PaymentSessionListener {
  return new com.stripe.android.PaymentSession.PaymentSessionListener({
    onPaymentSessionDataChanged: (sessionData: com.stripe.android.PaymentSessionData): void => {
      if (parent.paymentInProgress) return;

      parent.customerSession.native.retrieveCurrentCustomer(new com.stripe.android.CustomerSession.CustomerRetrievalListener({
        onCustomerRetrieved(_customer: com.stripe.android.model.Customer) {
          parent.selectedPaymentMethod = createPaymentMethod(sessionData.getPaymentMethod());
          parent.selectedShippingMethod = createShippingMethod(sessionData.getShippingMethod());
          parent.shippingAddress = createAddress(sessionData.getShippingInformation());
          let paymentData = {
            isReadyToCharge: sessionData.isPaymentReadyToCharge(),
            paymentMethod: parent.selectedPaymentMethod,
            shippingInfo: parent.selectedShippingMethod,
            shippingAddress: parent.shippingAddress
          };
          listener.onPaymentDataChanged(paymentData);
        },
        onError(errorCode: number, errorMessage: string) {
          listener.onError(errorCode, errorMessage);
        }
      }));
    },
    onCommunicatingStateChanged: (isCommunicating: boolean): void => {
      parent.loading = isCommunicating;
      listener.onCommunicatingStateChanged(isCommunicating);
    },
    onError: (code: number, message: string): void => {
      listener.onError(code, message);
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
      let shippingInformation = intent.getParcelableExtra(com.stripe.android.view.PaymentFlowExtras.EXTRA_SHIPPING_INFO_DATA) as any as com.stripe.android.model.ShippingInformation;
      let shippingMethods = this.listener.provideShippingMethods(createAddress(shippingInformation));

      let shippingInfoProcessedIntent = new android.content.Intent(com.stripe.android.view.PaymentFlowExtras.EVENT_SHIPPING_INFO_PROCESSED);
      if (!shippingMethods.isValid) {
        shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowExtras.EXTRA_IS_SHIPPING_INFO_VALID, false);
        shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowExtras.EXTRA_SHIPPING_INFO_ERROR, shippingMethods.validationError);
      } else {
        shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowExtras.EXTRA_IS_SHIPPING_INFO_VALID, true);
        let methods = new java.util.ArrayList<com.stripe.android.model.ShippingMethod>();
        shippingMethods.shippingMethods.forEach(m => methods.add(createAdShippingMethod(m, this.parent.currency)));
        shippingInfoProcessedIntent.putParcelableArrayListExtra(com.stripe.android.view.PaymentFlowExtras.EXTRA_VALID_SHIPPING_METHODS, methods);
        shippingInfoProcessedIntent.putExtra(com.stripe.android.view.PaymentFlowExtras.EXTRA_DEFAULT_SHIPPING_METHOD,
          createAdShippingMethod(shippingMethods.selectedShippingMethod, this.parent.currency) as any as android.os.Parcelable);
      }
      getLocalBroadcastManagerPackage().LocalBroadcastManager.getInstance(context).sendBroadcast(shippingInfoProcessedIntent);
    }
  }
  return new InternalReceiver(parent, listener);
}

function createPaymentMethod(paymentMethod: com.stripe.android.model.PaymentMethod): StripePaymentMethod {
  if (!paymentMethod) return undefined;
  const pmCard = paymentMethod.component8(); // card
  const pmId = paymentMethod.component1(); // id
  if (pmCard) return createPaymentMethodFromCard(pmCard, pmId);
  return { label: "Error (103)", image: undefined, templateImage: undefined };
}

function createPaymentMethodFromCard(card: com.stripe.android.model.PaymentMethod.Card, stripeID: string): StripePaymentMethod {
  const brand = card.component1(); // brand
  const last4 = card.component7(); // last4
  return {
    label: `${toCardBrand(brand)} ...${last4}`,
    image: getBitmapFromResource(com.stripe.android.model.Card.getBrandIcon(fixupCardBrand(brand))),
    templateImage: undefined,
    type: "Card",
    stripeID,
    brand: toCardBrand(brand)
  };
}

function getBitmapFromResource(resID: number): android.graphics.Bitmap {
  let image = androidApp.foregroundActivity.getResources().getDrawable(resID, null);
  if (image instanceof android.graphics.Bitmap) {
    return image;
  }
  let bitmap = android.graphics.Bitmap.createBitmap(image.getIntrinsicWidth(),
    image.getIntrinsicHeight(), android.graphics.Bitmap.Config.ARGB_8888);
  let canvas = new android.graphics.Canvas(bitmap);
  image.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
  image.draw(canvas);
  return bitmap;
}

function createShippingMethod(shipping: com.stripe.android.model.ShippingMethod): StripeShippingMethod {
  if (!shipping) return undefined;
  return {
    amount: shipping.getAmount(),
    detail: shipping.getDetail(),
    label: shipping.getLabel(),
    identifier: shipping.getIdentifier()
  };
}

function createAddress(info: com.stripe.android.model.ShippingInformation): StripeAddress {
  if (!info) return undefined;
  const address = info.getAddress();
  if (!address) return undefined;
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
    method.amount,
    currency,
    method.detail
  );
}

function toCardBrand(brand: string): string {
  if (brand) switch (brand.toLowerCase()) {
    case 'visa':
      return 'Visa';
    case 'amex':
    case 'americanexpress':
    case 'american express':
      return 'Amex';
    case 'mastercard':
      return 'MasterCard';
    case 'discover':
      return 'Discover';
    case 'jcb':
      return 'JCB';
    case 'diners':
    case 'dinersclub':
    case 'diners club':
      return 'DinersClub';
    case 'unionpay':
    case 'union pay':
      return 'UnionPay';
  }
  return 'Unknown';
}

function fixupCardBrand(brand: string): string {
  // On some environments, com.stripe.model.Card.CardBrand.VISA, etc.
  // are undefined. So hard-code the values. I suspect this is a
  // {NS} Kotlin integration bug.
  if (brand) switch (brand.toLowerCase()) {
    case 'visa':
      return 'Visa';
    case 'amex':
    case 'americanexpress':
    case 'american_express':
    case 'american express':
      return 'American Express';
    case 'mastercard':
      return 'MasterCard';
    case 'discover':
      return 'Discover';
    case 'jcb':
      return 'JCB';
    case 'diners':
    case 'dinersclub':
    case 'diners_club':
    case 'diners club':
      return 'Diners Club';
    case 'unionpay':
    case 'union pay':
      return 'UnionPay';
  }
  return 'Unknown';
}
