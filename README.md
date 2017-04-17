[![npm](https://img.shields.io/npm/v/nativescript-stripe.svg)](https://www.npmjs.com/package/nativescript-stripe)
[![npm](https://img.shields.io/npm/dt/nativescript-stripe.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-stripe)

# Installation
`tns plugin add nativescript-stripe`

# Configure

* [Android](#android)
* [iOS](#ios)

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

### Angular
Place the following in your main.ts

```ts
import * as app from 'application';
import * as platform from "platform";
declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "yourApiKey";
    }
});
```


## Usage

IMPORTANT: Make sure you include `xmlns:stripe="nativescript-stripe"` on the Page tag

### Using from view
```xml
<stripe:CreditCardView id="card"/>
```

#### Add extra details to card

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
### Using from code
```ts
import { Card } from 'nativescript-stripe';
const cc = new Card("1111111111111111",2,18,"123");
cc.name = "Osei Fortune";
```

### Get Token

```ts
import {Stripe} from 'nativescript-stripe';
const stripe = new Stripe('yourApiKey');
stripe.createToken(cc.card,(error,token)=>{
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
stripe.createToken(cc.card,(error,token)=>{
  if(!error){
    //Do something with your token;

  }else{
    console.log(error);
  }
});
```


# TODO
* Android Pay
* Apple Pay
