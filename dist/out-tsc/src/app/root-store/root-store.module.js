var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { initialState } from './state';
import { metaReducers } from './reducer';
// import { AuthStoreModule } from './auth-store/auth-store.module';
// import { BrandStoreModule } from './brand-store/brand-store.module';
// import { ItemStoreModule } from './item-store/item-store.module';
var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                StoreModule.forRoot({ router: routerReducer }, { metaReducers: metaReducers, initialState: initialState }),
                StoreRouterConnectingModule.forRoot(),
                EffectsModule.forRoot([]),
            ]
        })
    ], RootStoreModule);
    return RootStoreModule;
}());
export { RootStoreModule };
//# sourceMappingURL=root-store.module.js.map