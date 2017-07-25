import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { MainComponent } from "app/views/main/main.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent,
        children: [
          {
            path: "",
            children: [
              // for now evrything pointing to MainComponent but in real life application they will point to different pages
              { path: "", component: MainComponent },
              { path: "main", component: MainComponent },
              { path: "config", component: MainComponent },
              { path: "help", component: MainComponent }
              //{ path: "home/accessrights", component: AccessRightsComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule { }
