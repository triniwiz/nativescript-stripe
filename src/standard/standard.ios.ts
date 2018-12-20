import { Page } from "ui/page";
import { StripeAddress, StripeConfigCommon, StripePaymentListener, StripePaymentMethod, StripeShippingAddressField, StripeShippingMethod } from "./standard.common";

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
    if (this.requiredBillingAddressFields) config.requiredBillingAddressFields = this.requiredBillingAddressFields as any;
    if (this.requiredShippingAddressFields && this.requiredShippingAddressFields.length > 0) {
      let fields = new NSMutableSet<string>({capacity: 4});
      this.requiredShippingAddressFields.forEach(f => {
        switch (f) {
          case StripeShippingAddressField.Name:
            fields.addObject(STPContactFieldName);
            break;
          case StripeShippingAddressField.PostalAddress:
            fields.addObject(STPContactFieldPostalAddress);
            break;
          case StripeShippingAddressField.Phone:
            fields.addObject(STPContactFieldPhoneNumber);
            break;
          case StripeShippingAddressField.Email:
            fields.addObject(STPContactFieldEmailAddress);
            break;
        }
      });
      config.requiredShippingAddressFields = fields;
    }
    if (this.companyName) config.companyName = this.companyName;
    return config;
  }

  static shared(): StripeConfig {
    if (!StripeConfigCommon.instance) StripeConfigCommon.instance = new StripeConfig();
    return <StripeConfig>StripeConfigCommon.instance;
  }
}

export class StripeCustomerSession {
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

export class StripePaymentSession {
  native: STPPaymentContext;
  private delegate: StripePaymentDelegate; // Necessary to keep delegate in memory
  _paymentInProgress: boolean;

  constructor(private page: Page,
    customerSession: StripeCustomerSession,
    amount: number,
    currency: string,
    listener?: StripePaymentListener) {
    this.native = STPPaymentContext.alloc()
      .initWithCustomerContextConfigurationTheme(
        customerSession.native,
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

  static create(parent: StripePaymentSession, listener: StripePaymentListener): StripePaymentDelegate {
    let self = <StripePaymentDelegate>super.new();
    self.parent = parent;
    self.listener = listener;
    return self;
  }

  private parent: StripePaymentSession;
  private listener: StripePaymentListener;

  paymentContextDidChange(paymentContext: STPPaymentContext): void {
    let data = {
      isReadyToCharge: this.parent.isPaymentReady,
      paymentMethod: createPaymentMethod(paymentContext),
      shippingInfo: createShippingMethod(paymentContext)
    };
    this.listener.onPaymentDataChanged(data);
  }

  paymentContextDidCreatePaymentResultCompletion(paymentContext: STPPaymentContext, paymentResult: STPPaymentResult, completion: (p1: NSError) => void): void {
    StripeConfig.shared().backendAPI.completeCharge(
      paymentResult.source.stripeID,
      paymentContext.paymentAmount,
      createShippingMethod(paymentContext),
      createAddress(paymentContext.shippingAddress))
      .then(() => {
        completion(null);
      }).catch(e => {
        completion(createError("PaymentError", 100, e));
      });
  }

  paymentContextDidFailToLoadWithError(paymentContext: STPPaymentContext, error: NSError): void {
    this.listener.onError(error.code, error.localizedDescription);
  }

  paymentContextDidFinishWithStatusError(paymentContext: STPPaymentContext, status: STPPaymentStatus, error: NSError): void {
    this.parent._paymentInProgress = false;
    switch (status) {
      case STPPaymentStatus.Error:
        if (this.listener.onError) this.listener.onError(error.code, error.localizedDescription);
        break;
      case STPPaymentStatus.Success:
        if (this.listener.onPaymentSuccess) this.listener.onPaymentSuccess();
        break;
      case STPPaymentStatus.UserCancellation:
        if (this.listener.onUserCancelled) this.listener.onUserCancelled();
        break;
    }
  }

  paymentContextDidUpdateShippingAddressCompletion(paymentContext: STPPaymentContext, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void {
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
  return new NSError({
    domain: domain, code: code, userInfo: userInfo
  });
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
