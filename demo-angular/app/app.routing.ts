import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CreditCardViewComponent } from "./item/creditcardview.component";
import { CustomersComponent } from "./item/customers.component";
import { HomeComponent } from "./item/home.component";
import { StandardComponent } from "./item/standard.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "std", component: StandardComponent },
    { path: "ccview", component: CreditCardViewComponent },
    { path: "cust", component: CustomersComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }