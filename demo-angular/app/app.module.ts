import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CreditCardViewModule } from "nativescript-stripe/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CreditCardViewComponent } from "./item/creditcardview.component";
import { CustomersComponent } from "./item/customers.component";
import { HomeComponent } from "./item/home.component";
import { StandardComponent } from "./item/standard.component";
import { StripeService } from "./item/stripe.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CreditCardViewModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        StandardComponent,
        CreditCardViewComponent,
        CustomersComponent
    ],
    providers: [
        StripeService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
