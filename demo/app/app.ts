import "./bundle-config";
import * as app from 'application';
import * as platform from "platform";
declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "youApiKey";
    }
});

app.start({ moduleName: 'main-page' });

