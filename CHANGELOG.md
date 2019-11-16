Changelog

## 6.2.0 (2019, November 16)
### Updates
- Builds correctly on NS v6 (see README note)

### Fixes
- [(# 90)](https://github.com/triniwiz/nativescript-stripe/issues/90) Not building with NS 6

## 6.1.0 (2019, November 6)
### Updates
- Ability to set accountId `stripe.setStripeAccount('xxx')`

## 6.0.0 (2019, August 25)
### Updates
- SDK Updates for SCA compliance

### Implements
- [(# 78)](https://github.com/triniwiz/nativescript-stripe/issues/78) Stripe SDKs out of date; Upgrade needed for latest SCA process
- [(# 45)](https://github.com/triniwiz/nativescript-stripe/issues/45) EU Strong Customer Authentication support integration

### Breaking Changes
- Sources and Tokens are now deprecated, uses Payment Methods and Payment Intents instead
- [Back-end test app](https://github.com/stripe/example-ios-backend) needs to be updated if you want to use the plugin with Intents.
- Stripe Service `completeCharge` has been renamed to `capturePayment`

## 5.5.0 (2019, August 20)
### Updates
- Nativescript 6 compatibility

### Warning
- Consider freezing your version to 5.4.2 if using {N} < 6.0 (not tested)

## 5.4.2 (2019, June 28)
### Implements
- [(# 75)](https://github.com/triniwiz/nativescript-stripe/issues/75) Remove calls to deprecated utils.ios.getter.

## 5.4.1 (2019, June 14)
### Implements
- [(# 71)](https://github.com/triniwiz/nativescript-stripe/issues/71) Provide more info to Listener callback

## 5.4.0 (2019, June 12)
### Implements
- [(# 70)](https://github.com/triniwiz/nativescript-stripe/issues/70) Support prefilled shipping address in StripePaymentSession

## 5.3.3 (2019, May 13)
### Fixes
- [(# 63)](https://github.com/triniwiz/nativescript-stripe/issues/63) Properly handle no shipping method or address
- [(# 56)](https://github.com/triniwiz/nativescript-stripe/issues/56) Update Stripe to iOS 15 and Android 8.7; some support for Strong Customer Authentication

## 5.3.0 (2019, May 1)
### Improves
- [(# 45)](https://github.com/triniwiz/nativescript-stripe/issues/45) Provide classes and methods to help with Strong Customer Authentication.

## 5.2.0 (2019, April 26)
### Fixes
- [(# 51)](https://github.com/triniwiz/nativescript-stripe/issues/51) Updates Stripe iOS and Android libraries to latest versions (iOS 15 and Android 8.7).

## 5.1.0 (2019, April 16)
### Fixes
- [(# 47)](https://github.com/triniwiz/nativescript-stripe/issues/47) Fix build breakage by upgrading to latest NS.
  Now builds and runs correctly with NS 5.3. Requires `nativescript-dev-webpack: 0.22.0-next-2019-04-12-181144-02` or later for Angular projects using webpack.

## 5.0.8 (2019, March 24)
### Fixes
- [(# 46)](https://github.com/triniwiz/nativescript-stripe/issues/46) Remove deprecated "short imports".

## 5.0.7 (2019, February 6)
### Fixes
- Android: Change from deprecated 'compile' to 'implements' in include.gradle.

## 5.0.6 (2018, December 21)
### Fixes
- [(# 39)](https://github.com/triniwiz/nativescript-stripe/issues/39) Standard Integration: Error referencing null 'source' from CustomerSource object.

## 5.0.5 (2018, December 20)
### Fixes
- [(# 40)](https://github.com/triniwiz/nativescript-stripe/issues/40) Standard Integration: When user cancels, no message is sent to listener.

## 5.0.4 (2018, November 20)
### Fixes
- Fix publish configuration — add README, CHANGELOG, LICENSE, remove unnecessary files.

## 5.0.3 (2018, November 17)
### Fixes
- [(# 35)](https://github.com/triniwiz/nativescript-stripe/issues/35) index.d.ts does not properly define CreditCardViewBase.

## 5.0.2 (2018, October 20)
### Additions
- [(# 25)](https://github.com/triniwiz/nativescript-stripe/issues/25) Add Support for Standard Integration to demo. The demo app now matches the demo-angular app.

## 5.0.1 (2018, October 20)
### Fixes
- [(#30)](https://github.com/triniwiz/nativescript-stripe/issues/30) Standard Integration on iOS fails to send "payment ready" status

## 5.0.0 (2018, October 17)
### Additions
- [(# 24)](https://github.com/triniwiz/nativescript-stripe/issues/24) Add Support for Custom Integration to Angular demo

### Breaking Changes
- Now follows recommended approach for registering CreditCardView in Angular
- `createToken()` now takes `card: CardCommon` as first parameter instead of `card.card: any`.

## 4.1.2 (2018, October 2)
### Fixes
- [(#27)](https://github.com/triniwiz/nativescript-stripe/issues/27) Fix support for optional shipping address fields on Android

## 4.1.1 (2018, October 1)
### Additions
- [(# 23)](https://github.com/triniwiz/nativescript-stripe/issues/23) Add an Angular demo app that demonstrates the Standard integration

## 4.1.0 (2018, September 26)
### Additions
- [(# 19)](https://github.com/triniwiz/nativescript-stripe/issues/19) Add support for Stripe Standard Integration
- [(# 21)](https://github.com/triniwiz/nativescript-stripe/issues/21) Improve type safety

## 3.0.0 (2017, August 1)
### Breaking Changes
- [(# 6)](https://github.com/triniwiz/nativescript-stripe/issues/6) Android `createToken` now send back the full token object instead of only the `tokenId`

## 1.0.1 (2017, May 7)
### Breaking Changes
- Nativescript 3 compatibility
### Fixes
- [(# 3)](https://github.com/triniwiz/nativescript-stripe/issues/3) validate expiration month with value `1`

## 1.0.1 (2017, March 27)
### Fixes
- [(# 1)](https://github.com/triniwiz/nativescript-stripe/issues/1) Fixed new Card creation via code

## 1.0.0 (2017, March 19)
