var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as localforage from 'localforage';
var ProductDetailsService = /** @class */ (function () {
    function ProductDetailsService() {
        var _this = this;
        this.data = new BehaviorSubject({ 'sequence': '', 'batchNumber': '', 'itemCode': '' });
        this.productData = this.data.asObservable();
        localforage.getItem('scannedProductDetails').then(function (value) {
            _this.setData(value);
        });
    }
    ProductDetailsService.prototype.setData = function (data) {
        this.data.next(data);
    };
    ProductDetailsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailsService);
    return ProductDetailsService;
}());
export { ProductDetailsService };
//# sourceMappingURL=product-details.service.js.map