import { EventData, fromObject } from "data/observable";
import { CreditCardView, Stripe, Token } from "nativescript-stripe";
import { Button } from "ui/button/button";
import { Page } from "ui/page";

let stripe;
let tokenSource = fromObject({ token: "" });

export function pageLoaded(args: EventData) {
  stripe = new Stripe("pk_test_OHSX2noWHfjZMZ6uj0dbeSN7");
  tokenSource.set("token", "");

  let page = <Page>args.object;
  page.bindingContext = tokenSource;
}

export function createToken(args: EventData) {
  tokenSource.set("token", "Fetching token...");

  let page = (<Button>args.object).page;
  let ccView: CreditCardView = page.getViewById("card");
  stripe.createToken(ccView.card, (error, token) => {
    let value = error ? error.message : formatToken(token);
    tokenSource.set("token", value);
  });
}

function formatToken(token: Token): string {
  return `ID: ${token.id}\nCard: ${token.card.brand} (...${token.card.last4})`;
}
