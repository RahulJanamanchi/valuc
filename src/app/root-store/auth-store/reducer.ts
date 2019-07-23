import produce from 'immer';
import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export const authReducer = produce((draft: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      draft.error = null;
      draft.isLoading = true;
      break;
    case ActionTypes.LOGIN_SUCCESS:
      draft.error = null;
      draft.isLoading = false;
      draft.user = action.payload.user;
      break;
    case ActionTypes.LOGIN_FAILURE:
      draft.error = action.payload.error;
      draft.isLoading = false;
      break;
  }
}, initialState);
