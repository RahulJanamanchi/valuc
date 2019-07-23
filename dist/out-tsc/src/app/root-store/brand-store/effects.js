var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BrandService } from '../../services/brand.service';
import * as brandActions from './actions';
var BrandEffects = /** @class */ (function () {
    function BrandEffects(brandService, actions$) {
        var _this = this;
        this.brandService = brandService;
        this.actions$ = actions$;
        this.brandRequestEffect$ = this.actions$.pipe(ofType(brandActions.ActionTypes.BRAND_REQUEST), switchMap(function (action) {
            return _this.brandService.
                fetchBrands().
                pipe(map(function (brands) { return new brandActions.BrandSuccessAction({ brands: brands.slice(0, 5) }); }), catchError(function (error) { return of(new brandActions.BrandFailureAction({ error: error })); }));
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], BrandEffects.prototype, "brandRequestEffect$", void 0);
    BrandEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [BrandService, Actions])
    ], BrandEffects);
    return BrandEffects;
}());
export { BrandEffects };
//# sourceMappingURL=effects.js.map