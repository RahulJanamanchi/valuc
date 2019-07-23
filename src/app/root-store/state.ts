import { AuthState } from './auth-store';
import { BrandState } from './brand-store';
import { ItemState } from './item-store';

export interface State {
  auth: AuthState.State;
  brand: BrandState.State;
  item: ItemState.State;
  router: any;
}

export const initialState: State = {
  auth: AuthState.initialState,
  brand: BrandState.initialState,
  item: ItemState.initialState,
  router: {
    state: {
      url: window.location.pathname,
      params: {},
      queryParams: {}
    },
    navigationId: 0
  }
};
