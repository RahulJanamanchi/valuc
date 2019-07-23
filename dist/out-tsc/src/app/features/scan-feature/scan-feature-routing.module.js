var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScanHomeComponent } from './scan-home/scan-home.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
var routes = [
    {
        path: '',
        component: ScanHomeComponent,
        children: [
            {
                path: 'qr-code',
                component: QrCodeComponent
            },
            {
                path: 'bar-code',
                component: BarCodeComponent
            },
            {
                path: 'enter-code',
                component: EnterCodeComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'qr-code'
            }
        ]
    }
];
var ScanFeatureRoutingModule = /** @class */ (function () {
    function ScanFeatureRoutingModule() {
    }
    ScanFeatureRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ScanFeatureRoutingModule);
    return ScanFeatureRoutingModule;
}());
export { ScanFeatureRoutingModule };
//# sourceMappingURL=scan-feature-routing.module.js.map