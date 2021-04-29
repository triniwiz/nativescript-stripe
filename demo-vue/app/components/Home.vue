<template>
  <Page @loaded="onPageLoaded" class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <StackLayout class="page p-10">
      <GridLayout rows="auto" columns="auto,*">
        <Label row="0" col="0" :text="item.name" class="h2"></Label>
        <Label row="0" col="1" :text="'$' + item.price" class="text-right text-muted"></Label>
      </GridLayout>
      <StackLayout class="hr-light m-10"></StackLayout>
      <GridLayout rows="auto" columns="*,auto" @tap="showPaymentMethods()" class="list-group-item">
        <Label row="0" col="0" text="Payment Type"></Label>
        <StackLayout row="0" col="1" orientation="horizontal">
          <Image width="32" height="20" :src="paymentImage"></Image>
          <Label
            :text="paymentType"
            class="text-right text-muted"
            :visibility="!isLoading ? 'visible' : 'collapse'"
          ></Label>
        </StackLayout>
        <ActivityIndicator
          row="0"
          col="1"
          :busy="isLoading"
          :visibility="isLoading ? 'visible' : 'collapse'"
        ></ActivityIndicator>
      </GridLayout>
      <StackLayout class="hr-light m-10"></StackLayout>
      <GridLayout rows="auto" columns="auto,*" @tap="showShipping()" class="list-group-item">
        <Label row="0" col="0" text="Shipping Method"></Label>
        <Label row="0" col="1" :text="shippingType" class="text-right text-muted"></Label>
      </GridLayout>
      <StackLayout class="hr-light m-10"></StackLayout>
      <GridLayout rows="auto" columns="auto,*" class="list-group-item">
        <Label row="0" col="0" text="Total"></Label>
        <Label row="0" col="1" :text="'$ ' + total" class="text-right"></Label>
      </GridLayout>
      <StackLayout class="hr-light m-10"></StackLayout>
      <Label :text="errorMessage" class="text-danger" textWrap="true"></Label>
      <Button text="Buy" :isEnabled="canBuy" class="btn btn-primary btn-active" @tap="buy()"></Button>
      <ActivityIndicator
        :busy="paymentInProgress"
        :visibility="paymentInProgress ? 'visible' : 'collapse'"
      ></ActivityIndicator>
      <Label :text="successMessage" class="text-primary" textWrap="true"></Label>
      <StackLayout class="hr-light m-10"></StackLayout>
      <Label text="Debug Info"></Label>
      <Label :text="debugInfo" class="body" textWrap="true"></Label>
    </StackLayout>
  </Page>
</template>

<script>
import { StripeService, Listener } from "~/services/stripe.service.ts";
let stripeService = new StripeService();
let paymentSession = null;
export default {
  data() {
    return {
      item: {
        id: 0,
        name: "Something to buy",
        price: 1200
      },
      paymentInProgress: false,
      canBuy: true,
      isLoading: false,
      paymentType: "",
      paymentImage: "",
      shippingType: "",
      total: "",
      debugInfo: "",
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    onPageLoaded(args) {
      paymentSession = stripeService.createPaymentSession(
        args.object,
        this.item.price,
        new Listener(this)
      );
    },
    showPaymentMethods() {
      return stripeService.showPaymentMethods(paymentSession);
    },
    showShipping() {
      return stripeService.showShipping(paymentSession);
    },
    buy() {
      this.paymentInProgress = true;
      this.canBuy = false;
      return stripeService.requestPayment(paymentSession);
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
