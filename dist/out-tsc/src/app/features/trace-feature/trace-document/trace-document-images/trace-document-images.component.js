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
var TraceDocumentImagesComponent = /** @class */ (function () {
    function TraceDocumentImagesComponent(itemService) {
        this.itemService = itemService;
    }
    TraceDocumentImagesComponent.prototype.ngOnInit = function () {
        console.log(this.images.length);
    };
    // imageArray:string[]=["assets/icons/node_details.png", "assets/icons/node_details_2.png", "assets/icons/node_details_3.png"];
    TraceDocumentImagesComponent.prototype.imagesPresent = function () {
        return this.images ? this.images.length > 0 : false;
    };
    TraceDocumentImagesComponent.prototype.getImgURL = function (path) {
        return this.itemService.getImageSrc(path);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TraceDocumentImagesComponent.prototype, "images", void 0);
    TraceDocumentImagesComponent = __decorate([
        Component({
            selector: 'app-trace-document-images',
            templateUrl: './trace-document-images.component.html',
            styleUrls: ['./trace-document-images.component.scss']
        }),
        __metadata("design:paramtypes", [ItemService])
    ], TraceDocumentImagesComponent);
    return TraceDocumentImagesComponent;
}());
export { TraceDocumentImagesComponent };
//# sourceMappingURL=trace-document-images.component.js.map