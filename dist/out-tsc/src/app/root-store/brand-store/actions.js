export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["BRAND_REQUEST"] = "[Home] Brand Request";
    ActionTypes["BRAND_SUCCESS"] = "[Home] Brand Success";
    ActionTypes["BRAND_FAILURE"] = "[Home] Brand Failure";
})(ActionTypes || (ActionTypes = {}));
var BrandRequestAction = /** @class */ (function () {
    function BrandRequestAction() {
        this.type = ActionTypes.BRAND_REQUEST;
    }
    return BrandRequestAction;
}());
export { BrandRequestAction };
var BrandSuccessAction = /** @class */ (function () {
    function BrandSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.BRAND_SUCCESS;
    }
    return BrandSuccessAction;
}());
export { BrandSuccessAction };
var BrandFailureAction = /** @class */ (function () {
    function BrandFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.BRAND_FAILURE;
    }
    return BrandFailureAction;
}());
export { BrandFailureAction };
//# sourceMappingURL=actions.js.map