"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.cacheUpdated = new core_1.EventEmitter();
        this._className = "HomeComponent";
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    HomeComponent.prototype.onSubmit = function () {
        this.assignValue();
        this._genratedEndPointStr = JSON.stringify(this._genratedEndPoint);
        this._gotoStr = "now goto Progressbars Tab to verify the result";
        this.cacheUpdated.emit(this._genratedEndPoint);
    };
    HomeComponent.prototype.resetClicked = function () {
        this._buttons = "10,38,-13,-18";
        this._bars = "62,45,62";
        this._limit = "230";
        this._genratedEndPointStr = "";
        this._gotoStr = "";
    };
    HomeComponent.prototype.assignValue = function () {
        var buttonsArr = this._buttons.split(",");
        var barsArr = this._bars.split(",");
        var limitArr = +this._limit;
        this._genratedEndPoint = { buttons: buttonsArr, bars: barsArr, limit: limitArr };
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "cacheUpdated", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home-directive",
            templateUrl: "app/directives/home/home-directive.component.html",
            styleUrls: ["app/directives/home/home-directive.component.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home-directive.component.js.map
