import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TutorialsComponent } from "./tutorials/tutorials.component";
import { ArticlesComponent } from "./articles/articles.component";
import { FeedbacksComponent } from "./feedbacks/feedbacks.component";
import { HomeComponent } from "./home/home.component";
import { NoPageFoundComponent } from "./nopagefound/nopagefound.component";
import { ItemlistComponent } from "./itemlist/itemlist.component";
import { ItemComponent } from "./item/item.component";
import { SearchComponent } from "./search/search.component";
import { ItemServiceMock } from "./services/item.service.mock";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "tutorials", component: TutorialsComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "feedbacks", component: FeedbacksComponent },
  { path: "item", component: ItemComponent },
  { path: "**", component: NoPageFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TutorialsComponent,
    ArticlesComponent,
    FeedbacksComponent,
    HomeComponent,
    NoPageFoundComponent,
    ItemlistComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [ItemServiceMock],
  bootstrap: [AppComponent]
})
export class AppModule {}
