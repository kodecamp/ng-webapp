import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  constructor(private router: Router, private currentRoute: RouterModule) {
    console.log("constructor: AppComponent");
  }

  ngOnInit(): void {
    this.router.navigate(["home"], this.currentRoute);
  }
}
