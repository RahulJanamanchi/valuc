import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { AuthFeatureModule } from './features/auth-feature/auth-feature.module';
import { HomeFeatureModule } from './features/home-feature/home-feature.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { EnvironmentConfigComponent } from './features/home-feature/environment-config/environment-config.component';
import {MatSelectModule} from '@angular/material';
import { MatVideoModule } from 'mat-video';


@NgModule({
  declarations: [
    AppComponent,
    EnvironmentConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RootStoreModule,
    AuthFeatureModule,
    HomeFeatureModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatVideoModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
