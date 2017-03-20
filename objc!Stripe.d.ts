
declare class PTKCard extends STPCard {

	static alloc(): PTKCard; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): PTKCard; // inherited from STPAPIResponseDecodable

	static new(): PTKCard; // inherited from NSObject
}

declare class PTKView extends STPPaymentCardTextField {

	static alloc(): PTKView; // inherited from NSObject

	static appearance(): PTKView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): PTKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): PTKView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): PTKView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): PTKView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): PTKView; // inherited from UIAppearance

	static new(): PTKView; // inherited from NSObject

	card: PTKCard;

	delegate: PTKViewDelegate;
}

interface PTKViewDelegate extends STPPaymentCardTextFieldDelegate {

	paymentViewWithCardIsValid?(paymentView: PTKView, card: PTKCard, valid: boolean): void;
}
declare var PTKViewDelegate: {

	prototype: PTKViewDelegate;
};

declare class STPAPIClient extends NSObject {

	static alloc(): STPAPIClient; // inherited from NSObject

	static new(): STPAPIClient; // inherited from NSObject

	static sharedClient(): STPAPIClient;

	configuration: STPPaymentConfiguration;

	publishableKey: string;

	constructor(o: { configuration: STPPaymentConfiguration; });

	constructor(o: { publishableKey: string; });

	createTokenWithBankAccountCompletion(bankAccount: STPBankAccountParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithCardCompletion(card: STPCardParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithPaymentCompletion(payment: PKPayment, completion: (p1: STPToken, p2: NSError) => void): void;

	initWithConfiguration(configuration: STPPaymentConfiguration): this;

	initWithPublishableKey(publishableKey: string): this;
}

interface STPAPIResponseDecodable extends NSObjectProtocol {

	allResponseFields: NSDictionary<any, any>;
}
declare var STPAPIResponseDecodable: {

	prototype: STPAPIResponseDecodable;

	decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPAPIResponseDecodable;

	requiredFields(): NSArray<any>;
};

declare class STPAddCardViewController extends UIViewController {

	static alloc(): STPAddCardViewController; // inherited from NSObject

	static new(): STPAddCardViewController; // inherited from NSObject

	delegate: STPAddCardViewControllerDelegate;

	managedAccountCurrency: string;

	prefilledInformation: STPUserInformation;

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; });

	initWithConfigurationTheme(configuration: STPPaymentConfiguration, theme: STPTheme): this;
}

interface STPAddCardViewControllerDelegate extends NSObjectProtocol {

	addCardViewControllerDidCancel(addCardViewController: STPAddCardViewController): void;

	addCardViewControllerDidCreateTokenCompletion(addCardViewController: STPAddCardViewController, token: STPToken, completion: (p1: NSError) => void): void;
}
declare var STPAddCardViewControllerDelegate: {

	prototype: STPAddCardViewControllerDelegate;
};

declare class STPAddress extends NSObject {

	static alloc(): STPAddress; // inherited from NSObject

	static applePayAddressFieldsFromBillingAddressFields(billingAddressFields: STPBillingAddressFields): PKAddressField;

	static new(): STPAddress; // inherited from NSObject

	city: string;

	country: string;

	email: string;

	line1: string;

	line2: string;

	name: string;

	phone: string;

	postalCode: string;

	state: string;

	constructor(o: { ABRecord: any; });

	ABRecordValue(): any;

	PKContactValue(): PKContact;

	containsRequiredFields(requiredFields: STPBillingAddressFields): boolean;

	containsRequiredShippingAddressFields(requiredFields: PKAddressField): boolean;

	initWithABRecord(record: any): this;
}

declare class STPApplePayPaymentMethod extends NSObject implements STPPaymentMethod {

	static alloc(): STPApplePayPaymentMethod; // inherited from NSObject

	static new(): STPApplePayPaymentMethod; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentMethod

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly label: string; // inherited from STPPaymentMethod

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentMethod

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface STPBackendAPIAdapter extends NSObjectProtocol {

	attachSourceToCustomerCompletion(source: STPSource, completion: (p1: NSError) => void): void;

	retrieveCustomer(completion: (p1: STPCustomer, p2: NSError) => void): void;

	selectDefaultCustomerSourceCompletion(source: STPSource, completion: (p1: NSError) => void): void;
}
declare var STPBackendAPIAdapter: {

	prototype: STPBackendAPIAdapter;
};

declare class STPBankAccount extends STPBankAccountParams implements STPAPIResponseDecodable {

