var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ChildTrackNode } from './child-node';
import { ChildNodeDirective } from './childnodes.directive';
import { TrackerNodeComponent } from '../tracker-node/tracker-node.component';
import { ItemDetailsService } from '../../services/itemdetails.service';
var jsonData = require('src/assets/json/productData.json');
import * as _ from 'lodash';
import { SubSink } from "subsink";
import { MultipleSupplierComponent } from '../multiple-supplier/multiple-supplier.component';
//**This is the componenet which will be the container for recursive loading component */
var TrackerTreeComponent = /** @class */ (function () {
    function TrackerTreeComponent(componentFactoryResolver, itemDetailsService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.itemDetailsService = itemDetailsService;
        this.componentrefs = [];
        this.multipleSupplierComponentRefs = [];
        this.subs = new SubSink();
        this.mockdata = jsonData;
    }
    TrackerTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productDetails = __assign({}, this.node.data.inventories[0].inventory);
        this.inventories = this.node.data.inventories[0];
        this.buDetails = __assign({}, this.node.data.companyData.businessUnit);
        this.subs.add(this.itemDetailsService.change.subscribe(function (item) {
            return _this.loadComponent(item);
        }));
        this.subs.add(this.itemDetailsService.collapseChange.subscribe(function (item) {
            return _this.destroyComponent(item);
        }));
        this.subs.add(this.itemDetailsService.loadMultipleSuppliers.subscribe(function (nodes) {
            return _this.loadMultipleSupplierComponent(nodes);
        }));
        this.subs.add(this.itemDetailsService.collapseMultipleSuppliers.subscribe(function (node) {
            return _this.destroyMultipleSupplierComponent(node);
        }));
        this.fromInsideComponent = false;
        this.node.data.children ? this.node.data.children.map(function (child) { return child.orders[0].parentNode = _this.node.data; }) : this.node.data.children;
        if (_.get(this.node.data, ['children', '0', 'orders', '0'])) {
            this.loadComponent(this.node.data.children[0].orders[0]);
        }
        else if (_.get(this.node.data, ['inventories', '0', 'stockMasters', '0', 'conversions'])) {
            //Product scanned at manufacturer facility has conversions. No need to load child tracker node.
            this.node.data.inventories[0].stockMasters[0].conversions ? this.node.data.inventories[0].stockMasters[0].conversions.map(function (conversion) { return conversion.parentNode = _this.node.data; }) : this.node.data.inventories[0].stockMasters[0].conversions;
            // this.loadComponent(this.node.data.inventories[0].stockMasters[0].conversions[0]);
        }
    };
    TrackerTreeComponent.prototype.loadComponent = function (node) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(TrackerNodeComponent);
        var viewContainerRef = this.childNodes.viewContainerRef;
        viewContainerRef.clear();
        var componentref = viewContainerRef.createComponent(componentFactory);
        componentref.instance.trackerNode = node;
        componentref.instance.fromInsideComponent = true;
        this.componentrefs.push(componentref);
    };
    TrackerTreeComponent.prototype.loadMultipleSupplierComponent = function (nodes) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(MultipleSupplierComponent);
        var viewContainerRef = this.childNodes.viewContainerRef;
        viewContainerRef.clear();
        var multipleSupplierComponentRef = viewContainerRef.createComponent(componentFactory);
        multipleSupplierComponentRef.instance.orders = nodes;
        this.multipleSupplierComponentRefs.push(multipleSupplierComponentRef);
    };
    TrackerTreeComponent.prototype.destroyMultipleSupplierComponent = function (node) {
        if (this.multipleSupplierComponentRefs) {
            this.multipleSupplierComponentRefs.map(function (ref) {
                ref.instance.orders.map(function (child) {
                    if (child.companyData.company.name === node.companyData.company.name) {
                        ref.destroy();
                        return true;
                    }
                });
            });
        }
    };
    TrackerTreeComponent.prototype.destroyComponent = function (nodes) {
        var _this = this;
        if (this.componentrefs) {
            this.componentrefs.map(function (ref) {
                nodes.map(function (node) {
                    if ((ref.instance.trackerNode.inventories[0].inventory.productName === node.inventories[0].inventory.productName ||
                        ref.instance.trackerNode.companyData.company.name === node.companyData.company.name) &&
                        ref.instance.trackerNode.orderData.orderNumber === _.get(node, ['inventories', '0', 'stockMasters', '0', 'orders', '0', 'orderData', 'orderNumber'])) {
                        ref.destroy();
                    }
                    if (_.get(node, ['inventories', '0', 'stockMasters', '0', 'conversions'])) {
                        _this.destroyComponent(node.inventories[0].stockMasters[0].conversions);
                    }
                });
            });
        }
    };
    TrackerTreeComponent.prototype.isShippedFromOneOrMoreSupplier = function (node) {
        return _.get(node, ['children']) ? node.children.length >= 1 : false;
    };
    TrackerTreeComponent.prototype.ngAfterContentChecked = function () {
    };
    TrackerTreeComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
        // this.itemDetailsService.change.unsubscribe();
        // this.itemDetailsService.collapseChange.unsubscribe();
        // this.itemDetailsService.collapseMultipleSuppliers.unsubscribe();
        // this.itemDetailsService.loadMultipleSuppliers.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", ChildTrackNode)
    ], TrackerTreeComponent.prototype, "node", void 0);
    __decorate([
        ViewChild(ChildNodeDirective),
        __metadata("design:type", ChildNodeDirective)
    ], TrackerTreeComponent.prototype, "childNodes", void 0);
    TrackerTreeComponent = __decorate([
        Component({
            selector: 'app-tracker-tree',
            templateUrl: './tracker-tree.component.html',
            styleUrls: ['./tracker-tree.component.scss']
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver, ItemDetailsService])
    ], TrackerTreeComponent);
    return TrackerTreeComponent;
}());
export { TrackerTreeComponent };
//# sourceMappingURL=tracker-tree.component.js.map