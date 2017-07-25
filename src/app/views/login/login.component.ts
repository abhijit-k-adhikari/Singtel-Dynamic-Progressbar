import { Component, OnInit, OnChanges, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, NavigationExtras } from "@angular/router";
import { Observable } from "rxjs/Observable";

// define the component ..........................................................
@Component({
    selector: "login-form",
    templateUrl: "app/views/login/login.component.html",
    styleUrls: ["app/views/login/login.component.css"]
})

// component implementation .......................................................
export class LoginComponent {

    public heroImageUrl = "app/assets/images/loginbackground.jpg";
    private _className: string;
    private _methodName: string;

    private _titleContent: string;
    private _bodyContent: string;

    private _userName: string;
    private _password: string;

    constructor(private _router: Router) {
        this._className = "LoginComponent";
    }

    public onSubmit() {
        // navigate to the main page
        this._router.navigate(["dashboard/main"]);
    }

    public resetClicked() {
        this._userName = "ABHIJIT";
        this._password = "Password123";
    }
}
