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
var WrongQRCodeService = /** @class */ (function () {
    function WrongQRCodeService() {
        this.image = new BehaviorSubject(new ImageData(150, 150));
        this.currentImage = this.image.asObservable();
    }
    WrongQRCodeService.prototype.changeImage = function (image) {
        this.image.next(image);
    };
    WrongQRCodeService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WrongQRCodeService);
    return WrongQRCodeService;
}());
export { WrongQRCodeService };
//# sourceMappingURL=wrong-qr-code.service.js.map