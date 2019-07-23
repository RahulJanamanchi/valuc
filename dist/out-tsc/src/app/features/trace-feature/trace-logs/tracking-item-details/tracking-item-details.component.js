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
import { ItemService } from 'src/app/services/item.service';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { Router, ActivatedRoute } from '@angular/router';
var TrackingItemDetailsComponent = /** @class */ (function () {
    function TrackingItemDetailsComponent(router, activatedRoute, itemService, documentCommSevrvice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.itemService = itemService;
        this.documentCommSevrvice = documentCommSevrvice;
    }
    TrackingItemDetailsComponent.prototype.ngOnInit = function () {
        this.productDetails = this.inventories.inventory;
        this.batchNumber = this.inventories.stockMasters[0].stockData.stockMaster.batchNumber;
        this.image = this.itemService.getImageSrc(this.inventories.inventory.gallery.images[0].imageURL);
    };
    TrackingItemDetailsComponent.prototype.loadDocuments = function () {
        var tempNode = { "inventories": [] };
        tempNode.inventories[0] = this.inventories;
        this.documentCommSevrvice.sendTrackerNodeMessage(tempNode);
        this.router.navigate(['tracedocuments'], { relativeTo: this.activatedRoute });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TrackingItemDetailsComponent.prototype, "inventories", void 0);
    TrackingItemDetailsComponent = __decorate([
        Component({
            selector: 'app-tracking-item-details',
            templateUrl: './tracking-item-details.component.html',
            styleUrls: ['./tracking-item-details.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, ItemService, DocumentCommunicationService])
    ], TrackingItemDetailsComponent);
    return TrackingItemDetailsComponent;
}());
export { TrackingItemDetailsComponent };
//# sourceMappingURL=tracking-item-details.component.js.map