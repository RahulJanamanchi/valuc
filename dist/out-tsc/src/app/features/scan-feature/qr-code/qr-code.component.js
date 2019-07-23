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
import jsQR from 'jsqr';
import { WrongQRCodeService } from '../../../services/wrong-qr-code.service';
import { ProductDetailsService } from '../../../services/product-details.service';
import * as localforage from 'localforage';
var QrCodeComponent = /** @class */ (function () {
    function QrCodeComponent(router, wrongQR, product) {
        this.router = router;
        this.wrongQR = wrongQR;
        this.product = product;
    }
    QrCodeComponent.prototype.ngOnInit = function () {
    };
    QrCodeComponent.prototype.handleScan = function (imageData) {
        var code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
            var obj = code.data.includes('batchNumber') ? JSON.parse(code.data) : null;
            if (obj) {
                this.wrongQR.changeImage(imageData);
                this.product.setData(code.data);
                localforage.setItem('scannedProductDetails', code.data);
                this.router.navigateByUrl('/product');
            }
            else {
                this.wrongQR.changeImage(imageData);
                this.router.navigateByUrl('product/error');
            }
        }
    };
    QrCodeComponent = __decorate([
        Component({
            selector: 'app-qr-code',
            templateUrl: './qr-code.component.html',
            styleUrls: ['./qr-code.component.scss']
        }),
        __metadata("design:paramtypes", [Router, WrongQRCodeService, ProductDetailsService])
    ], QrCodeComponent);
    return QrCodeComponent;
}());
export { QrCodeComponent };
//# sourceMappingURL=qr-code.component.js.map