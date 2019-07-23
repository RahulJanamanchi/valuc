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

@NgModule({
  declarations: [TraceDocumentLandingComponent,TraceDocumentCertificatesComponent,TraceDocumentHomeComponent, TraceDocumentImagesComponent, TraceDocumentVideosComponent],
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
export class TraceDocumentModule { }