	static alloc(): STPBankAccount; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPBankAccount;

	static new(): STPBankAccount; // inherited from NSObject

	static requiredFields(): NSArray<any>;

	readonly bankAccountId: string;

	readonly bankName: string;

	readonly disabled: boolean;

	readonly fingerprint: string;

	readonly last4: string;

	readonly status: STPBankAccountStatus;

	readonly validated: boolean;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAccountNumber(accountNumber: string): void;
}

declare const enum STPBankAccountHolderType {

	Individual = 0,

	Company = 1
}

declare class STPBankAccountParams extends NSObject implements STPFormEncodable {

	static alloc(): STPBankAccountParams; // inherited from NSObject

	static new(): STPBankAccountParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	accountHolderName: string;

	accountHolderType: STPBankAccountHolderType;

	accountNumber: string;

	country: string;

	currency: string;

	readonly last4: string;

	routingNumber: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum STPBankAccountStatus {

	New = 0,

	Validated = 1,

	Verified = 2,

	Errored = 3
}

declare const enum STPBillingAddressFields {

	None = 0,

	Zip = 1,

	Full = 2
}

declare class STPCard extends STPCardParams implements STPAPIResponseDecodable, STPPaymentMethod, STPSource {

	static alloc(): STPCard; // inherited from NSObject

	static brandFromString(string: string): STPCardBrand;

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPCard;

	static fundingFromString(string: string): STPCardFundingType;

	static new(): STPCard; // inherited from NSObject

	static requiredFields(): NSArray<any>;

	static stringFromBrand(brand: STPCardBrand): string;

	readonly brand: STPCardBrand;

	readonly cardId: string;

	readonly country: string;

	readonly dynamicLast4: string;

	readonly fingerprint: string;

	readonly funding: STPCardFundingType;

	readonly isApplePayCard: boolean;

	readonly last4: string;

	readonly type: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentMethod

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly label: string; // inherited from STPPaymentMethod

	readonly stripeID: string; // inherited from STPSource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentMethod

	readonly  // inherited from NSObjectProtocol

