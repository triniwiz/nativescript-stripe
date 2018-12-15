perl -i -p \
    -e 's/publishableKey = ""/publishableKey = "pk_test_s3dHtM9w6XmgB7ak7AbCSj51"/;' \
    -e 's%backendBaseURL = ""%backendBaseURL = "https://rg-example-stripe-backend.herokuapp.com/"%;' \
    -e 's/appleMerchantID = ""/appleMerchantID = "merchant.com.nativescript-stripe.test"/;' \
    ../demo/app/demo/stripe.service.ts \
    ../demo-angular/app/demo/stripe.service.ts
