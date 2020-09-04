import { Component } from "@angular/core";
import { Card, CardBrand } from "nativescript-stripe";

type ImageTable = {
  [brand: string]: any;
};

@Component({
  selector: "stp-images",
  moduleId: module.id,
  templateUrl: "images.component.html",
})
export class ImagesComponent {
  images: ImageTable = {};

  constructor() {
    let brands: CardBrand[] = ["Visa", "Amex", "MasterCard", "Discover", "JCB", "DinersClub", "UnionPay", "Unknown"];
    brands.forEach(b => this.images[b] = Card.cardImage(b));
  }

  get brands(): string[] {
    return Object.keys(this.images);
  }
}
