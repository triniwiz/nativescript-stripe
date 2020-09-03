import { Stripe } from "nativescript-stripe"
var stripe = new Stripe();

describe("greet function", function() {
    it("exists", function() {
        expect(stripe.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(stripe.greet()).toEqual("Hello, NS");
    });
});
