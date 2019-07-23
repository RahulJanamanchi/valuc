import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/auth-feature/login/login.component';
import { HomeComponent } from './features/home-feature/home-container/home.component';
import {EnvironmentConfigComponent} from './features/home-feature/environment-config/environment-config.component'
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
