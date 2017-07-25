import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "app/views/login/login.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", component: LoginComponent },
      { path: "dashboard", loadChildren: "app/views/dashboard/dashboard.module#DashboardModule" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
