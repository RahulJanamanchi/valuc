import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    const nextState = reducer(state, action);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] =
  environment.production ? [] : [debug];
