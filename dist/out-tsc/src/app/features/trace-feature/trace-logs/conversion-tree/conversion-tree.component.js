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
import { ConversionDetailsComponent } from '../conversion-details/conversion-details.component';
import { ConversionNodeDirective } from '../conversion-details/conversion-node.directive';
var ConversionTreeComponent = /** @class */ (function () {
    function ConversionTreeComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.componentrefs = [];
    }
    ConversionTreeComponent.prototype.ngOnInit = function () {
        this.inventories = this.trackerNode.inventories[0];
        this.productDetails = this.inventories.inventory;
    };
    ConversionTreeComponent.prototype.loadComponent = function (product) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConversionDetailsComponent);
        var viewContainerRef = this.conversionNodes.viewContainerRef;
        //viewContainerRef.clear();
        var componentref = viewContainerRef.createComponent(componentFactory);
        componentref.instance.inventories[0].inventory = product;
        this.componentrefs.push(componentref);
    };
    ConversionTreeComponent.prototype.destroyComponent = function (productDetails) {
        if (this.componentrefs) {
            this.componentrefs.map(function (ref) {
                productDetails.map(function (productDetails) {
                    if (ref.instance.inventories[0].inventory.productName === productDetails.productName) {
                        ref.destroy();
                    }
                });
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConversionTreeComponent.prototype, "trackerNode", void 0);
    __decorate([
        ViewChild(ConversionNodeDirective),
        __metadata("design:type", ConversionNodeDirective)
    ], ConversionTreeComponent.prototype, "conversionNodes", void 0);
    ConversionTreeComponent = __decorate([
        Component({
            selector: 'app-conversion-tree',
            templateUrl: './conversion-tree.component.html',
            styleUrls: ['./conversion-tree.component.scss']
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], ConversionTreeComponent);
    return ConversionTreeComponent;
}());
export { ConversionTreeComponent };
//http://localhost:4200/trace/%7B%22sequence%22:%22IGoSGd0gDtMfDL8c%22,%22batchNumber%22:%22BM2-130619%22,%22itemCode%22:%2200122-00001-00003%22%7D
//# sourceMappingURL=conversion-tree.component.js.map