var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { IconModule } from '../../components/icon/icon.module';
import { StoresFeatureRoutingModule } from './stores-feature-routing.module';
import { StoresComponent } from './stores/stores.component';
import { StoresHeaderComponent } from './stores-header/stores-header.component';
import { StoresNearbyComponent } from './stores-nearby/stores-nearby.component';
import { PlacesNearbyComponent } from './places-nearby/places-nearby.component';
import { SearchResultsComponent } from './search-results/search-results.component';
var StoresFeatureModule = /** @class */ (function () {
    function StoresFeatureModule() {
    }
    StoresFeatureModule = __decorate([
        NgModule({
            declarations: [StoresComponent, StoresHeaderComponent, StoresNearbyComponent, PlacesNearbyComponent, SearchResultsComponent],
            imports: [
                CommonModule,
                FormsModule,
                VirtualScrollerModule,
                StoresFeatureRoutingModule,
                IconModule
            ],
            entryComponents: [StoresComponent]
        })
    ], StoresFeatureModule);
    return StoresFeatureModule;
}());
export { StoresFeatureModule };
//# sourceMappingURL=stores-feature.module.js.map