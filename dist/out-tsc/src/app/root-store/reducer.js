import { environment } from '../../environments/environment';
export function debug(reducer) {
    return function (state, action) {
        var nextState = reducer(state, action);
        return nextState;
    };
}
export var metaReducers = environment.production ? [] : [debug];
//# sourceMappingURL=reducer.js.map