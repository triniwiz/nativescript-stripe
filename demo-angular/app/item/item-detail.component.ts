import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { StripeAddress, StripePaymentContext, StripePaymentData, StripePaymentListener, StripeShippingMethod, StripeShippingMethods } from "nativescript-stripe";
import { Page } from "ui/page";
import { Item } from "./item";
import { StripeService } from "./stripe.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    paymentType = "Select Payment";
    shippingType = "Enter Shipping Info";
    errorMessage = "";
    private paymentContext: StripePaymentContext;
    private paymentInProgress: boolean;

    constructor(
        private page: Page,
        private stripeService: StripeService,
        public changeDetectionRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.item = {
            id: 0,
            name: "Something to buy",
            price: 1200
        };
        this.paymentContext = this.stripeService.createPaymentContext(
            this.page, this.item.price, new Listener(this));
    }

    get total(): number {
        return this.item.price;
    }

    showPaymentMethods() {
        this.stripeService.showPaymentMethods(this.paymentContext);
    }

    showShipping() {
        this.stripeService.showShipping(this.paymentContext);
    }

    buy() {
        this.paymentInProgress = true;
        this.stripeService.requestPayment(this.paymentContext);
    }
}

class Listener implements StripePaymentListener {
    constructor(private component: ItemDetailComponent) {
    }

    onPaymentDataChanged(data: StripePaymentData) {
        this.component.paymentType = data.paymentMethod ?
            data.paymentMethod.label :
            "Select Payment";
        this.component.shippingType = data.shippingInfo ?
            data.shippingInfo.label :
            "Enter Shipping Info";
        this.component.changeDetectionRef.detectChanges();
    }

    onError(errorCode: number, message: string) {
        this.component.errorMessage = message;
        this.component.changeDetectionRef.detectChanges();
    }

    provideShippingMethods(address: StripeAddress): StripeShippingMethods {
        let upsGround: StripeShippingMethod = {
            amount: 0,
            label: "UPS Ground",
            detail: "Arrives in 3-5 days",
            identifier: "ups_ground"
        };
        let upsWorldwide: StripeShippingMethod = {
            amount: 10.99,
            label: "UPS Worldwide Express",
            detail: "Arrives in 1-3 days",
            identifier: "ups_worldwide"
        };
        let fedEx: StripeShippingMethod = {
            amount: 5.99,
            label: "FedEx",
            detail: "Arrives tomorrow",
            identifier: "fedex"
        };

        let methods = <StripeShippingMethods>{};
        if (!address.country || address.country == "US") {
            methods.isValid = true;
            methods.validationError = undefined;
            methods.shippingMethods = [upsGround, fedEx];
            methods.selectedShippingMethod = fedEx;
        } else if (address.country === "AQ") {
            methods.isValid = false;
            methods.validationError = "We can't ship to this country.";
        } else {
            fedEx.amount = 20.99
            methods.isValid = true;
            methods.validationError = undefined;
            methods.shippingMethods = [upsWorldwide, fedEx];
            methods.selectedShippingMethod = fedEx;
        }
        return methods;
    }
}