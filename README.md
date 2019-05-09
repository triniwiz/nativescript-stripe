[![npm](https://img.shields.io/npm/v/nativescript-stripe.svg)](https://www.npmjs.com/package/nativescript-stripe)
[![npm](https://img.shields.io/npm/dt/nativescript-stripe.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-stripe)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-stripe.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-stripe)
# Installation

**Requires I0S 9.x +**


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

Stripe Android [v8.7 SDK](https://github.com/stripe/stripe-android/releases/tag/v8.7.0) is being used

## iOS

Stripe [iOS 15 SDK](https://github.com/stripe/stripe-ios/releases/tag/v15.0.1) (pod) is being used

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

### Get Token

TypeScript
```ts
import {Stripe} from 'nativescript-stripe';
const stripe = new Stripe('yourApiKey');
stripe.createToken(cc, (error,token)=>{
  if(!error){
    //Do something with your token;

  }else{
    console.log(error);
  }
});
```

JavaScript
```js
var Stripe = require('nativescript-stripe').Stripe;
const stripe = new Stripe('yourApiKey');
stripe.createToken(cc, (error,token)=>{
  if(!error){
    //Do something with your token;

  }else{
    console.log(error);
  }
});
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
and [Android](https://stripe.com/docs/payments/payment-intents/android) on using `PaymentIntent`s instead
of tokens when interacting with your backend server. The `nativescript-stripe` plugin has
cross-platform data structures and method calls that might be helpful. In `index.d.ts` see:
* `PaymentMethod` and related classes
* `StripePaymentIntent` and related classes
* Methods `Stripe.createPaymentMethod`, `Stripe.retrievePaymentIntent`, and `Stripe.confirmPaymentIntent`

## Handling secondary customer input
SCA requires the customer to enter additional information with some charge cards. Stripe takes care of this
if you properly handle the redirect from the `StripePaymentIntent` returned from the server.

On iOS, `StripeRedirectSession` can help manage the interaction with the customer.

On Android, it appears that (as of May 1, 2019) the Android SDK regarding SCA is still undergoing heavy
development and not everything is working as well as it could. For example, the new methods in `Stripe`
cannot be called on the UI thread in Android (but they can on iOS), and the technique for handling
secondary customer interaction is difficult. Hopefully these will be addressed soon.

## Status
Finally, keep in mind that while these SCA support classes and methods have been added to the plugin, they
have not yet been thoroughly tested. The `demo` and `demo-angular` apps do *not* (yet) support `PaymentIntent`,
although they have been modified to work with the current Stripe example backend
(which does fully support `PaymentIntent`). Any help updating the demo apps would be greatly appreciated.

# TODO
* Android Pay
* Apple Pay (supported by Standard Integration, not by Custom Integration)
