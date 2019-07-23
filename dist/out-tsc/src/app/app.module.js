var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { MatSelectModule } from '@angular/material';
import { MatVideoModule } from 'mat-video';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map