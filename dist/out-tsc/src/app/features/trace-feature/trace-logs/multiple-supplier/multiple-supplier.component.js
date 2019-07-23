var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { ItemDetailsService } from '../../services/itemdetails.service';
var MultipleSupplierComponent = /** @class */ (function () {
    function MultipleSupplierComponent(trackerTreeService) {
        this.trackerTreeService = trackerTreeService;
    }
    MultipleSupplierComponent.prototype.ngOnInit = function () {
        console.log("entered this component");
    };
    MultipleSupplierComponent.prototype.loadCorrespondingOrderDetails = function (order) {
        this.trackerTreeService.collapseMultipleSuppliersInUITreeNode(order);
        this.trackerTreeService.expandDetails(order);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MultipleSupplierComponent.prototype, "orders", void 0);
    MultipleSupplierComponent = __decorate([
        Component({
            selector: 'app-multiple-supplier',
            templateUrl: './multiple-supplier.component.html',
            styleUrls: ['./multiple-supplier.component.scss']
        }),
        __metadata("design:paramtypes", [ItemDetailsService])
    ], MultipleSupplierComponent);
    return MultipleSupplierComponent;
}());
export { MultipleSupplierComponent };
//# sourceMappingURL=multiple-supplier.component.js.map