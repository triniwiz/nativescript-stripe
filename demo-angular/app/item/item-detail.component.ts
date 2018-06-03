import { Component, OnInit } from "@angular/core";
import { StripePaymentContext } from "nativescript-stripe";
import { Page } from "tns-core-modules/ui/page";
import { Item } from "./item";
import { StripeService } from "./stripe.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    private paymentContext: StripePaymentContext;
    private paymentInProgress: boolean;

    constructor(
        private page: Page,
        private stripeService: StripeService
    ) { }

    ngOnInit(): void {
        this.item = {
            id: 0,
            name: "Something to buy",
            price: 1200
        };
        this.paymentContext = this.stripeService.createPaymentContext(this.page, this.item.price);
    }

    get paymentType(): string {
        return this.paymentContext.selectedPaymentMethod ?
            this.paymentContext.selectedPaymentMethod.label
            : "Select Payment";
    }

    get shippingType(): string {
        return this.paymentContext.selectedShippingMethod ?
            this.paymentContext.selectedShippingMethod.identifier
            : "Enter Shipping Info";
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
