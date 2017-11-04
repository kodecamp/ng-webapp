import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./item.service";
import { Item } from "../models/item.model";

@Injectable()
export class ItemServiceMock implements ItemService {
  //   private _items: Item[] = [];
  constructor(private http: HttpClient) {}

  items(): Item[] {
    return this.createItems();
  }

  private createItems(): Item[] {
    let _items: Item[] = [];
    _items.push(
      new Item(
        "Encapsulation in Java and JavaScript",
        "Java",
        "./assets/bicycle.svg",
        10
      )
    );
    _items.push(new Item("Title 2", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 3", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 4", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 5", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 6", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 7", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 8", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 9", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 10", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 11", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 12", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 13", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 14", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 15", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 16", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 17", "Java", "./assets/bicycle.svg"));
    _items.push(new Item("Title 18", "Java", "./assets/bicycle.svg"));
    return _items;
  }
}
