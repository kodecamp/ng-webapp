import { Component, OnInit } from "@angular/core";
import { ItemServiceMock } from "../services/item.service.mock";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  searchResultTitle: string = "Search Result";
  pageSize: number = 10;
  constructor(private itemService: ItemServiceMock) {
    console.log("constructor: HomeComponent");
    console.log("itemService : " + itemService);
  }

  ngOnInit() {}
}
