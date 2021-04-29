# :warning: :warning: This project has moved to https://github.com/triniwiz/nativescript-plugins/tree/master/packages/nativescript-stripe

[![npm](https://img.shields.io/npm/v/nativescript-stripe.svg)](https://www.npmjs.com/package/nativescript-stripe)
[![npm](https://img.shields.io/npm/dt/nativescript-stripe.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-stripe)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-stripe.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-stripe)
# Installation

**Requires I0S 9.x +**

#### [NativeScript 7+](https://github.com/triniwiz/nativescript-plugins)
* `npm i @triniwiz/nativescript-stripe`

#### NativeScript 4x

* `tns plugin add nativescript-stripe`

#### NativeScript 3x

* `tns plugin add nativescript-stripe@3.3.0`

#### NativeScript 2x

* `tns plugin add nativescript-stripe@1.0.1`


# Configure

* [Android](#android)
* [iOS](#ios)
* [Angular](#angular)

## Android

Stripe Android [v10.2.1 SDK](https://github.com/stripe/stripe-android/releases/tag/v10.2.1) is being used

## iOS

Stripe [iOS 19.0.1 SDK](https://github.com/stripe/stripe-ios/releases/tag/v19.0.1) (pod) is being used

## Angular
To use the Custom Integration's CreditCardView in Angular,
register the Angular wrapper in the main module (typically `app.module.ts`), as follows:

```ts
...
import { CreditCardViewModule } from "nativescript-stripe/angular";
...
@NgModule({
  imports: [
    ...
    CreditCardViewModule,
    ...
  ],
  ...
})
export class AppModule { }
```

# Usage

IMPORTANT: Make sure you include `xmlns:stripe="nativescript-stripe"` on the Page tag

### Using from view
```xml
<stripe:CreditCardView id="card"/>
```

#### Add extra details to card

JavaScript
```js
const ccView = page.getViewById("card");
const cc = ccView.card;
cc.name = "Osei Fortune";
```

TypeScript
```ts
import { CreditCardView, Card } from 'nativescript-stripe';
const ccView:CreditCardView = page.getViewById("card");
const cc:Card = ccView.card;
cc.name = "Osei Fortune";
```
### Using from code
```ts
import { Card } from 'nativescript-stripe';
const cc = new Card("1111111111111111",2,18,"123");
cc.name = "Osei Fortune";
```

## Standard Integration

The `demo` and `demo-angular` folders contain demos that use the Standard Integration.
They can be used as a starting point, and provide information on how to invoke the
Standard Integration components. For more information, see the README in the
demo folders.

Set Stripe configuration values:

```ts
StripeConfig.shared().backendAPI = <Your API Service>;
StripeConfig.shared().publishableKey = <Your Stripe Key>;
StripeConfig.shared().companyName = <Your Company Name>;
// To support Apple Pay, set appleMerchantID.
StripeConfig.shared().appleMerchantID = <Your Apple Merchant ID>;
```

Create a Customer Session
```ts
let customerSession = new StripeCustomerSession();
```

Create a Payment Session
```ts
let paymentSession = new StripePaymentSession(page, customerSession, price, "usd", listener);
```

See [Stripe Docs](https://stripe.com/docs/mobile) for more information.

# Strong Customer Authentication
PSD2 regulations in Europe will require [Strong Customer Authentication](https://stripe.com/payments/strong-customer-authentication)
for some credit card purchases. Stripe supports this, though most of the work to make it happen is
required on the backend server and in the mobile app, outside the `nativescript-stripe` plugin.

To support SCA, follow the instructions for [iOS](https://stripe.com/docs/payments/payment-intents/ios)
and [Android](https://stripe.com/docs/payments/payment-intents/android) on using `PaymentIntents` instead
of tokens when interacting with your backend server. The `nativescript-stripe` plugin has
cross-platform data structures and method calls that might be helpful. In `index.d.ts` see:
* `PaymentMethod` and related classes
* `StripePaymentIntent` and related classes
* Methods `Stripe.createPaymentMethod`, `Stripe.retrievePaymentIntent`, `Stripe.confirmPaymentIntent` and `Stripe.confirmSetupIntent`

## Handling secondary customer input
SCA requires the customer to enter additional information with some charge cards. Stripe takes care of this
if you properly handle the redirect from the `StripePaymentIntent` returned from the server.

If you're using the [automatic confirmation flow](https://stripe.com/docs/payments/payment-intents/ios#automatic-confirmation-ios), `confirmPaymentIntent` and `confirmSetupIntent` will automatically manage the SCA validation by showing and validating the payment authentification.

If you're using the [manual confirmation flow](https://stripe.com/docs/payments/payment-intents/ios#manual-confirmation-ios), where back-end creates the `PaymentIntent`|`SetupIntent` and requires an Intent authentification from the customer, `authenticatePaymentIntent` and `authenticateSetupIntent` will allow to manage that extra step before sending back the Intent to your server.

## Status
`demo-angular` now supports `SetupIntent` and `PaymentIntent` SCA integration. Any credit card verification will be automatically prompted to the user.

# Known Issues

## `const enum` not found
When building with NativeScript v6, it builds using the webpack-only flow in "transpileOnly" mode. A webpack [issue](https://github.com/NativeScript/nativescript-dev-webpack/issues/927) means that `const enum` values cannot be found in the final output.

This problem is not present in Angular projects and likely won't be an issue if you do not use any of the exported enums.

Unfortunately, the only fix I've found for this is to follow the advice in that issue and modify `webpack.config.js` in your app to set `transpileOnly` to `false`.

Note: This may no longer be needed once this TypeScript [bug](https://github.com/Microsoft/TypeScript/issues/16671) is fixed.

# TODO
* Android Pay
* Apple Pay (supported by Standard Integration, not by Custom Integration)
