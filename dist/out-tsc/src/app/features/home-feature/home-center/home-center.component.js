var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { homePageConfiguration } from '../../../../environments/homePageConfiguration';
var HomeCenterComponent = /** @class */ (function () {
    function HomeCenterComponent() {
        this.isProduction = environment.production;
    }
    HomeCenterComponent.prototype.ngOnInit = function () {
        this.Slogan = homePageConfiguration.Slogan;
        //this.Slogan2 = homePageConfiguration.Slogan2;
    };
    HomeCenterComponent.prototype.getLogo = function () {
        return {
            'width.': 75,
            'height.px': 75,
            'background-color': 'transparent',
            'margin-right.vw': -60,
        };
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HomeCenterComponent.prototype, "logo", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HomeCenterComponent.prototype, "slogan", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HomeCenterComponent.prototype, "companyName", void 0);
    HomeCenterComponent = __decorate([
        Component({
            selector: 'app-home-center',
            templateUrl: './home-center.component.html',
            styleUrls: ['./home-center.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HomeCenterComponent);
    return HomeCenterComponent;
}());
export { HomeCenterComponent };
//# sourceMappingURL=home-center.component.js.map