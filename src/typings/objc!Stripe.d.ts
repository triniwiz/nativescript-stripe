
declare class STPAPIClient extends NSObject {

	static alloc(): STPAPIClient; // inherited from NSObject

	static new(): STPAPIClient; // inherited from NSObject

	static sharedClient(): STPAPIClient;

	configuration: STPPaymentConfiguration;

	publishableKey: string;

	stripeAccount: string;

	constructor(o: { configuration: STPPaymentConfiguration; });

	constructor(o: { publishableKey: string; });

	confirmPaymentIntentWithParamsCompletion(paymentIntentParams: STPPaymentIntentParams, completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	createPaymentMethodWithParamsCompletion(paymentMethodParams: STPPaymentMethodParams, completion: (p1: STPPaymentMethod, p2: NSError) => void): void;

	createSourceWithParamsCompletion(params: STPSourceParams, completion: (p1: STPSource, p2: NSError) => void): void;

	createSourceWithPaymentCompletion(payment: PKPayment, completion: (p1: STPSource, p2: NSError) => void): void;

	createTokenForCVCUpdateCompletion(cvc: string, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithBankAccountCompletion(bankAccount: STPBankAccountParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithCardCompletion(card: STPCardParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithConnectAccountCompletion(account: STPConnectAccountParams, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithPaymentCompletion(payment: PKPayment, completion: (p1: STPToken, p2: NSError) => void): void;

	createTokenWithPersonalIDNumberCompletion(pii: string, completion: (p1: STPToken, p2: NSError) => void): void;

	initWithConfiguration(configuration: STPPaymentConfiguration): this;

	initWithPublishableKey(publishableKey: string): this;

	retrievePaymentIntentWithClientSecretCompletion(secret: string, completion: (p1: STPPaymentIntent, p2: NSError) => void): void;

	retrieveSourceWithIdClientSecretCompletion(identifier: string, secret: string, completion: (p1: STPSource, p2: NSError) => void): void;

	startPollingSourceWithIdClientSecretTimeoutCompletion(identifier: string, secret: string, timeout: number, completion: (p1: STPSource, p2: NSError) => void): void;

	stopPollingSourceWithId(identifier: string): void;

	uploadImagePurposeCompletion(image: UIImage, purpose: STPFilePurpose, completion: (p1: STPFile, p2: NSError) => void): void;
}

interface STPAPIResponseDecodable extends NSObjectProtocol {

	allResponseFields: NSDictionary<any, any>;
}
declare var STPAPIResponseDecodable: {

	prototype: STPAPIResponseDecodable;

	decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPAPIResponseDecodable;
};

declare class STPAddCardViewController extends STPCoreTableViewController {

	static alloc(): STPAddCardViewController; // inherited from NSObject

	static new(): STPAddCardViewController; // inherited from NSObject

	customFooterView: UIView;

	delegate: STPAddCardViewControllerDelegate;

	managedAccountCurrency: string;

	prefilledInformation: STPUserInformation;

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; });

	initWithConfigurationTheme(configuration: STPPaymentConfiguration, theme: STPTheme): this;
}

interface STPAddCardViewControllerDelegate extends NSObjectProtocol {

	addCardViewControllerDidCancel(addCardViewController: STPAddCardViewController): void;

	addCardViewControllerDidCreateSourceCompletion?(addCardViewController: STPAddCardViewController, source: STPSource, completion: (p1: NSError) => void): void;

	addCardViewControllerDidCreateTokenCompletion?(addCardViewController: STPAddCardViewController, token: STPToken, completion: (p1: NSError) => void): void;
}
declare var STPAddCardViewControllerDelegate: {

	prototype: STPAddCardViewControllerDelegate;
};

declare class STPAddress extends NSObject implements NSCopying, STPAPIResponseDecodable, STPFormEncodable {

	static alloc(): STPAddress; // inherited from NSObject

	static applePayAddressFieldsFromBillingAddressFields(billingAddressFields: STPBillingAddressFields): PKAddressField;

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPAddress;

	static new(): STPAddress; // inherited from NSObject

	static pkAddressFieldsFromStripeContactFields(contactFields: NSSet<string>): PKAddressField;

	static pkContactFieldsFromStripeContactFields(contactFields: NSSet<string>): NSSet<string>;

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	static shippingInfoForChargeWithAddressShippingMethod(address: STPAddress, method: PKShippingMethod): NSDictionary<any, any>;

	city: string;

	country: string;

	email: string;

	line1: string;

	line2: string;

	name: string;

	phone: string;

	postalCode: string;

	state: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { CNContact: CNContact; });

	constructor(o: { PKContact: PKContact; });

	PKContactValue(): PKContact;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsContentForBillingAddressFields(desiredFields: STPBillingAddressFields): boolean;

	containsContentForShippingAddressFields(desiredFields: NSSet<string>): boolean;

	containsRequiredFields(requiredFields: STPBillingAddressFields): boolean;

	containsRequiredShippingAddressFields(requiredFields: NSSet<string>): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithCNContact(contact: CNContact): this;

	initWithPKContact(contact: PKContact): this;

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

declare class STPApplePayPaymentOption extends NSObject implements STPPaymentOption {

	static alloc(): STPApplePayPaymentOption; // inherited from NSObject

	static new(): STPApplePayPaymentOption; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly label: string; // inherited from STPPaymentOption

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

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

	attachSourceToCustomerCompletion(source: STPSourceProtocol, completion: (p1: NSError) => void): void;

	detachSourceFromCustomerCompletion?(source: STPSourceProtocol, completion: (p1: NSError) => void): void;

	retrieveCustomer(completion: (p1: STPCustomer, p2: NSError) => void): void;

	selectDefaultCustomerSourceCompletion(source: STPSourceProtocol, completion: (p1: NSError) => void): void;

	updateCustomerWithShippingAddressCompletion?(shipping: STPAddress, completion: (p1: NSError) => void): void;
}
declare var STPBackendAPIAdapter: {

	prototype: STPBackendAPIAdapter;
};

declare class STPBankAccount extends NSObject implements STPAPIResponseDecodable, STPSourceProtocol {

	static alloc(): STPBankAccount; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPBankAccount;

	static new(): STPBankAccount; // inherited from NSObject

	readonly accountHolderName: string;

	readonly accountHolderType: STPBankAccountHolderType;

	readonly bankAccountId: string;

	readonly bankName: string;

	readonly country: string;

	readonly currency: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly metadata: NSDictionary<string, string>;

	readonly routingNumber: string;

	readonly status: STPBankAccountStatus;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly stripeID: string; // inherited from STPSourceProtocol

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

	VerificationFailed = 3,

	Errored = 4
}

declare const enum STPBillingAddressFields {

	None = 0,

	Zip = 1,

	Full = 2,

	Name = 3
}

declare class STPCard extends NSObject implements STPAPIResponseDecodable, STPPaymentOption, STPSourceProtocol {

	static alloc(): STPCard; // inherited from NSObject

	static brandFromString(string: string): STPCardBrand;

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPCard;

	static fundingFromString(string: string): STPCardFundingType;

	static new(): STPCard; // inherited from NSObject

	static stringFromBrand(brand: STPCardBrand): string;

	readonly address: STPAddress;

	readonly addressCity: string;

	readonly addressCountry: string;

	readonly addressLine1: string;

	readonly addressLine2: string;

	readonly addressState: string;

	readonly addressZip: string;

	readonly brand: STPCardBrand;

	readonly cardId: string;

	readonly country: string;

	readonly currency: string;

	readonly dynamicLast4: string;

	readonly expMonth: number;

	readonly expYear: number;

	readonly funding: STPCardFundingType;

	readonly isApplePayCard: boolean;

	readonly last4: string;

	readonly metadata: NSDictionary<string, string>;

	readonly name: string;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly label: string; // inherited from STPPaymentOption

	readonly stripeID: string; // inherited from STPSourceProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

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
}

declare const enum STPCardBrand {

	Visa = 0,

	Amex = 1,

	MasterCard = 2,

	Discover = 3,

	JCB = 4,

	DinersClub = 5,

	UnionPay = 6,

	Unknown = 7
}

declare var STPCardDeclined: string;

declare var STPCardErrorCodeKey: string;

declare const enum STPCardFundingType {

	Debit = 0,

	Credit = 1,

	Prepaid = 2,

	Other = 3
}

declare class STPCardParams extends NSObject implements NSCopying, STPFormEncodable {

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

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	last4(): string;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
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

	static lengthsForCardBrand(brand: STPCardBrand): NSSet<number>;

	static maxCVCLengthForCardBrand(brand: STPCardBrand): number;

	static maxLengthForCardBrand(brand: STPCardBrand): number;

	static new(): STPCardValidator; // inherited from NSObject

	static sanitizedNumericStringForString(string: string): string;

	static stringIsNumeric(string: string): boolean;

	static validationStateForCVCCardBrand(cvc: string, brand: STPCardBrand): STPCardValidationState;

	static validationStateForCard(card: STPCardParams): STPCardValidationState;

	static validationStateForExpirationMonth(expirationMonth: string): STPCardValidationState;

	static validationStateForExpirationYearInMonth(expirationYear: string, expirationMonth: string): STPCardValidationState;

	static validationStateForNumberValidatingCardBrand(cardNumber: string, validatingCardBrand: boolean): STPCardValidationState;
}

declare class STPConnectAccountParams extends NSObject implements STPFormEncodable {

	static alloc(): STPConnectAccountParams; // inherited from NSObject

	static new(): STPConnectAccountParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	readonly legalEntity: STPLegalEntityParams;

	readonly tosShownAndAccepted: number;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { legalEntity: STPLegalEntityParams; });

	constructor(o: { tosShownAndAccepted: boolean; legalEntity: STPLegalEntityParams; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLegalEntity(legalEntity: STPLegalEntityParams): this;

	initWithTosShownAndAcceptedLegalEntity(wasAccepted: boolean, legalEntity: STPLegalEntityParams): this;

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

declare var STPContactFieldEmailAddress: string;

declare var STPContactFieldName: string;

declare var STPContactFieldPhoneNumber: string;

declare var STPContactFieldPostalAddress: string;

declare class STPCoreScrollViewController extends STPCoreViewController {

	static alloc(): STPCoreScrollViewController; // inherited from NSObject

	static new(): STPCoreScrollViewController; // inherited from NSObject
}

declare class STPCoreTableViewController extends STPCoreScrollViewController {

	static alloc(): STPCoreTableViewController; // inherited from NSObject

	static new(): STPCoreTableViewController; // inherited from NSObject
}

declare class STPCoreViewController extends UIViewController {

	static alloc(): STPCoreViewController; // inherited from NSObject

	static new(): STPCoreViewController; // inherited from NSObject

	constructor(o: { theme: STPTheme; });

	initWithTheme(theme: STPTheme): this;
}

declare class STPCustomer extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPCustomer; // inherited from NSObject

	static customerWithStripeIDDefaultSourceSources(stripeID: string, defaultSource: STPSourceProtocol, sources: NSArray<STPSourceProtocol> | STPSourceProtocol[]): STPCustomer;

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPCustomer;

	static new(): STPCustomer; // inherited from NSObject

	readonly defaultSource: STPSourceProtocol;

	readonly shippingAddress: STPAddress;

	readonly sources: NSArray<STPSourceProtocol>;

	readonly stripeID: string;

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
}

declare class STPCustomerContext extends NSObject implements STPBackendAPIAdapter {

	static alloc(): STPCustomerContext; // inherited from NSObject

	static new(): STPCustomerContext; // inherited from NSObject

	includeApplePaySources: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { keyProvider: STPCustomerEphemeralKeyProvider; });

	attachSourceToCustomerCompletion(source: STPSourceProtocol, completion: (p1: NSError) => void): void;

	class(): typeof NSObject;

	clearCachedCustomer(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	detachSourceFromCustomerCompletion(source: STPSourceProtocol, completion: (p1: NSError) => void): void;

	initWithKeyProvider(keyProvider: STPCustomerEphemeralKeyProvider): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	retrieveCustomer(completion: (p1: STPCustomer, p2: NSError) => void): void;

	selectDefaultCustomerSourceCompletion(source: STPSourceProtocol, completion: (p1: NSError) => void): void;

	self(): this;

	updateCustomerWithShippingAddressCompletion(shipping: STPAddress, completion: (p1: NSError) => void): void;
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

interface STPCustomerEphemeralKeyProvider extends NSObjectProtocol {

	createCustomerKeyWithAPIVersionCompletion(apiVersion: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
}
declare var STPCustomerEphemeralKeyProvider: {

	prototype: STPCustomerEphemeralKeyProvider;
};

interface STPEphemeralKeyProvider extends STPCustomerEphemeralKeyProvider {
}
declare var STPEphemeralKeyProvider: {

	prototype: STPEphemeralKeyProvider;
};

declare const enum STPErrorCode {

	ConnectionError = 40,

	InvalidRequestError = 50,

	APIError = 60,

	CardError = 70,

	CancellationError = 80,

	EphemeralKeyDecodingError = 1000
}

declare var STPErrorMessageKey: string;

declare var STPErrorParameterKey: string;

declare var STPExpiredCard: string;

declare class STPFile extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPFile; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPFile;

	static new(): STPFile; // inherited from NSObject

	static stringFromPurpose(purpose: STPFilePurpose): string;

	readonly created: Date;

	readonly fileId: string;

	readonly purpose: STPFilePurpose;

	readonly size: number;

	readonly type: string;

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
}

declare const enum STPFilePurpose {

	IdentityDocument = 0,

	DisputeEvidence = 1,

	Unknown = 2
}

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

	static errorImageForCardBrand(brand: STPCardBrand): UIImage;

	static jcbCardImage(): UIImage;

	static masterCardCardImage(): UIImage;

	static new(): STPImageLibrary; // inherited from NSObject

	static templatedBrandImageForCardBrand(brand: STPCardBrand): UIImage;

	static unionPayCardImage(): UIImage;

	static unknownCardCardImage(): UIImage;

	static visaCardImage(): UIImage;
}

declare var STPIncorrectCVC: string;

declare var STPIncorrectNumber: string;

declare var STPInvalidCVC: string;

declare var STPInvalidExpMonth: string;

declare var STPInvalidExpYear: string;

declare var STPInvalidNumber: string;

interface STPIssuingCardEphemeralKeyProvider extends NSObjectProtocol {

	createIssuingCardKeyWithAPIVersionCompletion(apiVersion: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
}
declare var STPIssuingCardEphemeralKeyProvider: {

	prototype: STPIssuingCardEphemeralKeyProvider;
};

declare class STPLegalEntityParams extends STPPersonParams {

	static alloc(): STPLegalEntityParams; // inherited from NSObject

	static new(): STPLegalEntityParams; // inherited from NSObject

	additionalOwners: NSArray<STPPersonParams>;

	businessName: string;

	businessTaxId: string;

	businessVATId: string;

	entityTypeString: string;

	genderString: string;

	personalAddress: STPAddress;

	personalIdNumber: string;

	phoneNumber: string;

	ssnLast4: string;

	taxIdRegistrar: string;
}

declare class STPPaymentActivityIndicatorView extends UIView {

	static alloc(): STPPaymentActivityIndicatorView; // inherited from NSObject

	static appearance(): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPPaymentActivityIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentActivityIndicatorView; // inherited from UIAppearance

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

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): STPPaymentCardTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): STPPaymentCardTextField; // inherited from UIAppearance

	static brandImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static cvcImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static errorImageForCardBrand(cardBrand: STPCardBrand): UIImage;

	static new(): STPPaymentCardTextField; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	readonly brandImage: UIImage;

	readonly cardNumber: string;

	cardParams: STPCardParams;

	cornerRadius: number;

	countryCode: string;

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

	inputView: UIView;

	readonly isValid: boolean;

	numberPlaceholder: string;

	placeholderColor: UIColor;

	readonly postalCode: string;

	postalCodeEntryEnabled: boolean;

	postalCodePlaceholder: string;

	textColor: UIColor;

	textErrorColor: UIColor;

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

	passwordRules: UITextInputPasswordRules; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	smartDashesType: UITextSmartDashesType; // inherited from UITextInputTraits

	smartInsertDeleteType: UITextSmartInsertDeleteType; // inherited from UITextInputTraits

	smartQuotesType: UITextSmartQuotesType; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	brandImageRectForBounds(bounds: CGRect): CGRect;

	class(): typeof NSObject;

	clear(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deleteBackward(): void;

	fieldsRectForBounds(bounds: CGRect): CGRect;

	insertText(text: string): void;

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

interface STPPaymentCardTextFieldDelegate extends NSObjectProtocol {

	paymentCardTextFieldDidBeginEditing?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingCVC?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingExpiration?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingNumber?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidBeginEditingPostalCode?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidChange?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditing?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingCVC?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingExpiration?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingNumber?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldDidEndEditingPostalCode?(textField: STPPaymentCardTextField): void;

	paymentCardTextFieldWillEndEditingForReturn?(textField: STPPaymentCardTextField): void;
}
declare var STPPaymentCardTextFieldDelegate: {

	prototype: STPPaymentCardTextFieldDelegate;
};

declare class STPPaymentConfiguration extends NSObject implements NSCopying {

	static alloc(): STPPaymentConfiguration; // inherited from NSObject

	static new(): STPPaymentConfiguration; // inherited from NSObject

	static sharedConfiguration(): STPPaymentConfiguration;

	additionalPaymentOptions: STPPaymentOptionType;

	appleMerchantIdentifier: string;

	canDeletePaymentOptions: boolean;

	companyName: string;

	createCardSources: boolean;

	publishableKey: string;

	requiredBillingAddressFields: STPBillingAddressFields;

	requiredShippingAddressFields: NSSet<string>;

	shippingType: STPShippingType;

	stripeAccount: string;

	verifyPrefilledShippingAddress: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STPPaymentContext extends NSObject {

	static alloc(): STPPaymentContext; // inherited from NSObject

	static new(): STPPaymentContext; // inherited from NSObject

	addCardViewControllerFooterView: UIView;

	readonly apiAdapter: STPBackendAPIAdapter;

	readonly configuration: STPPaymentConfiguration;

	delegate: STPPaymentContextDelegate;

	hostViewController: UIViewController;

	largeTitleDisplayMode: UINavigationItemLargeTitleDisplayMode;

	readonly loading: boolean;

	modalPresentationStyle: UIModalPresentationStyle;

	paymentAmount: number;

	paymentCountry: string;

	paymentCurrency: string;

	readonly paymentOptions: NSArray<STPPaymentOption>;

	paymentOptionsViewControllerFooterView: UIView;

	paymentSummaryItems: NSArray<PKPaymentSummaryItem>;

	prefilledInformation: STPUserInformation;

	readonly selectedPaymentOption: STPPaymentOption;

	readonly selectedShippingMethod: PKShippingMethod;

	readonly shippingAddress: STPAddress;

	readonly shippingMethods: NSArray<PKShippingMethod>;

	readonly theme: STPTheme;

	constructor(o: { APIAdapter: STPBackendAPIAdapter; });

	constructor(o: { APIAdapter: STPBackendAPIAdapter; configuration: STPPaymentConfiguration; theme: STPTheme; });

	constructor(o: { customerContext: STPCustomerContext; });

	constructor(o: { customerContext: STPCustomerContext; configuration: STPPaymentConfiguration; theme: STPTheme; });

	initWithAPIAdapter(apiAdapter: STPBackendAPIAdapter): this;

	initWithAPIAdapterConfigurationTheme(apiAdapter: STPBackendAPIAdapter, configuration: STPPaymentConfiguration, theme: STPTheme): this;

	initWithCustomerContext(customerContext: STPCustomerContext): this;

	initWithCustomerContextConfigurationTheme(customerContext: STPCustomerContext, configuration: STPPaymentConfiguration, theme: STPTheme): this;

	presentPaymentOptionsViewController(): void;

	presentShippingViewController(): void;

	pushPaymentOptionsViewController(): void;

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

declare class STPPaymentIntent extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntent; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntent;

	static new(): STPPaymentIntent; // inherited from NSObject

	readonly amount: number;

	readonly canceledAt: Date;

	readonly captureMethod: STPPaymentIntentCaptureMethod;

	readonly clientSecret: string;

	readonly confirmationMethod: STPPaymentIntentConfirmationMethod;

	readonly created: Date;

	readonly currency: string;

	readonly livemode: boolean;

	readonly nextAction: STPPaymentIntentAction;

	readonly nextSourceAction: STPPaymentIntentAction;

	readonly paymentMethodId: string;

	readonly paymentMethodTypes: NSArray<number>;

	readonly receiptEmail: string;

	readonly sourceId: string;

	readonly status: STPPaymentIntentStatus;

	readonly stripeDescription: string;

	readonly stripeId: string;

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
}

declare class STPPaymentIntentAction extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntentAction; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntentAction;

	static new(): STPPaymentIntentAction; // inherited from NSObject

	readonly authorizeWithURL: STPPaymentIntentActionRedirectToURL;

	readonly redirectToURL: STPPaymentIntentActionRedirectToURL;

	readonly type: STPPaymentIntentActionType;

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
}

declare class STPPaymentIntentActionRedirectToURL extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentIntentActionRedirectToURL; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentIntentActionRedirectToURL;

	static new(): STPPaymentIntentActionRedirectToURL; // inherited from NSObject

	readonly returnURL: NSURL;

	readonly url: NSURL;

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
}

declare const enum STPPaymentIntentActionType {

	Unknown = 0,

	RedirectToURL = 1
}

declare const enum STPPaymentIntentCaptureMethod {

	Unknown = 0,

	Automatic = 1,

	Manual = 2
}

declare const enum STPPaymentIntentConfirmationMethod {

	Unknown = 0,

	Publishable = 1,

	Secret = 2
}

declare class STPPaymentIntentParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentIntentParams; // inherited from NSObject

	static new(): STPPaymentIntentParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	clientSecret: string;

	paymentMethodId: string;

	paymentMethodParams: STPPaymentMethodParams;

	receiptEmail: string;

	returnURL: string;

	returnUrl: string;

	savePaymentMethod: number;

	saveSourceToCustomer: number;

	sourceId: string;

	sourceParams: STPSourceParams;

	readonly stripeId: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { clientSecret: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithClientSecret(clientSecret: string): this;

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

declare const enum STPPaymentIntentSourceActionType {

	Unknown = 0,

	AuthorizeWithURL = 1
}

declare const enum STPPaymentIntentStatus {

	Unknown = 0,

	RequiresPaymentMethod = 1,

	RequiresSource = 1,

	RequiresConfirmation = 2,

	RequiresAction = 3,

	RequiresSourceAction = 3,

	Processing = 4,

	Succeeded = 5,

	RequiresCapture = 6,

	Canceled = 7
}

declare class STPPaymentMethod extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethod; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethod;

	static new(): STPPaymentMethod; // inherited from NSObject

	readonly billingDetails: STPPaymentMethodBillingDetails;

	readonly card: STPPaymentMethodCard;

	readonly cardPresent: STPPaymentMethodCardPresent;

	readonly created: Date;

	readonly customerId: string;

	readonly iDEAL: STPPaymentMethodiDEAL;

	readonly liveMode: boolean;

	readonly metadata: NSDictionary<string, string>;

	readonly stripeId: string;

	readonly type: STPPaymentMethodType;

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
}

declare class STPPaymentMethodAddress extends NSObject implements STPAPIResponseDecodable, STPFormEncodable {

	static alloc(): STPPaymentMethodAddress; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodAddress;

	static new(): STPPaymentMethodAddress; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	city: string;

	country: string;

	line1: string;

	line2: string;

	postalCode: string;

	state: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

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
}

declare class STPPaymentMethodBillingDetails extends NSObject implements STPAPIResponseDecodable, STPFormEncodable {

	static alloc(): STPPaymentMethodBillingDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodBillingDetails;

	static new(): STPPaymentMethodBillingDetails; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	address: STPPaymentMethodAddress;

	email: string;

	name: string;

	phone: string;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

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
}

declare class STPPaymentMethodCard extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCard; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCard;

	static new(): STPPaymentMethodCard; // inherited from NSObject

	readonly brand: STPCardBrand;

	readonly checks: STPPaymentMethodCardChecks;

	readonly country: string;

	readonly expMonth: number;

	readonly expYear: number;

	readonly fingerprint: string;

	readonly funding: string;

	readonly last4: string;

	readonly threeDSecureUsage: STPPaymentMethodThreeDSecureUsage;

	readonly wallet: STPPaymentMethodCardWallet;

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
}

declare const enum STPPaymentMethodCardCheckResult {

	Pass = 0,

	Failed = 1,

	Unavailable = 2,

	Unchecked = 3,

	Unknown = 4
}

declare class STPPaymentMethodCardChecks extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardChecks; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardChecks;

	static new(): STPPaymentMethodCardChecks; // inherited from NSObject

	readonly addressLine1Check: STPPaymentMethodCardCheckResult;

	readonly addressPostalCodeCheck: STPPaymentMethodCardCheckResult;

	readonly cvcCheck: STPPaymentMethodCardCheckResult;

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
}

declare class STPPaymentMethodCardParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodCardParams; // inherited from NSObject

	static new(): STPPaymentMethodCardParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	cvc: string;

	expMonth: number;

	expYear: number;

	number: string;

	token: string;

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

declare class STPPaymentMethodCardPresent extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardPresent; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardPresent;

	static new(): STPPaymentMethodCardPresent; // inherited from NSObject

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
}

declare class STPPaymentMethodCardWallet extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardWallet; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardWallet;

