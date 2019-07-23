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
import { EvidenceDetailsService } from '../services/evidence-details.service';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(evidenceDetailsService) {
        this.evidenceDetailsService = evidenceDetailsService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evidenceDetailsService.products.subscribe(function (prods) {
            if (prods != [] && prods != undefined) {
                _this.products = prods;
                _this.productLength = _this.products.length;
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "evidenceType", void 0);
    ProductsComponent = __decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        }),
        __metadata("design:paramtypes", [EvidenceDetailsService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map