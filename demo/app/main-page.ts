import { EventData } from 'data/observable';
import { Card, Stripe } from "nativescript-stripe";
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
let stripe;
export function navigatingTo(args: EventData) {
    const card = new Card("1111111111111111", 1, 11, "111");
    if (card.validateCard()) {
        stripe = new Stripe("pk_test_OHSX2noWHfjZMZ6uj0dbeSN7");
        stripe.createToken(card.native, (error, token) => {
            if (!error) {
                console.log(token)
            } else {
                console.log(error)
            }
        });
    }

    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}