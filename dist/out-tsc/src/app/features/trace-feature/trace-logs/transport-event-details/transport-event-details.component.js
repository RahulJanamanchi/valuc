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
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemDetailsService } from '../../services/itemdetails.service';
import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';
var TransportEventDetailsComponent = /** @class */ (function () {
    function TransportEventDetailsComponent(iconRegistry, sanitizer, itemDetailsService, itemService) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.itemDetailsService = itemDetailsService;
        this.itemService = itemService;
    }
    TransportEventDetailsComponent.prototype.ngOnInit = function () {
        this.noOfFacilities = this.getNoOfSupplier();
        this.clicked = false;
        this.loadedNode = this.trackerNode;
        this.companyImageUrl = this.itemService.getImageSrc(_.get(this.loadedNode, ['companyData', 'businessUnit', 'gallery', 'images', '0', 'imageURL']));
        if (_.get(this.loadedNode, ['inventories', '0', 'stockMasters', '0', 'orders', '0'])) {
            this.orderCreateDate = this.loadedNode.inventories[0].stockMasters[0].orders[0].orderData.orderCreatedDate;
        }
        else {
            this.orderCreateDate = this.loadedNode.inventories[0].orderCreatedDate;
        }
        this.siblingOrders = this.getChildOrders();
        this.iconRegistry.addSvgIcon('shipped', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shipped.svg'));
    };
    TransportEventDetailsComponent.prototype.getChildOrders = function () {
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
    TransportEventDetailsComponent.prototype.getNoOfSupplier = function () {
        return _.get(this.trackerNode, ['inventories', '0', 'stockMasters', '0', 'orders', 'length']);
    };
    TransportEventDetailsComponent.prototype.getSrc = function () {
        return "assets/icons/shipped.svg";
    };
    TransportEventDetailsComponent.prototype.loadAllFacilities = function () {
        if (!this.clicked) {
            var nodes = [this.loadedNode];
            this.itemDetailsService.collapseDetails(nodes);
            this.itemDetailsService.loadMultipleSuppliersInUITreeNode(this.siblingOrders);
        }
        this.clicked = !this.clicked;
    };
    TransportEventDetailsComponent.prototype.getAllIncludedProducts = function (stockMasters, productDetailsList) {
        var _this = this;
        if (stockMasters.conversions) {
            stockMasters.conversions.map(function (conversion) {
                productDetailsList.push(conversion.inventories[0].inventory);
                _this.getAllIncludedProducts(conversion.inventories[0].stockMasters[0], productDetailsList);
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TransportEventDetailsComponent.prototype, "trackerNode", void 0);
    TransportEventDetailsComponent = __decorate([
        Component({
            selector: 'app-transport-event-details',
            templateUrl: './transport-event-details.component.html',
            styleUrls: ['./transport-event-details.component.scss']
        }),
        __metadata("design:paramtypes", [MatIconRegistry, DomSanitizer, ItemDetailsService, ItemService])
    ], TransportEventDetailsComponent);
    return TransportEventDetailsComponent;
}());
export { TransportEventDetailsComponent };
//# sourceMappingURL=transport-event-details.component.js.map