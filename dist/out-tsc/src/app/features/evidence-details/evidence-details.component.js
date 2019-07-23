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
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { EvidenceDetailsService } from './services/evidence-details.service';
import { ProductHomeComponent } from '../../features/product-feature/product-home/product-home.component';
var EvidenceDetailsComponent = /** @class */ (function () {
    function EvidenceDetailsComponent(evidenceDetailsService, store$, router, productHome) {
        this.evidenceDetailsService = evidenceDetailsService;
        this.store$ = store$;
        this.router = router;
        this.productHome = productHome;
        this.pilltype = 'Node';
        this.data = {};
        this.nodeLevel = [];
        this.nodeLevelFlag = true;
        this.nodeDataIsSet = false;
        this.dataIsSet = false;
        //this.evidenceType = "Enviromental Impact";
        this.percentTimeRemaining = 40;
        this.percentTimeRemainingString = "40%";
        this.color = "greenyellow";
    }
    EvidenceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evidenceDetailsService.nodeDetails.subscribe(function (nodeDetails) {
            _this.nodeEvidenceDetails = nodeDetails;
            _this.setNodeData(nodeDetails);
        });
        var dataobject = { "evidence": [], "type": "" };
        dataobject = this.evidenceDetailsService.getEvidenceData();
        this.evidenceData = dataobject["evidence"];
        this.evidenceType = dataobject["type"];
    };
    //Map sending data When Node is clicked
    //Helps generate array of Node and Product Evidence arrays
    EvidenceDetailsComponent.prototype.getData = function (evt) {
        this.dataIsSet = true;
        for (var i = 0; i < this.evidenceData.length; i++) {
            if (this.evidenceType === this.evidenceData[i]['type']) {
                for (var j in this.evidenceData[i]['location']) {
                    if (this.evidenceData[i]['location'][j]['address'] === evt) {
                        this.productKeyValues = this.evidenceData[i]['location'][j]['productLevel'];
                        this.nodeDataIsSet = false;
                        this.nodeLevel = this.evidenceData[i]['location'][j]['nodeLevel'];
                        this.businessUnit = this.evidenceData[i]['location'][j]['businessUnit'];
                        break;
                    }
                }
                break;
            }
        }
        if (this.nodeLevel === []) {
            this.nodeLevelFlag = false;
        }
        if (this.productKeyValues != [] && this.productKeyValues != undefined) {
            this.evidenceDetailsService.newProducts(this.productKeyValues);
        }
    };
    EvidenceDetailsComponent.prototype.toProductPage = function () {
        this.router.navigateByUrl('/product');
    };
    EvidenceDetailsComponent.prototype.setNodeData = function (evidence) {
        this.nodeEvidenceDetails = evidence;
        this.nodeDataIsSet = true;
    };
    EvidenceDetailsComponent.prototype.ngOnDestroy = function () {
        this.evidenceDetailsService.nodeDetails.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EvidenceDetailsComponent.prototype, "evt", void 0);
    EvidenceDetailsComponent = __decorate([
        Component({
            selector: 'app-evidence-details',
            templateUrl: './evidence-details.component.html',
            styleUrls: ['./evidence-details.component.scss']
        }),
        __metadata("design:paramtypes", [EvidenceDetailsService,
            Store,
            Router,
            ProductHomeComponent])
    ], EvidenceDetailsComponent);
    return EvidenceDetailsComponent;
}());
export { EvidenceDetailsComponent };
//# sourceMappingURL=evidence-details.component.js.map