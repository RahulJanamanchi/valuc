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
import { Router, ActivatedRoute } from '@angular/router';
import { homePageConfiguration } from '../../../../environments/homePageConfiguration';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.logo = homePageConfiguration.logo;
        this.companyName = homePageConfiguration.companyName;
        this.Slogan = homePageConfiguration.Slogan;
        this.backgroundimg = homePageConfiguration.background;
        //this.buttonLeft = homePageConfiguration.buttonColorleft;
        //his.buttonRight = homePageConfiguration.buttonColorright;
    };
    HomeComponent.prototype.product = function () {
        this.route.navigate(['scan']);
    };
    HomeComponent.prototype.gotoSettings = function () {
        this.route.navigate(['settings']);
    };
    HomeComponent.prototype.styleBackGround = function () {
        return {
            'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)),url(' + this.backgroundimg + ')',
            'background-size': 'cover',
            'background-repeat': 'repeat',
            'background-position': 'center',
            'background-attachment': 'scroll',
        };
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map