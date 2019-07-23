import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { initialState } from './state';
import { metaReducers } from './reducer';
// import { AuthStoreModule } from './auth-store/auth-store.module';
// import { BrandStoreModule } from './brand-store/brand-store.module';
// import { ItemStoreModule } from './item-store/item-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ router: routerReducer }, { metaReducers, initialState }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    // }),
    // AuthStoreModule,
    // BrandStoreModule,
    // ItemStoreModule,
  ]
})
export class RootStoreModule { }
