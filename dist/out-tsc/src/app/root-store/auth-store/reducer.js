import produce from 'immer';
import { ActionTypes } from './actions';
import { initialState } from './state';
export var authReducer = produce(function (draft, action) {
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
//# sourceMappingURL=reducer.js.map