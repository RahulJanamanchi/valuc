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
var mockStores = [
    {
        name: 'Top in Town',
        location: 'Jeevan Bhima Nagar, Bangalore, Karnataka'
    },
    {
        name: 'More Supermarket',
        location: 'CV Raman Nagar, Bangalore, Karnataka'
    },
    {
        name: 'Peekay Supermarket',
        location: 'JC Nagar, Benson Town, Bangalore, Karnataka'
    },
];
for (var i = 0; i < 100; i++) {
    mockStores.push({
        name: "Mock Supermarket " + i,
        location: 'Fictious Nagar, Bangalore, Karnataka'
    });
}
var StoresNearbyComponent = /** @class */ (function () {
    function StoresNearbyComponent() {
        this.stores = mockStores;
    }
    StoresNearbyComponent.prototype.ngOnInit = function () {
    };
    StoresNearbyComponent = __decorate([
        Component({
            selector: 'app-stores-nearby',
            templateUrl: './stores-nearby.component.html',
            styleUrls: ['./stores-nearby.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], StoresNearbyComponent);
    return StoresNearbyComponent;
}());
export { StoresNearbyComponent };
//# sourceMappingURL=stores-nearby.component.js.map