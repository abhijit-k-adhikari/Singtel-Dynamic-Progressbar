import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: "app/views/dashboard/dashboard.component.html",
    styleUrls: ["app/views/dashboard/dashboard.component.css"],
    encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

    public activeMenu: string;

    private _className: string;
    private _methodName: string;

    private _selectedMenu: string;
    private _userName: string;
    private _businessDate: string;
    private _loginTime: string;

    public _logoUrl: string;

    constructor(private _router: Router) {
        this._className = "MainNavComponent";
    }

    public ngOnInit() {    
        this._userName = "ABHIJIT KUMAR ADHIKARI";
        this._businessDate = new Date().toDateString();
        this._loginTime = new Date().toLocaleTimeString();

        this.activeMenu = "MAIN";
    }

    public gotoLoginPage() {
        this._router.navigate(["login"]);
    }

    public onMenuSelected(menu: string) {
        this.activeMenu = menu;
        if (menu === "LOGOUT") {
            this.logOut();
        }
    }

    public isActive(queriedMenu: string): boolean {
        return this.activeMenu === queriedMenu;
    }

    private logOut() {
        this.gotoLoginPage();
    }
}
