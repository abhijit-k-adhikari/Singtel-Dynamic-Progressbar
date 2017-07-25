import { Component } from "@angular/core";

// add the RxJS Observable operators we need in this app.
import "app/rxjs-operators";

@Component({
  moduleId: module.id,
  selector: "my-app",
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.css"]
})

export class AppComponent { }
