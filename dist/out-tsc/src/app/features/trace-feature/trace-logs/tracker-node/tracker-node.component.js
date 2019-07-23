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
import * as _ from 'lodash';
/**
 * This component will be loaded recursively n the parent componenet for children.
 */
var TrackerNodeComponent = /** @class */ (function () {
    function TrackerNodeComponent() {
    }
    TrackerNodeComponent.prototype.ngOnInit = function () {
        console.log("fromInsideComponent" + this.fromInsideComponent);
        this.fromParent = this.trackerNode.parentNode ? true : false;
        this.noOfSuppliers = this.getNoOfSupplier();
        if (this.fromParent) {
            this.supplierOrders = _.get(this.trackerNode, ['children']) ? this.getChildOrdersForRootNode() : null;
        }
        else {
            this.supplierOrders = _.get(this.trackerNode, ['children', '0', 'orders', '0']) ? this.getChildOrders(this.trackerNode.children[0].orders[0]) : null;
            // this.trackerNode=_.get(this.trackerNode,['children','0','orders','0']);
        }
    };
    TrackerNodeComponent.prototype.isShippedFromOneOrMoreSupplier = function (node) {
        return this.noOfSuppliers >= 1;
    };
    TrackerNodeComponent.prototype.getChildOrdersForRootNode = function () {
        var _this = this;
        var supplierOrders = [];
        this.trackerNode.children.map(function (child) {
            if (_this.trackerNode.inventories) {
                _this.trackerNode.inventories[0].stockMasters[0].orders
                    .map(function (stockerMasterOrder) {
                    if (stockerMasterOrder.orderData.orderNumber === child.orders[0].orderData.orderNumber)
                        supplierOrders.push(child.orders[0]);
                });
            }
        });
        return supplierOrders;
    };
    TrackerNodeComponent.prototype.getChildOrders = function (trackerNode) {
        var supplierOrders = [];
        trackerNode.children.map(function (child) {
            if (trackerNode.inventories) {
                trackerNode.inventories[0].stockMasters[0].orders
                    .map(function (stockerMasterOrder) {
                    if (stockerMasterOrder.orderData.orderNumber === child.orders[0].orderData.orderNumber)
                        supplierOrders.push(child.orders[0]);
                });
            }
        });
        return supplierOrders;
    };
    TrackerNodeComponent.prototype.getNoOfSupplier = function () {
        return _.get(this.trackerNode, ['inventories', '0', 'stockMasters', '0', 'orders', 'length']);
    };
    TrackerNodeComponent.prototype.getCorrespondingChild = function (node, stockMasterOrder) {
        this.trackerNode.children.map(function (child) {
            if (child.orders) {
                return;
            }
        });
        // return node.children.some(child=>child.orders[0].orderData.orderNumber===stockMasterOrder.orderData.orderNumber)
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TrackerNodeComponent.prototype, "trackerNode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TrackerNodeComponent.prototype, "fromInsideComponent", void 0);
    TrackerNodeComponent = __decorate([
        Component({
            selector: 'app-tracker-node',
            templateUrl: './tracker-node.component.html',
            styleUrls: ['./tracker-node.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], TrackerNodeComponent);
    return TrackerNodeComponent;
}());
export { TrackerNodeComponent };
//# sourceMappingURL=tracker-node.component.js.map