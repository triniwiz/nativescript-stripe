import * as observable from 'data/observable';
import { Card, Stripe } from 'nativescript-stripe';
import * as pages from 'ui/page';
import { HelloWorldModel } from './main-view-model';
let stripe;
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object;
  page.bindingContext = new HelloWorldModel();

  const card = new Card('1111111111111111', 1, 11, '11');
  if (card.validateCard()) {
    stripe = new Stripe('pk_test_OHSX2noWHfjZMZ6uj0dbeSN7');
    stripe.createToken(card, (error, token) => {
      if (!error) {
        console.log(token);
      } else {
        console.log(error);
      }
    });
  }
}
