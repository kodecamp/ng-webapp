import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../models/item.model";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  private isHidden: boolean = true;
  @Input("itemobj") item: Item;

  /** constructor */
  constructor() {
    console.log("constructor: ItemComponent");
  }

  viewContent() {
    console.log("showcontent...");
    console.dir(this.item.title);
  }

  ngOnInit() {}
}
