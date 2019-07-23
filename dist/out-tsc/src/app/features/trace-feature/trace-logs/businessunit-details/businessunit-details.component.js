var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Renderer2, Input, ElementRef } from '@angular/core';
import { ItemDetailsService } from '../../services/itemdetails.service';
import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { Router, ActivatedRoute } from '@angular/router';
var BusinessunitDetailsComponent = /** @class */ (function () {
    function BusinessunitDetailsComponent(router, activatedRoute, renderer, itemDetailsService, itemService, documentCommSevrvice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.renderer = renderer;
        this.itemDetailsService = itemDetailsService;
        this.itemService = itemService;
        this.documentCommSevrvice = documentCommSevrvice;
    }
    BusinessunitDetailsComponent.prototype.ngOnInit = function () {
        this.company = this.trackerNode.companyData.company;
        this.inventories = this.trackerNode.inventories[0];
        this.address = this.company.addresses[0] ? this.company.addresses[0].addressLine.concat(',', this.company.addresses[0].city, ',', this.company.addresses[0].state, ',', this.company.addresses[0].country) : "";
        if (this.trackerNode.companyData.businessUnit) {
            this.businessUnitDetails = this.trackerNode.companyData.businessUnit;
        }
        this.companyImageUrl = this.itemService.getImageSrc(this.businessUnitDetails.gallery.images[0] ? this.businessUnitDetails.gallery.images[0].imageURL : "");
        this.conversionDetails = _.get(this.trackerNode, ['inventories', '0', 'conversions']);
    };
    BusinessunitDetailsComponent.prototype.expandProductDetails = function () {
        this.renderer.setStyle(this.expandeditems.nativeElement, 'display', 'inline-grid');
        this.renderer.setStyle(this.collapseditems.nativeElement, 'display', 'none');
    };
    BusinessunitDetailsComponent.prototype.expandItemNode = function (item) {
        this.itemDetailsService.expandDetails(item);
    };
    BusinessunitDetailsComponent.prototype.isConversionPresent = function (inventories) {
        return _.get(inventories, ['stockMasters', '0', 'conversions']) ? inventories.stockMasters[0].conversions.length > 0 : false;
    };
    BusinessunitDetailsComponent.prototype.loadDocuments = function (businessUnit) {
        this.documentCommSevrvice.sendbusinessUnitMessage(businessUnit);
        this.router.navigate(['tracedocuments'], { relativeTo: this.activatedRoute });
    };
    BusinessunitDetailsComponent.prototype.isDocumentsPresent = function (businessUnit) {
        return _.get(businessUnit, ['certificates']) ? true : false ||
            _.get(businessUnit, ['gallery', 'images']) ? true : false ||
            _.get(businessUnit, ['gallery', 'videos']) ? true : false;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusinessunitDetailsComponent.prototype, "trackerNode", void 0);
    __decorate([
        ViewChild('expandeditems'),
        __metadata("design:type", ElementRef)
    ], BusinessunitDetailsComponent.prototype, "expandeditems", void 0);
    __decorate([
        ViewChild('collapseditems'),
        __metadata("design:type", ElementRef)
    ], BusinessunitDetailsComponent.prototype, "collapseditems", void 0);
    BusinessunitDetailsComponent = __decorate([
        Component({
            selector: 'app-businessunit-details',
            templateUrl: './businessunit-details.component.html',
            styleUrls: ['./businessunit-details.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, Renderer2, ItemDetailsService, ItemService, DocumentCommunicationService])
    ], BusinessunitDetailsComponent);
    return BusinessunitDetailsComponent;
}());
export { BusinessunitDetailsComponent };
//# sourceMappingURL=businessunit-details.component.js.map