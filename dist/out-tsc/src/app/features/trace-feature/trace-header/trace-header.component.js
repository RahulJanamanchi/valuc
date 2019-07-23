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
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemService } from 'src/app/services/item.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
var TraceHeaderComponent = /** @class */ (function () {
    function TraceHeaderComponent(store$, router, itemService, sanitizer) {
        this.store$ = store$;
        this.router = router;
        this.itemService = itemService;
        this.sanitizer = sanitizer;
        this.productDetails = {};
    }
    TraceHeaderComponent.prototype.ngOnInit = function () {
        this.product = this.inventories.inventory;
        this.inventories.stockMasters[0].stockData.stockMaster.batchNumber;
        this.calculateDates();
    };
    TraceHeaderComponent.prototype.calculateDates = function () {
        // Time remaining
        this.mfgDate = moment(this.inventories.stockMasters[0].stockMaster.manufacturingDate).format("DD/MM/YY");
        this.expDate = moment(this.inventories.stockMasters[0].stockMaster.expiryDate).format("DD/MM/YY");
        // this.expDate = moment(this.expDate).format("DD/MM/YY");
        // this.mfgDate = moment(this.mfgDate).format("DD/MM/YY");
        this.timeRemaining = moment.duration(moment(this.expDate).add(1, 'days').diff(moment())).asDays();
        this.totalTime = moment.duration(moment(this.expDate).diff(moment(this.mfgDate))).asDays();
        this.expdiffcurrent = moment.duration(moment(this.expDate).diff(moment())).asDays();
        if (this.timeRemaining > 0) {
            this.humanizedRemaining = moment.duration(moment(this.expDate).diff(moment())).humanize();
            this.percentTimeRemaining = this.totalTime > 0 ? (this.expdiffcurrent * 100 / this.totalTime) : (this.timeRemaining * 100 / 1);
        }
        else {
            this.humanizedRemaining = "Expired";
            this.percentTimeRemaining = 0;
        }
    };
    ;
    TraceHeaderComponent.prototype.toProductPage = function () {
        this.router.navigateByUrl('/product');
    };
    TraceHeaderComponent.prototype.toStoresPage = function () {
        this.router.navigateByUrl('/stores');
    };
    TraceHeaderComponent.prototype.getImageUrl = function (path) {
        // return this.itemService.getImageSrc(path);
        return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(200,20,0,0), rgba(128,128,128,1)), ' +
            ("url(\"" + environment.apis.images + "/" + path + "\")"));
    };
    TraceHeaderComponent.prototype.getStyle = function () {
        return { 'width.px': 30, 'height.px': 30, 'background-color': 'white', 'border-radius': '50px' };
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TraceHeaderComponent.prototype, "inventories", void 0);
    TraceHeaderComponent = __decorate([
        Component({
            selector: 'app-trace-header',
            templateUrl: './trace-header.component.html',
            styleUrls: ['./trace-header.component.scss']
        }),
        __metadata("design:paramtypes", [Store, Router, ItemService, DomSanitizer])
    ], TraceHeaderComponent);
    return TraceHeaderComponent;
}());
export { TraceHeaderComponent };
//# sourceMappingURL=trace-header.component.js.map