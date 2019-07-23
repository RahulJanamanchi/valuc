import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanHomeComponent } from './scan-home/scan-home.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanFeatureRoutingModule { }
