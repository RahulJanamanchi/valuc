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
import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { GroupButtonService } from '../group-button/groupbutton.service';
var ConversionDetailsComponent = /** @class */ (function () {
    function ConversionDetailsComponent(router, activatedRoute, itemDetailsService, itemService, documentCommSevrvice, groupButtonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.itemDetailsService = itemDetailsService;
        this.itemService = itemService;
        this.documentCommSevrvice = documentCommSevrvice;
        this.groupButtonService = groupButtonService;
        this.ingredients = [];
        this.show = false;
    }
    ConversionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupbuttonsub = this.groupButtonService.clickData.subscribe(function (node) { var trackernode = node; _this.loadTrackingDetails(trackernode); });
        this.inventories = this.trackerNode.inventories[0];
        this.productDetails = this.inventories.inventory;
        this.ingredients = this.inventories.stockMasters[0].conversions;
    };
    ConversionDetailsComponent.prototype.destroyTrace = function (trackerNode) {
        if (this.clicked && trackerNode && trackerNode.length > 0) {
            this.itemDetailsService.collapseDetails(trackerNode);
        }
        this.clicked = !this.clicked;
    };
    ConversionDetailsComponent.prototype.toggleClick = function () {
        this.clicked = !this.clicked;
    };
    ConversionDetailsComponent.prototype.loadTrackingDetails = function (trackerNode) {
        if (!_.isEmpty(trackerNode.children)) {
            this.itemDetailsService.expandDetails(trackerNode.children[0].orders[0]);
            // this.traceClicked = true;
        }
    };
    ConversionDetailsComponent.prototype.isConversionPresent = function (node) {
        return _.get(node, ['inventories', '0', 'stockMasters', '0', 'conversions']) ? node.inventories[0].stockMasters[0].conversions.length > 0 : false;
    };
    ConversionDetailsComponent.prototype.getImageUrl = function (path) {
        return this.itemService.getImageSrc(path);
    };
    ConversionDetailsComponent.prototype.isTracingPresent = function (node) {
        return node.children ? node.children.length > 0 : false;
    };
    ConversionDetailsComponent.prototype.isDocumentsPresent = function (node) {
        return _.get(node, ['inventories', '0', 'inventory', 'certificates']) ? true : false ||
            _.get(node, ['inventories', '0', 'inventory', 'gallery', 'images']) ? true : false ||
            _.get(node, ['inventories', '0', 'inventory', 'gallery', 'videos']) ? true : false;
    };
    ConversionDetailsComponent.prototype.loadDocuments = function (node) {
        this.documentCommSevrvice.sendTrackerNodeMessage(node);
        this.router.navigate(['tracedocuments'], { relativeTo: this.activatedRoute });
    };
    ConversionDetailsComponent.prototype.ngOnDestroy = function () {
        this.groupbuttonsub.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ConversionDetailsComponent.prototype, "trackerNode", void 0);
    ConversionDetailsComponent = __decorate([
        Component({
            selector: 'app-conversion-details',
            templateUrl: './conversion-details.component.html',
            styleUrls: ['./conversion-details.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ItemDetailsService, ItemService, DocumentCommunicationService, GroupButtonService])
    ], ConversionDetailsComponent);
    return ConversionDetailsComponent;
}());
export { ConversionDetailsComponent };
//# sourceMappingURL=conversion-details.component.js.map