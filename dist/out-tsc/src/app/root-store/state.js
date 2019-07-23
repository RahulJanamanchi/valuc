import { AuthState } from './auth-store';
import { BrandState } from './brand-store';
import { ItemState } from './item-store';
export var initialState = {
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
//# sourceMappingURL=state.js.map