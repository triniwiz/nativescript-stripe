import * as app from 'application';
import * as platform from 'platform';
import * as application from 'tns-core-modules/application';
declare const STPPaymentConfiguration;
app.on(app.launchEvent, (args) => {
    if (platform.isIOS) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "pk_test_OHSX2noWHfjZMZ6uj0dbeSN7";
    }
});
application.start({ moduleName: "main-page" });
