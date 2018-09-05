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

## IOS
Place the following in your app.js before `app.start`
JavaScript
```js
var app = require('application');
var platform = ('platform');
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
```
Place the following in your app.ts before `app.start`

TypeScript
```ts
import * as app from 'application';
import * as platform from 'platform';
declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
```

## Angular

```ts
import { Stripe, (etc.) } from "nativescript-stripe";
```

## Usage

This plugin supports the Stripe Custom Integration and the Stripe Standard Integration.

### Custom Integration

IMPORTANT: Make sure you include `xmlns:stripe="nativescript-stripe"` on the Page tag

#### Using from view
```xml
<stripe:CreditCardView id="card"/>
```

##### Add extra details to card

```js
const ccView = page.getViewById("card");
const cc = ccView.card;
cc.name = "Osei Fortune";
```

```ts
import { CreditCardView, Card } from 'nativescript-stripe';
const ccView:CreditCardView = page.getViewById("card");
const cc:Card = ccView.card;
cc.name = "Osei Fortune";
```
#### Using from code
```ts
import { Card } from 'nativescript-stripe';
const cc = new Card("1111111111111111",2,18,"123");
cc.name = "Osei Fortune";
```

#### Get Token

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

```js
var Stripe =require('nativescript-stripe').Stripe;
const stripe = new Stripe('yourApiKey');
stripe.createToken(cc,(error,token)=>{
  if(!error){
    //Do something with your token;

  }else{
    console.log(error);
  }
});
```

### Standard Integration

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

See `demo-angular` for example code.

See [Stripe Docs](https://stripe.com/docs/mobile) for more information.

# TODO
* Android Pay
* Apple Pay (supported by Standard Integration, not by Custom Integration)
