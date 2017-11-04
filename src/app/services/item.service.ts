import { Item } from "../models/item.model";

export interface ItemService {
  items(): Item[];
}
