import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule }    from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { LoginRoutingModule } from "app/views/login/login-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "app/views/login/login.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, LoginRoutingModule, AppRoutingModule],
  declarations: [AppComponent, LoginComponent],
  providers: [    
   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
