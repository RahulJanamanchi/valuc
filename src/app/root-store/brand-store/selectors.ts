import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Brand } from '../../models/brand';
import { State } from './state';

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getBrands = (state: State): Brand[] => state.brands;

export const brandState = createFeatureSelector<State>('brand');
export const brandError = createSelector(brandState, getError);
export const brandIsLoading = createSelector(brandState, getIsLoading);
export const brands = createSelector(brandState, getBrands);
