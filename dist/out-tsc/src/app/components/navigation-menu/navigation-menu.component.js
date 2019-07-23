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
var NavigationMenuComponent = /** @class */ (function () {
    function NavigationMenuComponent() {
        /*
        *  If you want custom menus, pass in below way else default values are set if menus is not passed
        *  Array of Objects having name to display and the route links for them
        *  Example [ {name: 'home', routeLink: '/product' } ]
        */
        this.menus = [
            { 'name': 'Home', 'routeLink': '/product' },
            { 'name': 'Story', 'routeLink': '/product/story' },
            { 'name': 'Journey', 'routeLink': '/trace' },
            { 'name': 'Usability', 'routeLink': '/product/usage' },
            { 'name': 'Reviews', 'routeLink': '/comingSoon' }
        ];
        this.isNavbarCollapsed = true;
    }
    NavigationMenuComponent.prototype.ngOnInit = function () {
    };
    NavigationMenuComponent.prototype.toggleMenu = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationMenuComponent.prototype, "menus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationMenuComponent.prototype, "isNavbarCollapsed", void 0);
    NavigationMenuComponent = __decorate([
        Component({
            selector: 'app-navigation-menu',
            templateUrl: './navigation-menu.component.html',
            styleUrls: ['./navigation-menu.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());
export { NavigationMenuComponent };
//# sourceMappingURL=navigation-menu.component.js.map