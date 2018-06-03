import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CreditCardViewComponent } from "./item/creditcardview.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ItemsComponent } from "./item/items.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item", component: ItemDetailComponent },
    { path: "ccview", component: CreditCardViewComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }