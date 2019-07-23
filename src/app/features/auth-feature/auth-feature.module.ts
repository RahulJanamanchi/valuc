import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ButtonModule } from '../../components/button/button.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [LoginComponent]
})
export class AuthFeatureModule { }
