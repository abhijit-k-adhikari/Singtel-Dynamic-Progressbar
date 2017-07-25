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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var angular_jqxdropdownlist_1 = require("app/external/ts/jqx-dropdownlist/angular_jqxdropdownlist");
var dashboard_component_1 = require("./dashboard.component");
var main_component_1 = require("app/views/main/main.component");
var home_directive_component_1 = require("app/directives/home/home-directive.component");
var control_directive_component_1 = require("app/directives/control/control-directive.component");
var progress_directive_1 = require("app/directives/progressbar/progress.directive");
var bar_component_1 = require("app/directives/progressbar/bar.component");
var progressbar_component_1 = require("app/directives/progressbar/progressbar.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, dashboard_routing_module_1.DashboardRoutingModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                main_component_1.MainComponent,
                home_directive_component_1.HomeComponent,
                control_directive_component_1.ControlComponent,
                angular_jqxdropdownlist_1.jqxDropDownListComponent,
                progress_directive_1.Progress,
                bar_component_1.Bar,
                progressbar_component_1.Progressbar
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=dashboard.module.js.map