	static new(): STPPaymentMethodCardWallet; // inherited from NSObject

	readonly masterpass: STPPaymentMethodCardWalletMasterpass;

	readonly type: STPPaymentMethodCardWalletType;

	readonly visaCheckout: STPPaymentMethodCardWalletVisaCheckout;

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
}

declare class STPPaymentMethodCardWalletMasterpass extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardWalletMasterpass; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardWalletMasterpass;

	static new(): STPPaymentMethodCardWalletMasterpass; // inherited from NSObject

	readonly billingAddress: STPPaymentMethodAddress;

	readonly email: string;

	readonly name: string;

	readonly shippingAddress: STPPaymentMethodAddress;

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
}

declare const enum STPPaymentMethodCardWalletType {

	AmexExpressCheckout = 0,

	ApplePay = 1,

	GooglePay = 2,

	Masterpass = 3,

	SamsungPay = 4,

	VisaCheckout = 5,

	Unknown = 6
}

declare class STPPaymentMethodCardWalletVisaCheckout extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodCardWalletVisaCheckout; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodCardWalletVisaCheckout;

	static new(): STPPaymentMethodCardWalletVisaCheckout; // inherited from NSObject

	readonly billingAddress: STPPaymentMethodAddress;

	readonly email: string;

	readonly name: string;

	readonly shippingAddress: STPPaymentMethodAddress;

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
}

