import produce from 'immer';
import { State, initialState } from './state';
import { Actions, ActionTypes } from './actions';

export const brandReducer = produce((draft: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.BRAND_REQUEST:
      draft.isLoading = true;
      draft.error = '';
      break;
    case ActionTypes.BRAND_SUCCESS:
      draft.isLoading = false;
      draft.brands = action.payload.brands;
      draft.error = '';
      break;
    case ActionTypes.BRAND_FAILURE:
      draft.isLoading = false;
      draft.error = action.payload.error;
      break;
  }
}, initialState);
