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
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(_router) {
        this._router = _router;
        this._className = "MainNavComponent";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._userName = "ABHIJIT KUMAR ADHIKARI";
        this._businessDate = new Date().toDateString();
        this._loginTime = new Date().toLocaleTimeString();
        this.activeMenu = "MAIN";
    };
    DashboardComponent.prototype.gotoLoginPage = function () {
        this._router.navigate(["login"]);
    };
    DashboardComponent.prototype.onMenuSelected = function (menu) {
        this.activeMenu = menu;
        if (menu === "LOGOUT") {
            this.logOut();
        }
    };
    DashboardComponent.prototype.isActive = function (queriedMenu) {
        return this.activeMenu === queriedMenu;
    };
    DashboardComponent.prototype.logOut = function () {
        this.gotoLoginPage();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            templateUrl: "app/views/dashboard/dashboard.component.html",
            styleUrls: ["app/views/dashboard/dashboard.component.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=dashboard.component.js.map
