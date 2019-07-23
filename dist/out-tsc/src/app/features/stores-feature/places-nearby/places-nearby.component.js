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
var mockPlaces = [
    {
        location: "Indira Nagar",
        numberOfStores: 28
    },
    {
        location: "KR Puram",
        numberOfStores: 19
    },
    {
        location: "Madiwala",
        numberOfStores: 20
    },
    {
        location: "JC Nagar",
        numberOfStores: 6
    },
    {
        location: "Bayyapanhalli",
        numberOfStores: 56
    }
];
for (var i = 0; i < 50; i++) {
    mockPlaces.push({
        location: "Fictious Nagar " + i,
        numberOfStores: Math.ceil(Math.random() * 101)
    });
}
var PlacesNearbyComponent = /** @class */ (function () {
    function PlacesNearbyComponent() {
        this.places = mockPlaces;
    }
    PlacesNearbyComponent.prototype.ngOnInit = function () {
    };
    PlacesNearbyComponent = __decorate([
        Component({
            selector: 'app-places-nearby',
            templateUrl: './places-nearby.component.html',
            styleUrls: ['./places-nearby.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PlacesNearbyComponent);
    return PlacesNearbyComponent;
}());
export { PlacesNearbyComponent };
//# sourceMappingURL=places-nearby.component.js.map