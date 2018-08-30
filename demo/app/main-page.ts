import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { Card, Stripe } from 'nativescript-stripe';
let stripe;
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();

  const card = new Card('1111111111111111', 1, 11, '11');
  if (card.validateCard()) {
    stripe = new Stripe('pk_test_OHSX2noWHfjZMZ6uj0dbeSN7');
    stripe.createToken(card.card, (error, token) => {
      if (!error) {
        console.log(token);
      } else {
        console.log(error);
      }
    });
  }
}
