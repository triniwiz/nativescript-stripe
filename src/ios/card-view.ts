import * as common from "../card-view.common";
import { Card } from "./card";

export class CreditCardView extends common.CreditCardView {
    nativeView: STPPaymentCardTextField;

    public createNativeView(): Object {
        return STPPaymentCardTextField
            .alloc()
            .initWithFrame(CGRectMake(10, 10, 300, 44));
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }

    get card(): Card {
        try {
            const valid = STPCardValidator.validationStateForCard(
                this.nativeView.cardParams) === STPCardValidationState.Valid;

            return valid ?
                new Card(
                    this.nativeView.cardParams.number,
                    this.nativeView.cardParams.expMonth,
                    this.nativeView.cardParams.expYear,
                    this.nativeView.cardParams.cvc,
                ) :
                null;
        } catch (ex) {
            return null;
        }
    }

}