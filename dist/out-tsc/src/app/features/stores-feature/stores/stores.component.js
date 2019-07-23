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
var StoresComponent = /** @class */ (function () {
    function StoresComponent(router) {
        this.router = router;
        this.query = '';
        this.mockProduct = {
        // title: 'Comfort Cleanse',
        // brand: 'Himalaya',
        // quantity: '200 grams (100 capsules)',
        // location: 'Kshetra Agricultures, CV Raman Nagar, Kaggadaspura, Bangalore, Karnataka',
        };
        this.results = [];
    }
    StoresComponent.prototype.ngOnInit = function () {
    };
    StoresComponent.prototype.updateQuery = function (query) {
        var _this = this;
        this.query = query;
        setTimeout(function () {
            var results = [];
            var numberOfResults = Math.floor(Math.random() * 5);
            for (var i = 0; i < numberOfResults; i++) {
                results.push(i + " for " + _this.query);
            }
            _this.results = results;
        }, 10);
    };
    StoresComponent = __decorate([
        Component({
            selector: 'app-stores',
            templateUrl: './stores.component.html',
            styleUrls: ['./stores.component.scss']
        }),
        __metadata("design:paramtypes", [Router])
    ], StoresComponent);
    return StoresComponent;
}());
export { StoresComponent };
//# sourceMappingURL=stores.component.js.map