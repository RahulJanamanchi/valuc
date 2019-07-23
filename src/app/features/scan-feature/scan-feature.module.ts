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

@NgModule({
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
export class ScanFeatureModule { }
