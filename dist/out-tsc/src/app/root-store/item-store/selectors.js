import { createFeatureSelector, createSelector } from '@ngrx/store';
var getError = function (state) { return state.error; };
var getIsLoading = function (state) { return state.isLoading; };
var getItems = function (state) { return state.items; };
export var itemState = createFeatureSelector('item');
export var itemError = createSelector(itemState, getError);
export var itemIsLoading = createSelector(itemState, getIsLoading);
export var items = createSelector(itemState, getItems);
//# sourceMappingURL=selectors.js.map