export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOGIN_REQUEST"] = "[My Feature] Login Request";
    ActionTypes["LOGIN_FAILURE"] = "[My Feature] Login Failure";
    ActionTypes["LOGIN_SUCCESS"] = "[My Feature] Login Success";
})(ActionTypes || (ActionTypes = {}));
var LoginRequestAction = /** @class */ (function () {
    function LoginRequestAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN_REQUEST;
    }
    return LoginRequestAction;
}());
export { LoginRequestAction };
var LoginFailureAction = /** @class */ (function () {
    function LoginFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN_FAILURE;
    }
    return LoginFailureAction;
}());
export { LoginFailureAction };
var LoginSuccessAction = /** @class */ (function () {
    function LoginSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN_SUCCESS;
    }
    return LoginSuccessAction;
}());
export { LoginSuccessAction };
//# sourceMappingURL=actions.js.map