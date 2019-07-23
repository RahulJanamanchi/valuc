import produce from 'immer';
import { initialState } from './state';
import { ActionTypes } from './actions';
export var brandReducer = produce(function (draft, action) {
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
//# sourceMappingURL=reducer.js.map