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
import { ItemService } from 'src/app/services/item.service';
var TraceDocumentCertificatesComponent = /** @class */ (function () {
    function TraceDocumentCertificatesComponent(itemService) {
        this.itemService = itemService;
    }
    TraceDocumentCertificatesComponent.prototype.ngOnInit = function () {
    };
    TraceDocumentCertificatesComponent.prototype.isCertificatePresent = function () {
        return this.certificates ? this.certificates.length > 0 : false;
    };
    TraceDocumentCertificatesComponent.prototype.getImageSrc = function (path) {
        return this.itemService.getImageSrc(path);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TraceDocumentCertificatesComponent.prototype, "certificates", void 0);
    TraceDocumentCertificatesComponent = __decorate([
        Component({
            selector: 'app-trace-document-certificates',
            templateUrl: './trace-document-certificates.component.html',
            styleUrls: ['./trace-document-certificates.component.scss']
        }),
        __metadata("design:paramtypes", [ItemService])
    ], TraceDocumentCertificatesComponent);
    return TraceDocumentCertificatesComponent;
}());
export { TraceDocumentCertificatesComponent };
//# sourceMappingURL=trace-document-certificates.component.js.map