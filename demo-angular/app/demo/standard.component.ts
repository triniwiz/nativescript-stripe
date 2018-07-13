import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { StripeAddress, StripePaymentContext, StripePaymentData, StripePaymentListener, StripeShippingMethod, StripeShippingMethods } from "nativescript-stripe";
import { Page } from "ui/page";
import { Item } from "./item";
import { StripeService } from "./stripe.service";

@Component({
    selector: "stp-details",
    moduleId: module.id,
    templateUrl: "./standard.component.html",
})
export class StandardComponent implements OnInit {
    item: Item;
    paymentType: string;
    shippingType: string;
    errorMessage: string;
    successMessage: string;
    private paymentContext: StripePaymentContext;

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

    get isLoading(): boolean {
        return this.paymentContext ? this.paymentContext.loading : true;
    }

    get paymentInProgress(): boolean {
        return this.paymentContext ? this.paymentContext.paymentInProgress : false;
    }

    get canBuy(): boolean {
        return this.paymentContext ?
            this.paymentContext.isPaymentReady && !this.paymentContext.paymentInProgress :
            false;
    }

    get total(): number {
        return this.paymentContext ? this.paymentContext.amount : this.item.price;
    }

    showPaymentMethods() {
        this.stripeService.showPaymentMethods(this.paymentContext);
    }

    showShipping() {
        this.stripeService.showShipping(this.paymentContext);
    }

    buy() {
        this.stripeService.requestPayment(this.paymentContext);
    }
}

class Listener implements StripePaymentListener {
    constructor(private component: StandardComponent) {
    }

    onPaymentDataChanged(data: StripePaymentData) {
        this.component.paymentType = data.paymentMethod ?
            data.paymentMethod.label :
            "Select Payment";
        if (data.shippingInfo) {
            this.component.shippingType =
                `${data.shippingInfo.label} ($${data.shippingInfo.amount / 100})`;
        } else {
            this.component.shippingType = "Enter Shipping Info";
        }
        this.component.changeDetectionRef.detectChanges();
    }

    onPaymentSuccess(): void {
        this.component.successMessage =
            `Congratulations! You bought a "${this.component.item.name}" for $${this.component.item.price / 100}.`;
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
            amount: 1099,
            label: "UPS Worldwide Express",
            detail: "Arrives in 1-3 days",
            identifier: "ups_worldwide"
        };
        let fedEx: StripeShippingMethod = {
            amount: 599,
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
            fedEx.amount = 2099
            methods.isValid = true;
            methods.validationError = undefined;
            methods.shippingMethods = [upsWorldwide, fedEx];
            methods.selectedShippingMethod = fedEx;
        }
        return methods;
    }
}