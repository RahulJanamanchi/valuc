var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonModule } from '../../components/button/button.module';
import { IconModule } from '../../components/icon/icon.module';
import { HomeComponent } from './home-container/home.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeCenterComponent } from './home-center/home-center.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
var HomeFeatureModule = /** @class */ (function () {
    function HomeFeatureModule() {
    }
    HomeFeatureModule = __decorate([
        NgModule({
            declarations: [
                HomeComponent,
                HomeFooterComponent,
                HomeCenterComponent
            ],
            imports: [
                CommonModule,
                ButtonModule,
                IconModule,
                MatProgressSpinnerModule,
                AppRoutingModule,
                AngularSvgIconModule
            ],
            exports: [HomeComponent]
        })
    ], HomeFeatureModule);
    return HomeFeatureModule;
}());
export { HomeFeatureModule };
//# sourceMappingURL=home-feature.module.js.map