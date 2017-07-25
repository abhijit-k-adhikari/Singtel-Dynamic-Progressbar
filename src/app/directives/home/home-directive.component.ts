import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home-directive",
  templateUrl: "app/directives/home/home-directive.component.html",
  styleUrls: ["app/directives/home/home-directive.component.css"],
  providers: []
})

export class HomeComponent implements OnInit {

  @Output() public cacheUpdated = new EventEmitter();

  private _className: string;

  private _buttons: string;
  private _bars: string;
  private _limit: string;

  private _gotoStr: string;
  private _genratedEndPoint: any;
  private _genratedEndPointStr: string;

  constructor() {
    this._className = "HomeComponent";
  }

  private ngOnInit() {
    console.log("ngOnInit");
  }

  private onSubmit() {
    this.assignValue();
    this._genratedEndPointStr = JSON.stringify(this._genratedEndPoint);
    this._gotoStr = "now goto Progressbars Tab to verify the result";
    this.cacheUpdated.emit(this._genratedEndPoint);
  }

  private resetClicked() {
    this._buttons = "10,38,-13,-18";
    this._bars = "62,45,62";
    this._limit = "230";

    this._genratedEndPointStr = "";
    this._gotoStr = "";
  }

  private assignValue() {
    let buttonsArr = this._buttons.split(",");
    let barsArr = this._bars.split(",");
    let limitArr = +this._limit;

    this._genratedEndPoint = { buttons: buttonsArr, bars: barsArr, limit: limitArr };
  }
}
