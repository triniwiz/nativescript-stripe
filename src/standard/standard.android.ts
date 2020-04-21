import { android as androidApp } from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";
import * as utils from 'tns-core-modules/utils/utils';
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingAddressField, StripeShippingMethod } from "./standard.common";

export class StripeConfig extends StripeConfigCommon {
  private _paymentConfigurationInitiated: boolean = false;
  get native(): com.stripe.android.PaymentSessionConfig {
    // getter gives client a chance to set properties before using.
    return this.nativeBuilder.build();
  }

  get nativeBuilder(): com.stripe.android.PaymentSessionConfig.Builder {
    this.initPaymentConfiguration();
    let optionalFields = [];
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

    const shippingRequired = this.requiredShippingAddressFields.length !== 0;
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

  constructor(
    _page: Page,
    public customerSession: StripeCustomerSession,
    amount: number,
    public currency: string,
    public listener: StripePaymentListener,
    prefilledAddress?: StripeAddress) {
    let builder = StripeConfig.shared().nativeBuilder
      .setShippingInformationValidator(this.createShippingInfoValidator())
      .setShippingMethodsFactory(this.createShippingMethodsFactory());
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
    this.native = new com.stripe.android.PaymentSession(this.patchActivity(), config);

    if (!this.native.init(this.createPaymentSessionListener())) {
      throw new Error("CustomerSession not initialized");
    }
    this.native.setCartTotal(amount);
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
    this.native.presentPaymentMethodSelection(null);
  }

  presentShipping(): void {
    this.native.presentShippingFlow();
  }

  private createShippingInfoValidator(): com.stripe.android.PaymentSessionConfig.ShippingInformationValidator {
    return new com.stripe.android.PaymentSessionConfig.ShippingInformationValidator({
      isValid: (shippingInformation: com.stripe.android.model.ShippingInformation): boolean => {
        let shippingMethods = this.listener.provideShippingMethods(createAddress(shippingInformation));
        return shippingMethods.isValid;
      },
      getErrorMessage: (shippingInformation: com.stripe.android.model.ShippingInformation): string => {
        let shippingMethods = this.listener.provideShippingMethods(createAddress(shippingInformation));
        return shippingMethods.validationError;
      }
    });
  }

  private createShippingMethodsFactory(): com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory {
    return new com.stripe.android.PaymentSessionConfig.ShippingMethodsFactory({
      create: (shippingInformation: com.stripe.android.model.ShippingInformation): java.util.List<com.stripe.android.model.ShippingMethod> => {
        let shippingMethods = this.listener.provideShippingMethods(createAddress(shippingInformation));
        let methods = new java.util.ArrayList<com.stripe.android.model.ShippingMethod>();
        shippingMethods.shippingMethods.forEach(m => methods.add(createAdShippingMethod(m, this.currency)));
        return methods;
      }
    });
  }

  private createPaymentSessionListener(): com.stripe.android.PaymentSession.PaymentSessionListener {
    return new com.stripe.android.PaymentSession.PaymentSessionListener({
      onPaymentSessionDataChanged: (sessionData: com.stripe.android.PaymentSessionData): void => {
        if (this.paymentInProgress) return;

        this.customerSession.native.retrieveCurrentCustomer(new com.stripe.android.CustomerSession.CustomerRetrievalListener({
          onCustomerRetrieved: (_customer: com.stripe.android.model.Customer) => {
            this.selectedPaymentMethod = createPaymentMethod(sessionData.getPaymentMethod());
            this.selectedShippingMethod = createShippingMethod(sessionData.getShippingMethod());
            this.shippingAddress = createAddress(sessionData.getShippingInformation());
            let paymentData = {
              isReadyToCharge: sessionData.isPaymentReadyToCharge(),
              paymentMethod: this.selectedPaymentMethod,
              shippingInfo: this.selectedShippingMethod,
              shippingAddress: this.shippingAddress
            };
            this.listener.onPaymentDataChanged(paymentData);
          },
          onError: (errorCode: number, errorMessage: string) => {
            this.listener.onError(errorCode, errorMessage);
          }
        }));
      },
      onCommunicatingStateChanged: (isCommunicating: boolean): void => {
        this.loading = isCommunicating;
        this.listener.onCommunicatingStateChanged(isCommunicating);
      },
      onError: (code: number, message: string): void => {
        this.listener.onError(code, message);
      }
    });
  }

  private patchActivity(): android.app.Activity {
    let activity = androidApp.foregroundActivity;
    let session = this;

    activity.onActivityResult = function (requestCode, resultCode, data) {
      session.native.handlePaymentData(requestCode, resultCode, data);
    };
    return activity;
  }
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
  const cardBrand = com.stripe.android.model.CardBrand.Companion.fromCode(brand);
  const displayBrand = cardBrand ? cardBrand.getDisplayName() : brand;
  const image = cardBrand ? getBitmapFromResource(cardBrand.getIcon()) : undefined;
  return {
    label: `${displayBrand} ...${last4}`,
    image: image,
    templateImage: undefined,
    type: "Card",
    stripeID,
    brand: brand
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
