var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { EvidenceDetailsComponent } from '../evidence-details/evidence-details.component';
import { ProductStoryComponent } from './product-story/product-story.component';
import { ProductUsageComponent } from './product-usage/product-usage.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
var routes = [
    {
        path: '',
        component: ProductLandingComponent
    },
    {
        path: 'evidence',
        component: EvidenceDetailsComponent
    },
    {
        path: 'story',
        component: ProductStoryComponent
    },
    {
        path: 'usage',
        component: ProductUsageComponent
    },
    {
        path: 'error',
        component: ProductNotFoundComponent
    },
    {
        path: 'home',
        component: ProductHomeComponent
    },
    {
        path: 'rating',
        component: ProductRatingComponent
    }
];
var ProductFeatureRoutingModule = /** @class */ (function () {
    function ProductFeatureRoutingModule() {
    }
    ProductFeatureRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ProductFeatureRoutingModule);
    return ProductFeatureRoutingModule;
}());
export { ProductFeatureRoutingModule };
//# sourceMappingURL=product-feature-routing.module.js.map