	constructor(o: { ID: string; brand: STPCardBrand; last4: string; expMonth: number; expYear: number; funding: STPCardFundingType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIDBrandLast4ExpMonthExpYearFunding(cardID: string, brand: STPCardBrand, last4: string, expMonth: number, expYear: number, funding: STPCardFundingType): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setAddressCity(addressCity: string): void;

	setAddressCountry(addressCountry: string): void;

	setAddressLine1(addressLine1: string): void;

	setAddressLine2(addressLine2: string): void;

	setAddressState(addressState: string): void;

	setAddressZip(addressZip: string): void;

	setExpMonth(expMonth: number): void;

	setExpYear(expYear: number): void;

	setName(name: string): void;
}

declare const enum STPCardBrand {

	Visa = 0,

	Amex = 1,

	MasterCard = 2,

	Discover = 3,

	JCB = 4,

	DinersClub = 5,

	Unknown = 6
}

declare var STPCardDeclined: string;

declare var STPCardErrorCodeKey: string;

declare const enum STPCardFundingType {

	Debit = 0,

	Credit = 1,

	Prepaid = 2,

	Other = 3
}

declare class STPCardParams extends NSObject implements STPFormEncodable {

	static alloc(): STPCardParams; // inherited from NSObject

	static new(): STPCardParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	address: STPAddress;

	addressCity: string;

	addressCountry: string;

	addressLine1: string;

	addressLine2: string;

	addressState: string;

	addressZip: string;

	currency: string;

	cvc: string;

	expMonth: number;

	expYear: number;

	readonly last4: string;

	name: string;

	number: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateCardReturningError(): boolean;

	validateCvcError(ioValue: interop.Pointer | interop.Reference<any>): boolean;

	validateExpMonthError(ioValue: interop.Pointer | interop.Reference<any>): boolean;

	validateExpYearError(ioValue: interop.Pointer | interop.Reference<any>): boolean;

	validateNumberError(ioValue: interop.Pointer | interop.Reference<any>): boolean;
}

declare const enum STPCardValidationState {

	Valid = 0,

	Invalid = 1,

	Incomplete = 2
}

declare class STPCardValidator extends NSObject {

	static alloc(): STPCardValidator; // inherited from NSObject

	static brandForNumber(cardNumber: string): STPCardBrand;

	static fragmentLengthForCardBrand(brand: STPCardBrand): number;

	static lengthForCardBrand(brand: STPCardBrand): number;

	static lengthsForCardBrand(brand: STPCardBrand): NSSet<number>;

	static maxCVCLengthForCardBrand(brand: STPCardBrand): number;

	static maxLengthForCardBrand(brand: STPCardBrand): number;

	static new(): STPCardValidator; // inherited from NSObject

	static sanitizedNumericStringForString(string: string): string;

	static stringIsNumeric(string: string): boolean;

	static validationStateForCVCCardBrand(cvc: string, brand: STPCardBrand): STPCardValidationState;

	static validationStateForCard(card: STPCardParams): STPCardValidationState;

	static validationStateForCardInCurrentYearCurrentMonth(card: STPCardParams, currentYear: number, currentMonth: number): STPCardValidationState;

	static validationStateForExpirationMonth(expirationMonth: string): STPCardValidationState;

	static validationStateForExpirationYearInMonth(expirationYear: string, expirationMonth: string): STPCardValidationState;

	static validationStateForExpirationYearInMonthInCurrentYearCurrentMonth(expirationYear: string, expirationMonth: string, currentYear: number, currentMonth: number): STPCardValidationState;

	static validationStateForNumberValidatingCardBrand(cardNumber: string, validatingCardBrand: boolean): STPCardValidationState;
}

declare class STPCustomer extends NSObject {

	static alloc(): STPCustomer; // inherited from NSObject

	static customerWithStripeIDDefaultSourceSources(stripeID: string, defaultSource: STPSource, sources: NSArray<STPSource>): STPCustomer;

	static new(): STPCustomer; // inherited from NSObject

	readonly defaultSource: STPSource;

	readonly sources: NSArray<STPSource>;

	readonly stripeID: string;
}

declare class STPCustomerDeserializer extends NSObject {

	static alloc(): STPCustomerDeserializer; // inherited from NSObject

	static new(): STPCustomerDeserializer; // inherited from NSObject

	readonly customer: STPCustomer;

	readonly error: NSError;

	constructor(o: { data: NSData; urlResponse: NSURLResponse; error: NSError; });

	constructor(o: { JSONResponse: any; });

	initWithDataUrlResponseError(data: NSData, urlResponse: NSURLResponse, error: NSError): this;

	initWithJSONResponse(json: any): this;
}

declare const enum STPErrorCode {

	ConnectionError = 40,

	InvalidRequestError = 50,

	APIError = 60,

	CardError = 70,

	CancellationError = 80,

	CheckoutUnknownError = 5000,

	CheckoutTooManyAttemptsError = 5001
}

declare var STPErrorMessageKey: string;

declare var STPErrorParameterKey: string;

declare var STPExpiredCard: string;

interface STPFormEncodable extends NSObjectProtocol {

	additionalAPIParameters: NSDictionary<any, any>;
}
declare var STPFormEncodable: {

	prototype: STPFormEncodable;

	propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	rootObjectName(): string;
};

declare class STPImageLibrary extends NSObject {

	static alloc(): STPImageLibrary; // inherited from NSObject

	static amexCardImage(): UIImage;

	static applePayCardImage(): UIImage;

	static brandImageForCardBrand(brand: STPCardBrand): UIImage;

	static cvcImageForCardBrand(brand: STPCardBrand): UIImage;

	static dinersClubCardImage(): UIImage;

	static discoverCardImage(): UIImage;

	static jcbCardImage(): UIImage;

	static masterCardCardImage(): UIImage;

	static new(): STPImageLibrary; // inherited from NSObject

	static templatedBrandImageForCardBrand(brand: STPCardBrand): UIImage;

	static unknownCardCardImage(): UIImage;

	static visaCardImage(): UIImage;
}

declare var STPIncorrectCVC: string;

declare var STPIncorrectNumber: string;

declare var STPInvalidCVC: string;

declare var STPInvalidExpMonth: string;

declare var STPInvalidExpYear: string;

declare var STPInvalidNumber: string;

declare class STPPaymentActivityIndicatorView extends UIView {

	static alloc(): STPPaymentActivityIndicatorView; // inherited from NSObject

	static appearance(): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static new(): STPPaymentActivityIndicatorView; // inherited from NSObject

	animating: boolean;

	hidesWhenStopped: boolean;

	setAnimatingAnimated(animating: boolean, animated: boolean): void;
}

declare class STPPaymentCardTextField extends UIControl implements UIKeyInput {

	static alloc(): STPPaymentCardTextField; // inherited from NSObject

	static appearance(): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): STPPaymentCardTextField; // inherited from UIAppearance

	static brandImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static cvcImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static new(): STPPaymentCardTextField; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	readonly brandImage: UIImage;

	card: STPCardParams;

	readonly cardNumber: string;

	cardParams: STPCardParams;

	cornerRadius: number;

	cursorColor: UIColor;

	readonly cvc: string;

	cvcPlaceholder: string;

	delegate: STPPaymentCardTextFieldDelegate;

	readonly expirationMonth: number;

	expirationPlaceholder: string;

	readonly expirationYear: number;

	font: UIFont;

	readonly formattedExpirationMonth: string;

	readonly formattedExpirationYear: string;

	inputAccessoryView: UIView;

	readonly isValid: boolean;

	numberPlaceholder: string;

	placeholderColor: UIColor;

	textColor: UIColor;

	textErrorColor: UIColor;

	readonly valid: boolean;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly hasText: boolean; // inherited from UIKeyInput

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	brandImageRectForBounds(bounds: CGRect): CGRect;

	class(): typeof NSObject;

	clear(): void;

	commonInit(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	cvcFieldRectForBounds(bounds: CGRect): CGRect;

	deleteBackward(): void;

	expirationFieldRectForBounds(bounds: CGRect): CGRect;

	fieldsRectForBounds(bounds: CGRect): CGRect;

	insertText(text: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberFieldRectForBounds(bounds: CGRect): CGRect;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface STPPaymentCardTextFieldDelegate extends NSObjectProtocol {

	paymentCardTextFieldDidBeginEditingCVC?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingExpiration?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingNumber?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidChange?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingCVC?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingExpiration?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingNumber?(textField: STPPaymentCardTextField): void;
}
declare var STPPaymentCardTextFieldDelegate: {

	prototype: STPPaymentCardTextFieldDelegate;
};

declare class STPPaymentConfiguration extends NSObject implements NSCopying {

	static alloc(): STPPaymentConfiguration; // inherited from NSObject

	static new(): STPPaymentConfiguration; // inherited from NSObject

	static sharedConfiguration(): STPPaymentConfiguration;

	additionalPaymentMethods: STPPaymentMethodType;

	appleMerchantIdentifier: string;

	companyName: string;

	publishableKey: string;

	requiredBillingAddressFields: STPBillingAddressFields;

	requiredShippingAddressFields: PKAddressField;

	shippingType: STPShippingType;

	smsAutofillDisabled: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STPPaymentContext extends NSObject {

	static alloc(): STPPaymentContext; // inherited from NSObject

	static new(): STPPaymentContext; // inherited from NSObject

	readonly apiAdapter: STPBackendAPIAdapter;

	readonly configuration: STPPaymentConfiguration;

	delegate: STPPaymentContextDelegate;

	hostViewController: UIViewController;

	readonly loading: boolean;

	modalPresentationStyle: UIModalPresentationStyle;

	paymentAmount: number;

	paymentCurrency: string;

	readonly paymentMethods: NSArray<STPPaymentMethod>;

	paymentSummaryItems: NSArray<PKPaymentSummaryItem>;

	prefilledInformation: STPUserInformation;

	readonly selectedPaymentMethod: STPPaymentMethod;

	readonly selectedShippingMethod: PKShippingMethod;

	readonly shippingAddress: STPAddress;

	readonly shippingMethods: NSArray<PKShippingMethod>;

	readonly theme: STPTheme;

	constructor(o: { APIAdapter: STPBackendAPIAdapter; });

	constructor(o: { APIAdapter: STPBackendAPIAdapter; configuration: STPPaymentConfiguration; theme: STPTheme; });

	initWithAPIAdapter(apiAdapter: STPBackendAPIAdapter): this;

	initWithAPIAdapterConfigurationTheme(apiAdapter: STPBackendAPIAdapter, configuration: STPPaymentConfiguration, theme: STPTheme): this;

	presentPaymentMethodsViewController(): void;

	presentShippingViewController(): void;

	pushPaymentMethodsViewController(): void;

	pushShippingViewController(): void;

	requestPayment(): void;

	retryLoading(): void;
}

interface STPPaymentContextDelegate extends NSObjectProtocol {

	paymentContextDidChange(paymentContext: STPPaymentContext): void;

	paymentContextDidCreatePaymentResultCompletion(paymentContext: STPPaymentContext, paymentResult: STPPaymentResult, completion: (p1: NSError) => void): void;

	paymentContextDidFailToLoadWithError(paymentContext: STPPaymentContext, error: NSError): void;

	paymentContextDidFinishWithStatusError(paymentContext: STPPaymentContext, status: STPPaymentStatus, error: NSError): void;

	paymentContextDidUpdateShippingAddressCompletion?(paymentContext: STPPaymentContext, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void;
}
declare var STPPaymentContextDelegate: {

	prototype: STPPaymentContextDelegate;
};

interface STPPaymentMethod extends NSObjectProtocol {

	image: UIImage;

	label: string;

	templateImage: UIImage;
}
declare var STPPaymentMethod: {

	prototype: STPPaymentMethod;
};

declare const enum STPPaymentMethodType {

	None = 0,

	ApplePay = 1,

	All = 1
}

declare class STPPaymentMethodsViewController extends UIViewController {

	static alloc(): STPPaymentMethodsViewController; // inherited from NSObject

	static new(): STPPaymentMethodsViewController; // inherited from NSObject

	readonly delegate: STPPaymentMethodsViewControllerDelegate;

	prefilledInformation: STPUserInformation;

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; apiAdapter: STPBackendAPIAdapter; delegate: STPPaymentMethodsViewControllerDelegate; });

	constructor(o: { paymentContext: STPPaymentContext; });

	dismissWithCompletion(completion: () => void): void;

	initWithConfigurationThemeApiAdapterDelegate(configuration: STPPaymentConfiguration, theme: STPTheme, apiAdapter: STPBackendAPIAdapter, delegate: STPPaymentMethodsViewControllerDelegate): this;

	initWithPaymentContext(paymentContext: STPPaymentContext): this;
}

interface STPPaymentMethodsViewControllerDelegate extends NSObjectProtocol {

	paymentMethodsViewControllerDidFailToLoadWithError(paymentMethodsViewController: STPPaymentMethodsViewController, error: NSError): void;

	paymentMethodsViewControllerDidFinish(paymentMethodsViewController: STPPaymentMethodsViewController): void;

	paymentMethodsViewControllerDidSelectPaymentMethod(paymentMethodsViewController: STPPaymentMethodsViewController, paymentMethod: STPPaymentMethod): void;
}
declare var STPPaymentMethodsViewControllerDelegate: {

	prototype: STPPaymentMethodsViewControllerDelegate;
};

declare class STPPaymentResult extends NSObject {

	static alloc(): STPPaymentResult; // inherited from NSObject

	static new(): STPPaymentResult; // inherited from NSObject

	readonly source: STPSource;

	constructor(o: { source: STPSource; });

	initWithSource(source: STPSource): this;
}

declare const enum STPPaymentStatus {

	Success = 0,

	Error = 1,

	UserCancellation = 2
}

declare var STPProcessingError: string;

declare class STPShippingAddressViewController extends UIViewController {

	static alloc(): STPShippingAddressViewController; // inherited from NSObject

	static new(): STPShippingAddressViewController; // inherited from NSObject

	delegate: STPShippingAddressViewControllerDelegate;

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; currency: string; shippingAddress: STPAddress; selectedShippingMethod: PKShippingMethod; prefilledInformation: STPUserInformation; });

	constructor(o: { paymentContext: STPPaymentContext; });

	dismissWithCompletion(completion: () => void): void;

	initWithConfigurationThemeCurrencyShippingAddressSelectedShippingMethodPrefilledInformation(configuration: STPPaymentConfiguration, theme: STPTheme, currency: string, shippingAddress: STPAddress, selectedShippingMethod: PKShippingMethod, prefilledInformation: STPUserInformation): this;

	initWithPaymentContext(paymentContext: STPPaymentContext): this;
}

interface STPShippingAddressViewControllerDelegate extends NSObjectProtocol {

	shippingAddressViewControllerDidCancel(addressViewController: STPShippingAddressViewController): void;

	shippingAddressViewControllerDidEnterAddressCompletion(addressViewController: STPShippingAddressViewController, address: STPAddress, completion: (p1: STPShippingStatus, p2: NSError, p3: NSArray<PKShippingMethod>, p4: PKShippingMethod) => void): void;

	shippingAddressViewControllerDidFinishWithAddressShippingMethod(addressViewController: STPShippingAddressViewController, address: STPAddress, method: PKShippingMethod): void;
}
declare var STPShippingAddressViewControllerDelegate: {

	prototype: STPShippingAddressViewControllerDelegate;
};

declare const enum STPShippingStatus {

	Valid = 0,

	Invalid = 1
}

declare const enum STPShippingType {

	Shipping = 0,

	Delivery = 1
}

interface STPSource extends NSObjectProtocol {

	stripeID: string;
}
declare var STPSource: {

	prototype: STPSource;
};

declare class STPTheme extends NSObject implements NSCopying {

	static alloc(): STPTheme; // inherited from NSObject

	static defaultTheme(): STPTheme;

	static new(): STPTheme; // inherited from NSObject

	accentColor: UIColor;

	barStyle: UIBarStyle;

	emphasisFont: UIFont;

	errorColor: UIColor;

	font: UIFont;

	readonly largeFont: UIFont;

	primaryBackgroundColor: UIColor;

	primaryForegroundColor: UIColor;

	readonly quaternaryBackgroundColor: UIColor;

	secondaryBackgroundColor: UIColor;

	secondaryForegroundColor: UIColor;

	readonly smallFont: UIFont;

	readonly tertiaryBackgroundColor: UIColor;

	readonly tertiaryForegroundColor: UIColor;

	translucentNavigationBar: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STPToken extends NSObject implements STPAPIResponseDecodable, STPSource {

	static alloc(): STPToken; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPToken;

	static new(): STPToken; // inherited from NSObject

	static requiredFields(): NSArray<any>;

	readonly bankAccount: STPBankAccount;

	readonly card: STPCard;

	readonly created: Date;

	readonly livemode: boolean;

	readonly tokenId: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly stripeID: string; // inherited from STPSource

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class STPUserInformation extends NSObject {

	static alloc(): STPUserInformation; // inherited from NSObject

	static new(): STPUserInformation; // inherited from NSObject

	email: string;

	phone: string;
}

declare class Stripe extends NSObject {

	static alloc(): Stripe; // inherited from NSObject

	static canSubmitPaymentRequest(paymentRequest: PKPaymentRequest): boolean;

	static createTokenWithBankAccountCompletion(bankAccount: STPBankAccount, handler: (p1: STPToken, p2: NSError) => void): void;

	static createTokenWithBankAccountPublishableKeyCompletion(bankAccount: STPBankAccount, publishableKey: string, handler: (p1: STPToken, p2: NSError) => void): void;

	static createTokenWithCardCompletion(card: STPCard, handler: (p1: STPToken, p2: NSError) => void): void;

	static createTokenWithCardPublishableKeyCompletion(card: STPCard, publishableKey: string, handler: (p1: STPToken, p2: NSError) => void): void;

	static createTokenWithPaymentCompletion(payment: PKPayment, handler: (p1: STPToken, p2: NSError) => void): void;

	static defaultPublishableKey(): string;

	static deviceSupportsApplePay(): boolean;

	static disableAnalytics(): void;

	static new(): Stripe; // inherited from NSObject

	static paymentRequestWithMerchantIdentifier(merchantIdentifier: string): PKPaymentRequest;

	static setDefaultPublishableKey(publishableKey: string): void;
}

declare var StripeDomain: string;

declare var StripeVersionNumber: number;

declare var StripeVersionString: interop.Reference<number>;

declare function linkSTPAPIClientApplePayCategory(): void;

declare function linkUINavigationBarThemeCategory(): void;
