var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
var DocumentCommunicationService = /** @class */ (function () {
    function DocumentCommunicationService() {
        this.subject = BehaviorSubject.create();
        this.observable = this.subject.pipe(filter(function (v) { return v !== ""; }));
        this.trackerNodeSource = new BehaviorSubject(this.getDefaultTrackerNode());
        this.businessUnitSource = new BehaviorSubject(this.getDefaultBUNode());
    }
    DocumentCommunicationService.prototype.sendTrackerNodeMessage = function (node) {
        this.trackerNodeSource.next(node);
    };
    DocumentCommunicationService.prototype.sendbusinessUnitMessage = function (businessUnit) {
        this.businessUnitSource.next(businessUnit);
    };
    DocumentCommunicationService.prototype.getDefaultTrackerNode = function () {
        return {
            "inventories": [],
            "companyData": {
                "company": { "gallery": { "images": [], "videos": [] }, "evidences": [] },
                "businessUnit": { "gallery": { "images": [], "videos": [] } }
            },
            "orders": [],
            "children": [],
            "orderData": { "orderNumber": "", "orderCreatedDate": "", "noOfUnits": 1, "_id": "" },
            "isParent": true
        };
    };
    DocumentCommunicationService.prototype.getDefaultBUNode = function () {
        return { "name": "", "code": "", "type": "", "_id": "", "evidences": [], "gallery": { "images": [], "videos": [] }, "certificates": [] };
    };
    DocumentCommunicationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DocumentCommunicationService);
    return DocumentCommunicationService;
}());
export { DocumentCommunicationService };
//# sourceMappingURL=documentcommunication.service.js.map