declare class STPPaymentMethodParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodParams; // inherited from NSObject

	static new(): STPPaymentMethodParams; // inherited from NSObject

	static paramsWithCardBillingDetailsMetadata(card: STPPaymentMethodCardParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static paramsWithiDEALBillingDetailsMetadata(iDEAL: STPPaymentMethodiDEALParams, billingDetails: STPPaymentMethodBillingDetails, metadata: NSDictionary<string, string>): STPPaymentMethodParams;

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	billingDetails: STPPaymentMethodBillingDetails;

	card: STPPaymentMethodCardParams;

	iDEAL: STPPaymentMethodiDEALParams;

	metadata: NSDictionary<string, string>;

	rawTypeString: string;

	readonly type: STPPaymentMethodType;

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

declare class STPPaymentMethodThreeDSecureUsage extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodThreeDSecureUsage; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodThreeDSecureUsage;

	static new(): STPPaymentMethodThreeDSecureUsage; // inherited from NSObject

	readonly supported: boolean;

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
}

declare const enum STPPaymentMethodType {

	Card = 0,

	iDEAL = 1,

	CardPresent = 2,

	Unknown = 3
}

declare class STPPaymentMethodiDEAL extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPPaymentMethodiDEAL; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPPaymentMethodiDEAL;

	static new(): STPPaymentMethodiDEAL; // inherited from NSObject

	readonly bankIdentifierCode: string;

	readonly bankName: string;

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
}

declare class STPPaymentMethodiDEALParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPaymentMethodiDEALParams; // inherited from NSObject

	static new(): STPPaymentMethodiDEALParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	bankName: string;

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

interface STPPaymentOption extends NSObjectProtocol {

	image: UIImage;

	label: string;

	templateImage: UIImage;
}
declare var STPPaymentOption: {

	prototype: STPPaymentOption;
};

declare const enum STPPaymentOptionType {

	None = 0,

	ApplePay = 1,

	All = 1
}

declare class STPPaymentOptionsViewController extends STPCoreViewController {

	static alloc(): STPPaymentOptionsViewController; // inherited from NSObject

	static new(): STPPaymentOptionsViewController; // inherited from NSObject

	addCardViewControllerFooterView: UIView;

	readonly delegate: STPPaymentOptionsViewControllerDelegate;

	paymentOptionsViewControllerFooterView: UIView;

	prefilledInformation: STPUserInformation;

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; apiAdapter: STPBackendAPIAdapter; delegate: STPPaymentOptionsViewControllerDelegate; });

	constructor(o: { configuration: STPPaymentConfiguration; theme: STPTheme; customerContext: STPCustomerContext; delegate: STPPaymentOptionsViewControllerDelegate; });

	constructor(o: { paymentContext: STPPaymentContext; });

	dismissWithCompletion(completion: () => void): void;

	initWithConfigurationThemeApiAdapterDelegate(configuration: STPPaymentConfiguration, theme: STPTheme, apiAdapter: STPBackendAPIAdapter, delegate: STPPaymentOptionsViewControllerDelegate): this;

	initWithConfigurationThemeCustomerContextDelegate(configuration: STPPaymentConfiguration, theme: STPTheme, customerContext: STPCustomerContext, delegate: STPPaymentOptionsViewControllerDelegate): this;

	initWithPaymentContext(paymentContext: STPPaymentContext): this;
}

