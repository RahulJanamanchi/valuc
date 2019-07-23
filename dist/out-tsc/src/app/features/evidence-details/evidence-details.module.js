var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceDetailsComponent } from './evidence-details.component';
import { ProductFeatureRoutingModule } from '../product-feature/product-feature-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapsModule } from 'src/app/components/maps/maps.module';
import { TabModule } from 'src/app/components/tab/tab.module';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonPillModule } from 'src/app/components/button-pill/button-pill.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { MatTabsModule } from '@angular/material/tabs';
var EvidenceDetailsModule = /** @class */ (function () {
    function EvidenceDetailsModule() {
    }
    EvidenceDetailsModule = __decorate([
        NgModule({
            declarations: [EvidenceDetailsComponent, ProductCardComponent, ProductsComponent],
            imports: [
                CommonModule,
                ProductFeatureRoutingModule,
                MatButtonModule,
                MatCardModule,
                FlexLayoutModule,
                MapsModule,
                TabModule,
                MatCardModule,
                MatDividerModule,
                ButtonPillModule,
                MatTabsModule
            ],
            exports: [EvidenceDetailsComponent]
        })
    ], EvidenceDetailsModule);
    return EvidenceDetailsModule;
}());
export { EvidenceDetailsModule };
//# sourceMappingURL=evidence-details.module.js.map