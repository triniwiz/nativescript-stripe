export declare class Stripe {
    private _stripe;
    private _ctx;
    constructor(apiKey: string);
    createToken(card: any, cb: Function): void;
}
