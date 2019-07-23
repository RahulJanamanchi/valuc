var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home-feature/home-container/home.component';
import { EnvironmentConfigComponent } from './features/home-feature/environment-config/environment-config.component';
var routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'settings',
        component: EnvironmentConfigComponent
    },
    {
        path: 'scan',
        loadChildren: './features/scan-feature/scan-feature.module#ScanFeatureModule'
    },
    {
        path: 'product',
        loadChildren: './features/product-feature/product-feature.module#ProductFeatureModule'
    },
    {
        path: 'evidence/:evidenceType',
        loadChildren: './features/evidence-details/evidence-details.module#EvidenceDetailsModule'
    },
    {
        path: 'stores',
        loadChildren: './features/stores-feature/stores-feature.module#StoresFeatureModule'
    },
    {
        path: 'trace',
        loadChildren: './features/trace-feature/trace-feature.module#TraceFeatureModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map