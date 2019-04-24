# NativeScript Stripe  Demo

This  NativeScript app demos both [Standard and custom UI](https://stripe.com/docs/mobile/ios#standard-custom-components) Stripe components.  Current forms of supported card input are Apple Pay (iOS only) and manual number entry.

**Note**: nativescript-stripe plugin currently is using the v13.2 Stripe SDK.  Current Stripe SDK version is 15.0 is [in the works](https://github.com/triniwiz/nativescript-stripe/issues/51).

## Setup

1.  Change the `nativescript.id` value in [package.json](./package.json) to something unique.  Ex: `com.yourdomain.ns-stripe`.
1.  Clone this repo, and from [src](../src) run `npm install`.  This installs dependencies for nativescript-stripe plugin.  **Note**: this step is not necessary when you install `nativescript-stripe` into your project via `tns plugin add nativescript-stripe`.
1.  From the `demo` directory run `npm install`
1.  Open the Stripe [API Keys dashboard](https://dashboard.stripe.com/account/apikeys), copy the test "Publishable key" (starts with `pk_test`), and paste it into [app/demo/stripe.service.ts](./app/demo/stripe.service.ts) as the value of `publishableKey`
1.  Create sample backend to save payment details. From https://github.com/stripe/example-ios-backend click "Deploy to Heroku", and follow the instructions (don't worry, it's free)
1.  Paste your Heroku URL (it looks like https://blazing-sunrise-1234.herokuapp.com) into [app/demo/stripe.service.ts](./app/demo/stripe.service.ts) as the value of `backendBaseURL`
1.  Run `tns run [ios|android]`, and test using a [test card number](https://stripe.com/docs/testing)

## Accept Apple Pay (iOS only)

1.  Kill the `tns run ios` process if running
1.  Open `demo/platforms/ios/demo.xcworkspace` in XCode, and navigate to `General`
    1.  Under `Identity` > `Bundle Identifier` erase the input, and type/paste back in your UNIQUE bundle ID (the one used in setup step 1 above).
    1.  Under `Signing`,  choose your `Team` from the dropdown.  This will create an App ID in [Apple Developer Identifiers page](https://developer.apple.com/account/ios/identifier/bundle)
1.  Follow the instructions at https://stripe.com/docs/apple-pay/apps.  Paste Apple Merchant ID into [app/demo/stripe.service.ts](./app/demo/stripe.service.ts) as the value of `appleMerchantID`.  If you get an error enabling apple pay in XCode `Capabilities` (when checking the merchant ID box), re-do step 2(i).
1.  Run `tns run ios --emulator`.  The iOS emulator should have a test Apple Pay account setup.
1.  Persist Apple Pay entitlement (aka capability) between iOS builds by copying `platforms/ios/[YourAppName]/[YourAppName].entitlements` to `app/App_Resources/iOS/app.entitlements`.  If `app.entitlements` already exists, merge the contents.  It should look something like this:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.developer.in-app-payments</key>
	<array>
		<string>merchant.com.rynop.ns-stripe-test</string>
	</array>
</dict>
</plist>
```

**Highly recomended:** enable apple pay on an iPhone and run: `tns run ios`.  Make sure apple pay shows up.  If it does not, check out https://github.com/triniwiz/nativescript-stripe/issues/50
