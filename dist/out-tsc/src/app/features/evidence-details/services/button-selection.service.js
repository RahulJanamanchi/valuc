var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter, Output } from '@angular/core';
var ButtonSelectionService = /** @class */ (function () {
    function ButtonSelectionService() {
        this.style = new EventEmitter();
        this.productView = new EventEmitter();
        this.flag = false;
    }
    ButtonSelectionService.prototype.ngOnInit = function () {
    };
    ButtonSelectionService.prototype.changeStyle = function (newStyle) {
        if (!this.flag) {
            this.style.emit(false);
            this.flag = true;
        }
        else
            this.style.emit(newStyle);
    };
    ButtonSelectionService.prototype.changeProductView = function (newView) {
        this.productView.emit(newView);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ButtonSelectionService.prototype, "style", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ButtonSelectionService.prototype, "productView", void 0);
    ButtonSelectionService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ButtonSelectionService);
    return ButtonSelectionService;
}());
export { ButtonSelectionService };
//# sourceMappingURL=button-selection.service.js.map