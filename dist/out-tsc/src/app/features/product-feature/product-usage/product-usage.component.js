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
var ProductUsageComponent = /** @class */ (function () {
    function ProductUsageComponent(router, route) {
        this.router = router;
        this.route = route;
        this.hidedNavbar = true;
        this.images = [];
        this.main_image = "";
        this.rupee_image = "";
        this.expand = "";
        this.camera_image = "";
        this.cost = "";
        this.data = "A T&A shirt is made from 33 individual pieces of fine cloth and 13 iridescent mother-of-pearl buttons. Rigorous quality checks are carried out at all…";
        this.isExpanded = false;
    }
    ProductUsageComponent.prototype.ngOnInit = function () {
        this.images = ["assets/icons/usage1_2.png", "assets/icons/usage_2.png", "assets/icons/usage_3.png", "assets/icons/usage_4.png", "assets/icons/usage_5.png"];
        this.main_image = "assets/icons/usage1_2.png";
        this.rupee_image = "assets/icons/rupee-indian.svg";
        this.camera_image = "assets/icons/Camera icon.svg";
        this.cost = "3,756";
        this.expand = "assets/icons/Expand.svg";
    };
    ProductUsageComponent.prototype.imageSelection = function (image) {
        this.main_image = image;
    };
    ProductUsageComponent.prototype.scanproduct = function () {
        this.router.navigate(['/scan']);
    };
    ProductUsageComponent.prototype.toggleExpandImage = function () {
        this.isExpanded = !this.isExpanded;
    };
    ProductUsageComponent = __decorate([
        Component({
            selector: 'app-product-usage',
            templateUrl: './product-usage.component.html',
            styleUrls: ['./product-usage.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute])
    ], ProductUsageComponent);
    return ProductUsageComponent;
}());
export { ProductUsageComponent };
//# sourceMappingURL=product-usage.component.js.map