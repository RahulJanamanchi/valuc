import { createFeatureSelector, createSelector } from '@ngrx/store';
var getError = function (state) { return state.error; };
var getIsLoading = function (state) { return state.isLoading; };
var getBrands = function (state) { return state.brands; };
export var brandState = createFeatureSelector('brand');
export var brandError = createSelector(brandState, getError);
export var brandIsLoading = createSelector(brandState, getIsLoading);
export var brands = createSelector(brandState, getBrands);
//# sourceMappingURL=selectors.js.map