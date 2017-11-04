import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./item.service";
import { Item } from "../models/item.model";

@Injectable()
export class ItemServiceImpl implements ItemService {
  private _items: Item[] = [];
  constructor(private http: HttpClient) {}

  items(): Item[] {
    return null;
  }
}
