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
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
var ProductRatingComponent = /** @class */ (function () {
    function ProductRatingComponent(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.rate = 3.4;
        this.ratingImage = "assets/icons/review.png";
        this.stories = {};
    }
    ProductRatingComponent.prototype.ngOnInit = function () {
        this.stories = [
            {
                "stars": "5",
                "heading": "Ragini Kumari",
                "description": "Affordable Style Statement Bag was delivered within 4 days, was housed in a beautiful drawstring bag and smelled like real leather too! Even though it is faux leather, I did appreciate the leather scent added to the bag. It added a touch of luxury to this affordable bag. The bag itself looks extremely stylish, is of very good quality and seems durable. I’ve been using it for less than a week and it’s been stain resistant for the most part."
            },
            {
                "stars": "4",
                "heading": "Anand Bajaj",
                "description": "Worth the money The product is worth the money spent, comes in a very classy packaging. Bottom line is dont expect it to be a LV bag, but for 1600, this is best you can get in the market. "
            },
            {
                "stars": "4.2",
                "heading": "Customer 3",
                "description": "Pure Leather I love leather products and this is an amazing item in my collection. I love the look and feel of the product. Of course it's not worth the MRP so post DISC the price was reasonable."
            }
        ];
    };
    ProductRatingComponent.prototype.getImgURL = function (path) {
        return this.sanitizer.bypassSecurityTrustStyle('' +
            ("url(\"" + path + "\")"));
    };
    ProductRatingComponent.prototype.gotoRoute = function (url) {
        this.router.navigateByUrl(url);
    };
    ProductRatingComponent = __decorate([
        Component({
            selector: 'app-product-rating',
            templateUrl: './product-rating.component.html',
            styleUrls: ['./product-rating.component.scss']
        }),
        __metadata("design:paramtypes", [DomSanitizer, Router])
    ], ProductRatingComponent);
    return ProductRatingComponent;
}());
export { ProductRatingComponent };
//# sourceMappingURL=product-rating.component.js.map