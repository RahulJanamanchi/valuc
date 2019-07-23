var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { homePageConfiguration } from '../../../../environments/homePageConfiguration';
var HomeFooterComponent = /** @class */ (function () {
    function HomeFooterComponent(router, route) {
        this.router = router;
        this.route = route;
        this.submit = new EventEmitter();
    }
    HomeFooterComponent.prototype.ngOnInit = function () {
        this.Slogan = homePageConfiguration.Slogan;
        this.camImg = homePageConfiguration.camImg;
    };
    HomeFooterComponent.prototype.product = function () {
        this.route.navigate(['/scan']);
    };
    HomeFooterComponent.prototype.backgroundImg = function () {
        return {
            'background-image': (this.camImg)
        };
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HomeFooterComponent.prototype, "submit", void 0);
    HomeFooterComponent = __decorate([
        Component({
            selector: 'app-home-footer',
            templateUrl: './home-footer.component.html',
            styleUrls: ['./home-footer.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router])
    ], HomeFooterComponent);
    return HomeFooterComponent;
}());
export { HomeFooterComponent };
//# sourceMappingURL=home-footer.component.js.map