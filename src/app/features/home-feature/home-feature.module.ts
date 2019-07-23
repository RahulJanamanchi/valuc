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


@NgModule({
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
export class HomeFeatureModule { }
