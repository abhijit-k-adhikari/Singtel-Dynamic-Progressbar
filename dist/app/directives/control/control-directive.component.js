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
var angular_jqxdropdownlist_1 = require("app/external/ts/jqx-dropdownlist/angular_jqxdropdownlist");
var ControlComponent = (function () {
    function ControlComponent() {
        this.progressBars = [];
        this.progressbarCount = 0;
        this.buttons = [];
        this.dropdownlistSource = [];
        this.dropdownlistSettings = {
            source: this.dropdownlistSource, selectedIndex: 0, width: "200", height: "25", displayMember: "name"
        };
        this.jsonObject = {};
        this.endPoint = {};
        this._genratedEndPointStr = "Please create a end-point first by going to tab : Setup EndPoint -> Enter the values (alternatively click Reset) -> Click the Generate Progressbar button";
    }
    ControlComponent.prototype.ngOnChanges = function (changes) {
        if (changes["endPoint"] && changes["endPoint"].currentValue) {
            this.jsonObject = this.endPoint;
            this._genratedEndPointStr = JSON.stringify(this.endPoint);
            this.loadScreen();
        }
    };
    ControlComponent.prototype.loadScreen = function () {
        var _this = this;
        if (this.jsonObject) {
            this.progressbarCount = this.jsonObject.bars.length;
            this.dropdownlistSource = [];
            this.jsonObject.bars.forEach(function (element, index) {
                _this.dropdownlistSource.push({ name: "ProgressBar " + (index + 1) });
            });
            var limit_1 = +this.jsonObject.limit;
            this.progressBars = [];
            this.jsonObject.bars.forEach(function (val, index) {
                _this.progressBars.push({
                    name: "ProgressBar " + (index + 1),
                    currentValue: +val,
                    maxValue: +limit_1,
                    percetageValue: Math.floor((+val / +limit_1 * 100)),
                    progressbarType: _this.getTypeValue(+val, +limit_1, Math.floor((+val / +limit_1 * 100)))
                });
            });
            this.buttons = [];
            this.jsonObject.buttons.forEach(function (jumpValue) {
                _this.buttons.push({ content: +jumpValue });
            });
            this.selectedProgressbar = this.progressBars[0].name;
            this.dropdownlistSettings = { source: this.dropdownlistSource, selectedIndex: 0, width: "200", height: "25", displayMember: "name" };
            this.progressbarDDL.createComponent(this.dropdownlistSettings);
        }
    };
    ControlComponent.prototype.ngAfterViewInit = function () {
        this.progressbarDDL.createComponent(this.dropdownlistSettings);
    };
    ControlComponent.prototype.getTypeValue = function (currentVal, maxValue, percetageValue) {
        var type;
        if (currentVal == 0) {
            type = "warning";
        }
        else if (currentVal == maxValue) {
            type = "danger";
        }
        else if (percetageValue < 50) {
            type = "warning";
        }
        else {
            type = "success";
        }
        return type;
    };
    ControlComponent.prototype.generateNewProgressValues = function (val) {
        var _this = this;
        this.progressBars.forEach(function (element) {
            if (element.name == _this.selectedProgressbar) {
                var value = element.currentValue + val;
                if (value < 0) {
                    value = 0;
                }
                if (value > element.maxValue) {
                    value = element.maxValue;
                }
                element.currentValue = value;
                element.percetageValue = Math.floor((value / element.maxValue * 100));
                element.progressbarType = _this.getTypeValue(value, element.maxValue, element.percetageValue);
            }
        });
    };
    ;
    ControlComponent.prototype.onChangeEvent = function (e) {
        var item = this.progressbarDDL.getSelectedItem();
        this.selectedProgressbar = item.originalItem.name;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ControlComponent.prototype, "endPoint", void 0);
    __decorate([
        core_1.ViewChild("progressbarDDL"), 
        __metadata('design:type', (typeof (_a = typeof angular_jqxdropdownlist_1.jqxDropDownListComponent !== 'undefined' && angular_jqxdropdownlist_1.jqxDropDownListComponent) === 'function' && _a) || Object)
    ], ControlComponent.prototype, "progressbarDDL", void 0);
    ControlComponent = __decorate([
        core_1.Component({
            selector: "my-progressbar",
            templateUrl: "app/directives/control/control-directive.component.html",
            styleUrls: ["app/directives/control/control-directive.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ControlComponent);
    return ControlComponent;
    var _a;
}());
exports.ControlComponent = ControlComponent;

//# sourceMappingURL=control-directive.component.js.map
