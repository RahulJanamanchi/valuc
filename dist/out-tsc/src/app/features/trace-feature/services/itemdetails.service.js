var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Output, EventEmitter, Injectable } from '@angular/core';
var ItemDetailsService = /** @class */ (function () {
    function ItemDetailsService() {
        this.change = new EventEmitter();
        this.collapseChange = new EventEmitter();
        this.loadMultipleSuppliers = new EventEmitter();
        this.collapseMultipleSuppliers = new EventEmitter();
    }
    ItemDetailsService.prototype.expandDetails = function (node) {
        this.change.emit(node);
    };
    ItemDetailsService.prototype.collapseDetails = function (childeNodes) {
        this.collapseChange.emit(childeNodes);
    };
    ItemDetailsService.prototype.loadMultipleSuppliersInUITreeNode = function (nodes) {
        this.loadMultipleSuppliers.emit(nodes);
    };
    ItemDetailsService.prototype.collapseMultipleSuppliersInUITreeNode = function (node) {
        this.collapseMultipleSuppliers.emit(node);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ItemDetailsService.prototype, "change", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ItemDetailsService.prototype, "collapseChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ItemDetailsService.prototype, "loadMultipleSuppliers", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ItemDetailsService.prototype, "collapseMultipleSuppliers", void 0);
    ItemDetailsService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ItemDetailsService);
    return ItemDetailsService;
}());
export { ItemDetailsService };
//# sourceMappingURL=itemdetails.service.js.map