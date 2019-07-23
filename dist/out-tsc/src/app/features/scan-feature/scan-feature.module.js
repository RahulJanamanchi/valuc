var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanFeatureRoutingModule } from './scan-feature-routing.module';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { WebcamComponent } from './webcam/webcam.component';
import { ScanHomeComponent } from './scan-home/scan-home.component';
import { ScanFooterComponent } from './scan-footer/scan-footer.component';
import { IconModule } from '../../components/icon/icon.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FlexLayoutModule } from '@angular/flex-layout';
var ScanFeatureModule = /** @class */ (function () {
    function ScanFeatureModule() {
    }
    ScanFeatureModule = __decorate([
        NgModule({
            declarations: [
                QrCodeComponent,
                BarCodeComponent,
                EnterCodeComponent,
                WebcamComponent,
                ScanHomeComponent,
                ScanFooterComponent
            ],
            imports: [
                CommonModule,
                IconModule,
                AngularSvgIconModule,
                FlexLayoutModule,
                ScanFeatureRoutingModule
            ]
        })
    ], ScanFeatureModule);
    return ScanFeatureModule;
}());
export { ScanFeatureModule };
//# sourceMappingURL=scan-feature.module.js.map