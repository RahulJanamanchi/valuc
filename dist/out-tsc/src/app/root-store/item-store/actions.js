export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ITEM_REQUEST"] = "[Home] Item Request";
    ActionTypes["ITEM_SUCCESS"] = "[Home] Item Success";
    ActionTypes["ITEM_FAILURE"] = "[Home] Item Failure";
    ActionTypes["ITEM_ADD"] = "[Home] Item Add";
})(ActionTypes || (ActionTypes = {}));
var ItemRequestAction = /** @class */ (function () {
    function ItemRequestAction() {
        this.type = ActionTypes.ITEM_REQUEST;
    }
    return ItemRequestAction;
}());
export { ItemRequestAction };
var ItemSuccessAction = /** @class */ (function () {
    function ItemSuccessAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEM_SUCCESS;
    }
    return ItemSuccessAction;
}());
export { ItemSuccessAction };
var ItemFailureAction = /** @class */ (function () {
    function ItemFailureAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEM_FAILURE;
    }
    return ItemFailureAction;
}());
export { ItemFailureAction };
var ItemAddAction = /** @class */ (function () {
    function ItemAddAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ITEM_ADD;
    }
    return ItemAddAction;
}());
export { ItemAddAction };
//# sourceMappingURL=actions.js.map