interface STPPaymentOptionsViewControllerDelegate extends NSObjectProtocol {

	paymentOptionsViewControllerDidCancel(paymentOptionsViewController: STPPaymentOptionsViewController): void;

	paymentOptionsViewControllerDidFailToLoadWithError(paymentOptionsViewController: STPPaymentOptionsViewController, error: NSError): void;

	paymentOptionsViewControllerDidFinish(paymentOptionsViewController: STPPaymentOptionsViewController): void;

	paymentOptionsViewControllerDidSelectPaymentOption?(paymentOptionsViewController: STPPaymentOptionsViewController, paymentOption: STPPaymentOption): void;
}
declare var STPPaymentOptionsViewControllerDelegate: {

	prototype: STPPaymentOptionsViewControllerDelegate;
};

declare class STPPaymentResult extends NSObject {

	static alloc(): STPPaymentResult; // inherited from NSObject

	static new(): STPPaymentResult; // inherited from NSObject

	readonly source: STPSourceProtocol;

	constructor(o: { source: STPSourceProtocol; });

	initWithSource(source: STPSourceProtocol): this;
}

declare const enum STPPaymentStatus {

	Success = 0,

	Error = 1,

	UserCancellation = 2
}

declare class STPPersonParams extends NSObject implements STPFormEncodable {

