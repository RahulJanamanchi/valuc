import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/auth';
import { State } from './state';

const getError = (state: State): string => state.error;
const getIsLoading = (state: State): boolean => state.isLoading;
const getUser = (state: State): User => state.user;

export const authState = createFeatureSelector<State>('auth');
export const authError = createSelector(authState, getError);
export const authIsLoading = createSelector(authState, getIsLoading);
export const authUser = createSelector(authState, getUser);
