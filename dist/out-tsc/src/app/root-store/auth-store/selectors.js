import { createFeatureSelector, createSelector } from '@ngrx/store';
var getError = function (state) { return state.error; };
var getIsLoading = function (state) { return state.isLoading; };
var getUser = function (state) { return state.user; };
export var authState = createFeatureSelector('auth');
export var authError = createSelector(authState, getError);
export var authIsLoading = createSelector(authState, getIsLoading);
export var authUser = createSelector(authState, getUser);
//# sourceMappingURL=selectors.js.map