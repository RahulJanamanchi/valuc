import produce from 'immer';
import { State, initialState } from './state';
import { Actions, ActionTypes } from './actions';

export const itemReducer = produce((draft: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ITEM_REQUEST:
      draft.isLoading = true;
      draft.error = '';
      break;
    case ActionTypes.ITEM_SUCCESS:
      draft.isLoading = false;
      draft.items = action.payload.items;
      draft.error = '';
      break;
    case ActionTypes.ITEM_ADD:
      draft.isLoading=false;
      draft.items.findIndex(item=>item.itemCode === action.payload.itemCode)==-1?draft.items.push(action.payload):draft.items;
      draft.error='';
      break;
    case ActionTypes.ITEM_FAILURE:
      draft.isLoading = false;
      draft.error = action.payload.error;
      break;
    default:
      return draft;
  }
}, initialState);
