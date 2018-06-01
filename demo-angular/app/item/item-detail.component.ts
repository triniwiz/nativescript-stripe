import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StripePaymentContext } from "nativescript-stripe";
import { Page } from "tns-core-modules/ui/page";
import { StripeService } from "~/item/stripe.service";
import { Item } from "./item";
import { ItemService } from "./item.service";

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
        private itemService: ItemService,
        private stripeService: StripeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
        this.paymentContext = this.stripeService.createPaymentContext(this.page, this.item.price);
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
