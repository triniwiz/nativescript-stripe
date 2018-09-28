import { Card, Stripe } from 'nativescript-stripe';
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
let stripe;
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();

  const card = new Card('4242424242424242', 1, 21, '111');
  if (card.validateCard()) {
    stripe = new Stripe('pk_test_OHSX2noWHfjZMZ6uj0dbeSN7');
    stripe.createToken(card.card, (error, token) => {
      if (!error) {
        console.log(`card: ${card.brand} ...${card.last4} ${card.expMonth}/${card.expYear}`);
        console.log(`token: ${JSON.stringify(token)}`);
      } else {
        console.log(error);
      }
    });
  }
}
