export class Item {
  constructor(
    private _title: string,
    private _category: string,
    private _imagePath: string,
    private _duration: number = 0,
    private _desc: string = "Description not available",
    private _keywords?: string[]
  ) {}

  get title() {
    return this._title;
  }

  get category() {
    return this._category;
  }

  get imagePath() {
    return this._imagePath;
  }

  get duration() {
    return this._duration;
  }

  get desc() {
    return this._desc;
  }

  get keywords() {
    return this._keywords;
  }
}
