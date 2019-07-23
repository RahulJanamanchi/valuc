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
import { Router } from '@angular/router';
var BarCodeComponent = /** @class */ (function () {
    function BarCodeComponent(router) {
        this.router = router;
    }
    BarCodeComponent.prototype.ngOnInit = function () {
    };
    BarCodeComponent = __decorate([
        Component({
            selector: 'app-bar-code',
            templateUrl: './bar-code.component.html',
            styleUrls: ['./bar-code.component.scss']
        }),
        __metadata("design:paramtypes", [Router])
    ], BarCodeComponent);
    return BarCodeComponent;
}());
export { BarCodeComponent };
//# sourceMappingURL=bar-code.component.js.map