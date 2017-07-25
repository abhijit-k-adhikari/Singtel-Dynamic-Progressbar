import { Component, OnInit } from "@angular/core";

// component related data --------------------------------------
import { HomeComponent } from "app/views/directives/home/home-directive.component";
import { ControlComponent } from "app/views/directives/control/control-directive.component";

@Component({
    selector: "my-home-list",
    templateUrl: "app/views/main/main.component.html",
    styleUrls: ["app/views/main/main.component.css"],
    providers: []
})
export class MainComponent implements OnInit {

    public endpoint: any;

    constructor() {
    }

    public ngOnInit() {
        $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        });
    }

    public cacheUpdated(val: any) {
        this.endpoint = val;
    }
}
