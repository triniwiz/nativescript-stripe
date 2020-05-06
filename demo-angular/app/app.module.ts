import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CreditCardViewModule } from "nativescript-stripe/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CreditCardViewComponent } from "./demo/creditcardview.component";
import { HomeComponent } from "./demo/home.component";
import { ImagesComponent } from "./demo/images.component";
import { ItentModalComponent } from "./demo/intent-modal.component";
import { IntentComponent } from "./demo/intent.component";
import { StandardComponent } from "./demo/standard.component";
import { StripeService } from "./demo/stripe.service";

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
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
