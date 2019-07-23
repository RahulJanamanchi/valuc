var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var TraceDatesComponent = /** @class */ (function () {
    function TraceDatesComponent() {
        this.dates = [
            '9 Jan',
            '18 Jan',
            '24 Jan',
            '11 Feb',
            '14 Feb',
            '19 Feb'
        ];
    }
    TraceDatesComponent.prototype.ngOnInit = function () {
    };
    TraceDatesComponent.prototype.getDates = function () {
        return this.dates.map(function (d) { return d.split(' '); }).reverse();
    };
    TraceDatesComponent = __decorate([
        Component({
            selector: 'app-trace-dates',
            templateUrl: './trace-dates.component.html',
            styleUrls: ['./trace-dates.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], TraceDatesComponent);
    return TraceDatesComponent;
}());
export { TraceDatesComponent };
//# sourceMappingURL=trace-dates.component.js.map