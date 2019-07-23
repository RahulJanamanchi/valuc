import produce from 'immer';
import { initialState } from './state';
import { ActionTypes } from './actions';
export var itemReducer = produce(function (draft, action) {
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
            draft.isLoading = false;
            draft.items.findIndex(function (item) { return item.itemCode === action.payload.itemCode; }) == -1 ? draft.items.push(action.payload) : draft.items;
            draft.error = '';
            break;
        case ActionTypes.ITEM_FAILURE:
            draft.isLoading = false;
            draft.error = action.payload.error;
            break;
        default:
            return draft;
    }
}, initialState);
//# sourceMappingURL=reducer.js.map