	static alloc(): STPPersonParams; // inherited from NSObject

	static new(): STPPersonParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	address: STPAddress;

	dateOfBirth: NSDateComponents;

	firstName: string;

	lastName: string;

	maidenName: string;

	verification: STPVerificationParams;

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

declare var STPProcessingError: string;

declare class STPRedirectContext extends NSObject {

	static alloc(): STPRedirectContext; // inherited from NSObject

	static new(): STPRedirectContext; // inherited from NSObject

	readonly state: STPRedirectContextState;

	constructor(o: { paymentIntent: STPPaymentIntent; completion: (p1: string, p2: NSError) => void; });

	constructor(o: { source: STPSource; completion: (p1: string, p2: string, p3: NSError) => void; });

	cancel(): void;

	initWithPaymentIntentCompletion(paymentIntent: STPPaymentIntent, completion: (p1: string, p2: NSError) => void): this;

	initWithSourceCompletion(source: STPSource, completion: (p1: string, p2: string, p3: NSError) => void): this;

	startRedirectFlowFromViewController(presentingViewController: UIViewController): void;

	startSafariAppRedirectFlow(): void;

	startSafariViewControllerRedirectFlowFromViewController(presentingViewController: UIViewController): void;
}

declare const enum STPRedirectContextState {

	NotStarted = 0,

	InProgress = 1,

	Cancelled = 2,

	Completed = 3
}

declare class STPShippingAddressViewController extends STPCoreTableViewController {

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

declare class STPSource extends NSObject implements STPAPIResponseDecodable, STPPaymentOption, STPSourceProtocol {

