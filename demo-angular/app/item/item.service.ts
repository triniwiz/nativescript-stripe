import { Injectable } from "@angular/core";
import { Item } from "./item";


@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", price: 1000 },
        { id: 3, name: "Piqué", price: 2200 },
        { id: 4, name: "I. Rakitic", price: 500 },
        { id: 5, name: "Sergio", price: 30000 },
        { id: 6, name: "Denis Suárez", price: 4000 },
        { id: 7, name: "Arda", price: 8000 },
        { id: 8, name: "A. Iniesta", price: 200 },
        { id: 9, name: "Suárez", price: 7400 },
        { id: 10, name: "Messi", price: 10000 },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
