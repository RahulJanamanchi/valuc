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
import { Router, ActivatedRoute } from '@angular/router';
import { ProductHomeComponent } from '../product-home/product-home.component';
import { EvidenceDetailsService } from '../../evidence-details/services/evidence-details.service';
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, route, evidenceDetail, productHome) {
        this.router = router;
        this.route = route;
        this.evidenceDetail = evidenceDetail;
        this.productHome = productHome;
        this.isData = false;
        if (this.productHome.isLoad) {
            this.evidenceData = this.productHome.evidenceData;
            this.isData = true;
        }
    }
    ProductDetailsComponent.prototype.evidence = function (keyType) {
        this.evidenceDetail.evidenceTypeMethod(keyType);
        this.route.navigate(['usage'], { relativeTo: this.router });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ProductDetailsComponent.prototype, "productDetails", void 0);
    ProductDetailsComponent = __decorate([
        Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            EvidenceDetailsService,
            ProductHomeComponent])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map