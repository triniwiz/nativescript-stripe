import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreditCardViewModule } from 'nativescript-stripe/angular';
import { CreditCardViewComponent } from "./demo/creditcardview.component";
import { HomeComponent } from "./demo/home.component";
import { ImagesComponent } from "./demo/images.component";
import { ItentModalComponent } from "./demo/intent-modal.component";
import { IntentComponent } from "./demo/intent.component";
import { StandardComponent } from "./demo/standard.component";
import { StripeService } from "./demo/stripe.service";

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
        ImagesComponent,
        IntentComponent,
        ItentModalComponent
    ],
    providers: [
        StripeService
    ],
    entryComponents: [ItentModalComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
