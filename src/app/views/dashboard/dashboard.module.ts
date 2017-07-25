import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { Observable } from "rxjs/Rx";

// module -----------------
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { jqxDropDownListComponent } from "app/external/ts/jqx-dropdownlist/angular_jqxdropdownlist";

// component -----------------
import { DashboardComponent } from "./dashboard.component";
import { MainComponent } from "app/views/main/main.component";
import { HomeComponent } from "app/directives/home/home-directive.component";
import { ControlComponent } from "app/directives/control/control-directive.component";

import {Progress} from "app/directives/progressbar/progress.directive";
import {Bar} from "app/directives/progressbar/bar.component";
import {Progressbar} from "app/directives/progressbar/progressbar.component";

@NgModule({
  imports: [
    CommonModule, FormsModule, DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    MainComponent,
    HomeComponent,
    ControlComponent,    
    jqxDropDownListComponent,
    Progress,
    Bar,
    Progressbar
  ],
  providers: []
})

export class DashboardModule { }