	static alloc(): STPSource; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSource;

	static new(): STPSource; // inherited from NSObject

	readonly amount: number;

	readonly cardDetails: STPSourceCardDetails;

	readonly clientSecret: string;

	readonly created: Date;

	readonly currency: string;

	readonly details: NSDictionary<any, any>;

	readonly flow: STPSourceFlow;

	readonly livemode: boolean;

	readonly metadata: NSDictionary<string, string>;

	readonly owner: STPSourceOwner;

	readonly receiver: STPSourceReceiver;

	readonly redirect: STPSourceRedirect;

	readonly sepaDebitDetails: STPSourceSEPADebitDetails;

	readonly status: STPSourceStatus;

	readonly type: STPSourceType;

	readonly usage: STPSourceUsage;

	readonly verification: STPSourceVerification;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly image: UIImage; // inherited from STPPaymentOption

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly label: string; // inherited from STPPaymentOption

	readonly stripeID: string; // inherited from STPSourceProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly templateImage: UIImage; // inherited from STPPaymentOption

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

declare const enum STPSourceCard3DSecureStatus {

	Required = 0,

	Optional = 1,

	NotSupported = 2,

	Unknown = 3
}

declare class STPSourceCardDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceCardDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceCardDetails;

	static new(): STPSourceCardDetails; // inherited from NSObject

	readonly brand: STPCardBrand;

	readonly country: string;

	readonly expMonth: number;

	readonly expYear: number;

	readonly funding: STPCardFundingType;

	readonly isApplePayCard: boolean;

	readonly last4: string;

	readonly threeDSecure: STPSourceCard3DSecureStatus;

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
}

declare const enum STPSourceFlow {

	None = 0,

	Redirect = 1,

	CodeVerification = 2,

	Receiver = 3,

	Unknown = 4
}

declare class STPSourceOwner extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceOwner; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceOwner;

	static new(): STPSourceOwner; // inherited from NSObject

	readonly address: STPAddress;

	readonly email: string;

	readonly name: string;

	readonly phone: string;

	readonly verifiedAddress: STPAddress;

	readonly verifiedEmail: string;

	readonly verifiedName: string;

	readonly verifiedPhone: string;

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
}

declare class STPSourceParams extends NSObject implements NSCopying, STPFormEncodable {

	static alipayParamsWithAmountCurrencyReturnURL(amount: number, currency: string, returnURL: string): STPSourceParams;

	static alipayReusableParamsWithCurrencyReturnURL(currency: string, returnURL: string): STPSourceParams;

	static alloc(): STPSourceParams; // inherited from NSObject

	static bancontactParamsWithAmountNameReturnURLStatementDescriptor(amount: number, name: string, returnURL: string, statementDescriptor: string): STPSourceParams;

	static cardParamsWithCard(card: STPCardParams): STPSourceParams;

	static epsParamsWithAmountNameReturnURLStatementDescriptor(amount: number, name: string, returnURL: string, statementDescriptor: string): STPSourceParams;

	static giropayParamsWithAmountNameReturnURLStatementDescriptor(amount: number, name: string, returnURL: string, statementDescriptor: string): STPSourceParams;

	static idealParamsWithAmountNameReturnURLStatementDescriptorBank(amount: number, name: string, returnURL: string, statementDescriptor: string, bank: string): STPSourceParams;

	static masterpassParamsWithCartIdTransactionId(cartId: string, transactionId: string): STPSourceParams;

	static multibancoParamsWithAmountReturnURLEmail(amount: number, returnURL: string, email: string): STPSourceParams;

	static new(): STPSourceParams; // inherited from NSObject

	static p24ParamsWithAmountCurrencyEmailNameReturnURL(amount: number, currency: string, email: string, name: string, returnURL: string): STPSourceParams;

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	static sepaDebitParamsWithNameIbanAddressLine1CityPostalCodeCountry(name: string, iban: string, addressLine1: string, city: string, postalCode: string, country: string): STPSourceParams;

	static sofortParamsWithAmountReturnURLCountryStatementDescriptor(amount: number, returnURL: string, country: string, statementDescriptor: string): STPSourceParams;

	static threeDSecureParamsWithAmountCurrencyReturnURLCard(amount: number, currency: string, returnURL: string, card: string): STPSourceParams;

