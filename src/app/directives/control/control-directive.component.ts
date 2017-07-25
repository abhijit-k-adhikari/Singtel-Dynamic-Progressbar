import { Component, ViewChild, AfterViewInit, Input, SimpleChanges } from "@angular/core";

import { Progress } from "app/directives/progressbar/progress.directive";
import { Bar } from "app/directives/progressbar/bar.component";
import { Progressbar } from "app/directives/progressbar/progressbar.component";
import { jqxDropDownListComponent } from "app/external/ts/jqx-dropdownlist/angular_jqxdropdownlist";

@Component({
    selector: "my-progressbar",
    templateUrl: "app/directives/control/control-directive.component.html",
    styleUrls: ["app/directives/control/control-directive.component.css"]
})

export class ControlComponent implements OnAfterViewInit, OnChanges {

    public selectedProgressbar: any;
    public _genratedEndPointStr: string;
    public progressBars: any = [];
    public progressbarCount: number = 0;
    public buttons: any = [];

    public dropdownlistSource: any = [];
    public dropdownlistSettings: jqwidgets.DropDownListOptions =
    {
        source: this.dropdownlistSource, selectedIndex: 0, width: "200", height: "25", displayMember: "name"
    };

    public jsonObject: any = {};

    @Input() public endPoint: any = {};
    @ViewChild("progressbarDDL") private progressbarDDL: jqxDropDownListComponent;

    constructor() {
        this._genratedEndPointStr = "Please create a end-point first by going to tab : Setup EndPoint -> Enter the values (alternatively click Reset) -> Click the Generate Progressbar button";
    }

    private ngOnChanges(changes: SimpleChanges): void {
        if (changes["endPoint"] && changes["endPoint"].currentValue) {
            this.jsonObject = this.endPoint;
            this._genratedEndPointStr = JSON.stringify(this.endPoint);
            this.loadScreen();
        }
    }

    private loadScreen() {

        if (this.jsonObject) {

            this.progressbarCount = this.jsonObject.bars.length;

            this.dropdownlistSource = [];
            this.jsonObject.bars.forEach((element, index) => {
                this.dropdownlistSource.push({ name: "ProgressBar " + (index + 1) });
            });

            let limit = +this.jsonObject.limit;
            this.progressBars = [];
            this.jsonObject.bars.forEach((val, index) => {
                this.progressBars.push({
                    name: "ProgressBar " + (index + 1),
                    currentValue: +val,
                    maxValue: +limit,
                    percetageValue: Math.floor((+val / +limit * 100)),
                    progressbarType: this.getTypeValue(+val, +limit, Math.floor((+val / +limit * 100)))
                });
            });

            this.buttons = [];
            this.jsonObject.buttons.forEach((jumpValue) => {
                this.buttons.push({ content: +jumpValue });
            });

            this.selectedProgressbar = this.progressBars[0].name;
            this.dropdownlistSettings = { source: this.dropdownlistSource, selectedIndex: 0, width: "200", height: "25", displayMember: "name" };
            this.progressbarDDL.createComponent(this.dropdownlistSettings);
        }

    }

    private ngAfterViewInit(): void {
        this.progressbarDDL.createComponent(this.dropdownlistSettings);
    }

    private getTypeValue(currentVal: number, maxValue: number, percetageValue: number): string {
        let type: string;
        if (currentVal == 0) {
            type = "warning";
        } else if (currentVal == maxValue) {
            type = "danger";
        } else if (percetageValue < 50) {
            type = "warning";
        } else {
            type = "success";
        }
        return type;
    }

    private generateNewProgressValues(val: number) {
        this.progressBars.forEach((element) => {
            if (element.name == this.selectedProgressbar) {
                let value = element.currentValue + val;
                if (value < 0) {
                    value = 0;
                }
                if (value > element.maxValue) {
                    value = element.maxValue;
                }
                element.currentValue = value;
                element.percetageValue = Math.floor((value / element.maxValue * 100));
                element.progressbarType = this.getTypeValue(value, element.maxValue, element.percetageValue);
            }
        });
    };

    private onChangeEvent(e: any): void {
        let item = this.progressbarDDL.getSelectedItem();
        this.selectedProgressbar = item.originalItem.name;
    }
}
