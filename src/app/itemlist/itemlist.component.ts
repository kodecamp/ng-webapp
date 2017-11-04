import { Component, OnInit, Input } from "@angular/core";
import { ItemServiceMock } from "../services/item.service.mock";
import { Item } from "../models/item.model";

@Component({
  selector: "app-itemlist",
  templateUrl: "./itemlist.component.html",
  styleUrls: ["./itemlist.component.css"]
})
export class ItemlistComponent implements OnInit {
  //properties coming from parent
  @Input() title: string;
  @Input() pageSize: number;
  @Input() somethingElse: any;

  items: Item[];

  // private properties

  private _title: string;
  private _pageSize: number;

  constructor(private _itemService: ItemServiceMock) {}

  // @Input()
  // set title(title: string) {
  //   console.log(`value of title : ${title}`);
  //   this._title = (title && title.trim()) || '<no title set>';
  // }

  // get title() {
  //   return this._title;
  // }

  // @Overridden from OnInit
  ngOnInit() {
    this.items = this._itemService.items();
  }
}
