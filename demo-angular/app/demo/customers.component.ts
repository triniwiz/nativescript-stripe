import { ChangeDetectorRef, Component } from "@angular/core";

@Component({
    selector: "stp-cust",
    moduleId: module.id,
    templateUrl: "./customers.component.html",
})
export class CustomersComponent {
    constructor(public changeDetectionRef: ChangeDetectorRef) { }
}