	static visaCheckoutParamsWithCallId(callId: string): STPSourceParams;

	amount: number;

	currency: string;

	flow: STPSourceFlow;

	metadata: NSDictionary<any, any>;

	owner: NSDictionary<any, any>;

	rawTypeString: string;

	redirect: NSDictionary<any, any>;

	token: string;

	type: STPSourceType;

	usage: STPSourceUsage;

	additionalAPIParameters: NSDictionary<any, any>; // inherited from STPFormEncodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

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

interface STPSourceProtocol extends NSObjectProtocol {

	stripeID: string;
}
declare var STPSourceProtocol: {

	prototype: STPSourceProtocol;
};

declare class STPSourceReceiver extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceReceiver; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceReceiver;

	static new(): STPSourceReceiver; // inherited from NSObject

	readonly address: string;

	readonly amountCharged: number;

	readonly amountReceived: number;

	readonly amountReturned: number;

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
}

declare class STPSourceRedirect extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceRedirect; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceRedirect;

	static new(): STPSourceRedirect; // inherited from NSObject

	readonly returnURL: NSURL;

	readonly status: STPSourceRedirectStatus;

	readonly url: NSURL;

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
}

declare const enum STPSourceRedirectStatus {

	Pending = 0,

	Succeeded = 1,

	Failed = 2,

	Unknown = 3
}

declare class STPSourceSEPADebitDetails extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceSEPADebitDetails; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceSEPADebitDetails;

	static new(): STPSourceSEPADebitDetails; // inherited from NSObject

	readonly bankCode: string;

	readonly country: string;

	readonly fingerprint: string;

	readonly last4: string;

	readonly mandateReference: string;

	readonly mandateURL: NSURL;

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
}

declare const enum STPSourceStatus {

	Pending = 0,

	Chargeable = 1,

	Consumed = 2,

	Canceled = 3,

	Failed = 4,

	Unknown = 5
}

declare const enum STPSourceType {

	Bancontact = 0,

	Card = 1,

	Giropay = 2,

	IDEAL = 3,

	SEPADebit = 4,

	Sofort = 5,

	ThreeDSecure = 6,

	Alipay = 7,

	P24 = 8,

	EPS = 9,

	Multibanco = 10,

	Unknown = 11
}

declare const enum STPSourceUsage {

	Reusable = 0,

	SingleUse = 1,

	Unknown = 2
}

declare class STPSourceVerification extends NSObject implements STPAPIResponseDecodable {

	static alloc(): STPSourceVerification; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPSourceVerification;

	static new(): STPSourceVerification; // inherited from NSObject

	readonly attemptsRemaining: number;

	readonly status: STPSourceVerificationStatus;

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
}

declare const enum STPSourceVerificationStatus {

	Pending = 0,

	Succeeded = 1,

	Failed = 2,

	Unknown = 3
}

declare var STPStripeErrorCodeKey: string;

declare var STPStripeErrorTypeKey: string;

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

declare class STPToken extends NSObject implements STPAPIResponseDecodable, STPSourceProtocol {

	static alloc(): STPToken; // inherited from NSObject

	static decodedObjectFromAPIResponse(response: NSDictionary<any, any>): STPToken;

	static new(): STPToken; // inherited from NSObject

	readonly bankAccount: STPBankAccount;

	readonly card: STPCard;

	readonly created: Date;

	readonly livemode: boolean;

	readonly tokenId: string;

	readonly type: STPTokenType;

	readonly allResponseFields: NSDictionary<any, any>; // inherited from STPAPIResponseDecodable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly stripeID: string; // inherited from STPSourceProtocol

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

declare const enum STPTokenType {

	Account = 0,

	BankAccount = 1,

	Card = 2,

	PII = 3,

	CVCUpdate = 4
}

declare class STPUserInformation extends NSObject implements NSCopying {

	static alloc(): STPUserInformation; // inherited from NSObject

	static new(): STPUserInformation; // inherited from NSObject

	billingAddress: STPAddress;

	shippingAddress: STPAddress;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class STPVerificationParams extends NSObject implements STPFormEncodable {

	static alloc(): STPVerificationParams; // inherited from NSObject

	static new(): STPVerificationParams; // inherited from NSObject

	static propertyNamesToFormFieldNamesMapping(): NSDictionary<any, any>;

	static rootObjectName(): string;

	document: string;

	documentBack: string;

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

declare class Stripe extends NSObject {

	static alloc(): Stripe; // inherited from NSObject

	static canSubmitPaymentRequest(paymentRequest: PKPaymentRequest): boolean;

	static defaultPublishableKey(): string;

	static deviceSupportsApplePay(): boolean;

	static handleStripeURLCallbackWithURL(url: NSURL): boolean;

	static new(): Stripe; // inherited from NSObject

	static paymentRequestWithMerchantIdentifier(merchantIdentifier: string): PKPaymentRequest;

	static paymentRequestWithMerchantIdentifierCountryCurrency(merchantIdentifier: string, countryCode: string, currencyCode: string): PKPaymentRequest;

	static setDefaultPublishableKey(publishableKey: string): void;
}

declare var StripeDomain: string;

declare var StripeVersionNumber: number;

declare var StripeVersionString: interop.Reference<number>;

declare function linkNSErrorCategory(): void;

declare function linkSTPAPIClientApplePayCategory(): void;

declare function linkUINavigationBarThemeCategory(): void;
