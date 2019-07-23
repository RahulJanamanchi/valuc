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
import { DomSanitizer } from '@angular/platform-browser';
var jsonData = require('../../../../assets/json/storyData.json');
import { StoryDetailsService } from '../../../components/story-button/story-service/story-details.service';
var ProductStoryComponent = /** @class */ (function () {
    function ProductStoryComponent(router, sanitizer, storyService) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.storyService = storyService;
        this.storydata = { "title": "",
            "logoUrl": "",
            "imageUrl": "",
            "description": "",
            "story": [] };
        this.isStoryData = false;
        this.pageFlag = false;
    }
    ProductStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designerWebsiteURL = this.sanitizer.bypassSecurityTrustUrl("http://nvipani.com");
        this.storyData = jsonData;
        this.isStoryData = true;
        this.storyService.storyDetails.subscribe(function (data) {
            _this.storydata = data;
            _this.gotoRoute('/product/story');
        });
    };
    ProductStoryComponent.prototype.getStyle = function () {
        return { 'width.px': 20, 'height.px': 20 };
    };
    ProductStoryComponent.prototype.getWebsiteStyle = function () {
        return { 'width.px': 30, 'height.px': 30, 'border-radius': '50px', 'position': 'relative', 'top': '10px', 'left': '10px' };
    };
    ProductStoryComponent.prototype.gotoRoute = function (url) {
        this.router.navigateByUrl(url);
    };
    ProductStoryComponent.prototype.getImgURL = function (path) {
        return this.sanitizer.bypassSecurityTrustStyle('' +
            ("url(\"" + path + "\")"));
    };
    ProductStoryComponent = __decorate([
        Component({
            selector: 'app-product-story',
            templateUrl: './product-story.component.html',
            styleUrls: ['./product-story.component.scss']
        }),
        __metadata("design:paramtypes", [Router, DomSanitizer, StoryDetailsService])
    ], ProductStoryComponent);
    return ProductStoryComponent;
}());
export { ProductStoryComponent };
//# sourceMappingURL=product-story.component.js.map