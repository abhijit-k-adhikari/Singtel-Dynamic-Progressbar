import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import {Progress} from "app/directives/progressbar/progress.directive";
import {Bar} from "app/directives/progressbar/bar.component";

@Component({
    selector: 'progressbar, [progressbar]',   
    template: `
    <div progress [animate]="animate" [max]="max">
      <bar [type]="type" [value]="value">
          <ng-content></ng-content>
      </bar>
    </div>
  `
})
export class Progressbar {
    @Input() private animate:boolean;
    @Input() private max:number;
    @Input() private type:string;
    @Input() private value:number;
}
