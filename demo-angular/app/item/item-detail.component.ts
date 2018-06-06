import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { StripePaymentContext, StripePaymentData, StripePaymentListener } from "nativescript-stripe";
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
}
