import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  exports: [IconComponent]
})
export class IconModule { }
