var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
var EvidenceDetailsService = /** @class */ (function () {
    function EvidenceDetailsService() {
        this.nodeDetails = new EventEmitter();
        this.products = new ReplaySubject(1);
        this.productDetails = new ReplaySubject(1);
        this.evidence = [];
    }
    EvidenceDetailsService.prototype.ngOnInit = function () { };
    EvidenceDetailsService.prototype.newNodeDetails = function (details) {
        this.nodeDetails.emit(details);
    };
    EvidenceDetailsService.prototype.newProducts = function (details) {
        this.products.next(details);
    };
    EvidenceDetailsService.prototype.newProductDetails = function (details) {
        this.productDetails.next(details);
    };
    EvidenceDetailsService.prototype.evidenceDataMethod = function (evidencedata) {
        this.evidence = evidencedata;
    };
    EvidenceDetailsService.prototype.evidenceTypeMethod = function (evidencetype) {
        this.evidenceType = evidencetype;
    };
    EvidenceDetailsService.prototype.getEvidenceData = function () {
        var dataobject = { "evidence": [], "type": "" };
        dataobject["type"] = this.evidenceType;
        dataobject["evidence"] = this.evidence;
        return dataobject;
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], EvidenceDetailsService.prototype, "nodeDetails", void 0);
    __decorate([
        Output(),
        __metadata("design:type", ReplaySubject)
    ], EvidenceDetailsService.prototype, "products", void 0);
    __decorate([
        Output(),
        __metadata("design:type", ReplaySubject)
    ], EvidenceDetailsService.prototype, "productDetails", void 0);
    EvidenceDetailsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EvidenceDetailsService);
    return EvidenceDetailsService;
}());
export { EvidenceDetailsService };
//# sourceMappingURL=evidence-details.service.js.map