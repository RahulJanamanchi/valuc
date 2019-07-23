import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Item } from '../../models/item';
import { State } from './state';

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getItems = (state: State): Item[] => state.items;

export const itemState = createFeatureSelector<State>('item');
export const itemError = createSelector(itemState, getError);
export const itemIsLoading = createSelector(itemState, getIsLoading);
export const items = createSelector(itemState, getItems);
