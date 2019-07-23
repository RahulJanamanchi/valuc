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
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
var TraceDocumentHomeComponent = /** @class */ (function () {
    function TraceDocumentHomeComponent(router, sanitizer) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.imageURLs = [];
        this.videoURLs = [];
    }
    TraceDocumentHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.node ? this.node.inventories.length > 0 : false) {
            _.get(this.node, ['inventories', '0', 'inventory', 'gallery', 'images']) ? this.node.inventories[0].inventory.gallery.images.map(function (image) { return _this.imageURLs.push(image.imageURL); }) : [];
            this.backgroundImageURL = _.get(this.node, ['inventories', '0', 'inventory', 'gallery', 'images']) ? this.node.inventories[0].inventory.gallery.images[0].imageURL : "";
            _.get(this.node, ['inventories', '0', 'inventory', 'gallery', 'videos']) ? this.node.inventories[0].inventory.gallery.videos.map(function (video) { return _this.videoURLs.push(video.videoURL); }) : [];
            this.batchNumber = _.get(this.node, ['inventories', 'stockMasters', '0', 'stockMaster', 'batchNumber']);
            this.certificates = _.get(this.node, ['inventories', '0', 'inventory', 'certificates']);
            this.product = this.node.inventories[0].inventory;
        }
        else if (this.businessUnit) {
            _.get(this.businessUnit, ['gallery', 'images']) ? _.get(this.businessUnit, ['gallery', 'images']).map(function (image) { return _this.imageURLs.push(image.imageURL); }) : [];
            _.get(this.businessUnit, ['gallery', 'videos']) ? _.get(this.businessUnit, ['gallery', 'videos']).map(function (video) { return _this.videoURLs.push(video.videoURL); }) : [];
            this.backgroundImageURL = _.get(this.businessUnit, ['gallery', 'images']) ? this.businessUnit.gallery.images[0].imageURL : "";
            this.certificates = _.get(this.businessUnit, ['certificates']);
        }
    };
    TraceDocumentHomeComponent.prototype.getImgURL = function (path) {
        return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(200,20,0,0), rgba(128,128,128,1)), ' +
            ("url(\"" + environment.apis.images + "/" + path + "\")"));
    };
    TraceDocumentHomeComponent.prototype.toTracePage = function () {
        this.router.navigateByUrl('/trace');
    };
    TraceDocumentHomeComponent.prototype.toProductPage = function () {
        this.router.navigateByUrl('/product');
    };
    TraceDocumentHomeComponent.prototype.getStyle = function () {
        return { 'width.px': 30, 'height.px': 30, 'background-color': 'white', 'border-radius': '50px' };
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TraceDocumentHomeComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TraceDocumentHomeComponent.prototype, "businessUnit", void 0);
    TraceDocumentHomeComponent = __decorate([
        Component({
            selector: 'app-trace-document-home',
            templateUrl: './trace-document-home.component.html',
            styleUrls: ['./trace-document-home.component.scss']
        }),
        __metadata("design:paramtypes", [Router, DomSanitizer])
    ], TraceDocumentHomeComponent);
    return TraceDocumentHomeComponent;
}());
export { TraceDocumentHomeComponent };
//# sourceMappingURL=trace-document-home.component.js.map