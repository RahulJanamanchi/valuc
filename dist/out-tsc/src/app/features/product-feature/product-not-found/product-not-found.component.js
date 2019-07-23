var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WrongQRCodeService } from '../../../services/wrong-qr-code.service';
var ProductNotFoundComponent = /** @class */ (function () {
    function ProductNotFoundComponent(router, route, wrongQRCode) {
        this.router = router;
        this.route = route;
        this.wrongQRCode = wrongQRCode;
        this.image = new ImageData(150, 150);
    }
    ProductNotFoundComponent.prototype.setQRImage = function (image) {
        this.image = image;
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        canvasEl.width = this.image.width;
        canvasEl.height = this.image.height;
        this.cx.putImageData(this.image, 0, 0);
    };
    ProductNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wrongQRCode.currentImage
            .subscribe(function (image) { return _this.setQRImage(image); });
    };
    ProductNotFoundComponent.prototype.backToScan = function () {
        this.router.navigate(['/scan']);
    };
    __decorate([
        ViewChild('qrcode'),
        __metadata("design:type", ElementRef)
    ], ProductNotFoundComponent.prototype, "canvas", void 0);
    ProductNotFoundComponent = __decorate([
        Component({
            selector: 'app-product-not-found',
            templateUrl: './product-not-found.component.html',
            styleUrls: ['./product-not-found.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, WrongQRCodeService])
    ], ProductNotFoundComponent);
    return ProductNotFoundComponent;
}());
export { ProductNotFoundComponent };
//# sourceMappingURL=product-not-found.component.js.map