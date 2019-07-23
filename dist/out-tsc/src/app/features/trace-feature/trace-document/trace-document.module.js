var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceDocumentRoutingModule } from './trace-document-routing.module';
import { TraceDocumentCertificatesComponent } from './trace-document-certificates/trace-document-certificates.component';
import { TraceDocumentHomeComponent } from './trace-document-home/trace-document-home.component';
import { TraceDocumentLandingComponent } from './trace-document-landing/trace-document-landing.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { IconModule } from 'src/app/components/icon/icon.module';
import { TabModule } from 'src/app/components/tab/tab.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TraceDocumentImagesComponent } from './trace-document-images/trace-document-images.component';
import { TraceDocumentVideosComponent } from './trace-document-videos/trace-document-videos.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
var TraceDocumentModule = /** @class */ (function () {
    function TraceDocumentModule() {
    }
    TraceDocumentModule = __decorate([
        NgModule({
            declarations: [TraceDocumentLandingComponent, TraceDocumentCertificatesComponent, TraceDocumentHomeComponent, TraceDocumentImagesComponent, TraceDocumentVideosComponent],
            imports: [
                CommonModule,
                TraceDocumentRoutingModule,
                ButtonModule,
                IconModule,
                TabModule,
                FlexLayoutModule,
                AngularSvgIconModule
            ]
        })
    ], TraceDocumentModule);
    return TraceDocumentModule;
}());
export { TraceDocumentModule };
//# sourceMappingURL=trace-document.module.js.map