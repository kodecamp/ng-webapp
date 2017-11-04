import { TestBed, inject } from "@angular/core/testing";

import { ItemService } from "./item.service";
import { ItemServiceImpl } from "./item.service.impl";

describe("ItemService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemServiceImpl]
    });
  });

  it(
    "should be created",
    inject([ItemServiceImpl], (service: ItemService) => {
      expect(service).toBeTruthy();
    })
  );
});
