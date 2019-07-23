var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFeatureRoutingModule } from './product-feature-routing.module';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGradesComponent } from './product-grades/product-grades.component';
import { ProductQualityComponent } from './product-quality/product-quality.component';
import { EvidenceDetailsModule } from '../evidence-details/evidence-details.module';
// Angular Material Imports
import { ButtonModule } from '../../components/button/button.module';
import { IconModule } from '../../components/icon/icon.module';
import { TabModule } from '../../components/tab/tab.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProductStoryComponent } from './product-story/product-story.component';
import { NavigationMenuModule } from 'src/app/components/navigation-menu/navigation-menu.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductUsageComponent } from './product-usage/product-usage.component';
import { StoryButtonModule } from '../../components/story-button/story-button.module';
import { MatVideoModule } from 'mat-video';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { StarRatingModule } from 'angular-star-rating';
var ProductFeatureModule = /** @class */ (function () {
    function ProductFeatureModule() {
    }
    ProductFeatureModule = __decorate([
        NgModule({
            declarations: [
                ProductHomeComponent,
                ProductNotFoundComponent,
                ProductLandingComponent,
                ProductDetailsComponent,
                ProductGradesComponent,
                ProductQualityComponent,
                ProductStoryComponent,
                ProductUsageComponent,
                ProductRatingComponent
            ],
            imports: [
                CommonModule,
                ProductFeatureRoutingModule,
                EvidenceDetailsModule,
                ButtonModule,
                StoryButtonModule,
                IconModule,
                TabModule,
                MatDividerModule,
                MatCardModule,
                MatProgressBarModule,
                MatButtonModule,
                MatChipsModule,
                MatVideoModule,
                AngularSvgIconModule,
                FlexLayoutModule,
                StarRatingModule.forRoot(),
                NavigationMenuModule
            ]
        })
    ], ProductFeatureModule);
    return ProductFeatureModule;
}());
export { ProductFeatureModule };
//# sourceMappingURL=product-feature.module.js.map