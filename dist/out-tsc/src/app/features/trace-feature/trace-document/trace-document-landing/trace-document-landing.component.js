var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
var TraceDocumentLandingComponent = /** @class */ (function () {
    function TraceDocumentLandingComponent(documentCommunicationService) {
        this.documentCommunicationService = documentCommunicationService;
    }
    TraceDocumentLandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackernodesub = this.documentCommunicationService.trackerNodeSource.subscribe(function (inputNode) {
            if (!_this.isDefaultTrackerNode(inputNode)) {
                _this.node = inputNode;
                //clearing subject cache
            }
            else {
                _this.node = null;
            }
        });
        this.businessunitsub = this.documentCommunicationService.businessUnitSource.subscribe(function (inputBU) {
            if (!_this.isDefaultBU(inputBU)) {
                _this.businessUnit = inputBU;
                //clearing subject cache.
            }
            else
                _this.businessUnit = null;
        });
    };
    TraceDocumentLandingComponent.prototype.getNode = function () {
        return this.node;
    };
    TraceDocumentLandingComponent.prototype.getBusinessUnit = function () {
        return this.businessUnit;
    };
    TraceDocumentLandingComponent.prototype.isDefaultBU = function (businessUnit) {
        if (businessUnit.certificates ? businessUnit.certificates.length === 0 : false &&
            businessUnit.gallery.images ? businessUnit.gallery.images.length === 0 : false &&
            businessUnit.gallery.videos ? businessUnit.gallery.videos.length === 0 : false) {
            return true;
        }
        return false;
    };
    TraceDocumentLandingComponent.prototype.isDefaultTrackerNode = function (inputNode) {
        if (inputNode.inventories ? inputNode.inventories.length === 0 : false) {
            return true;
        }
        return false;
    };
    TraceDocumentLandingComponent.prototype.ngAfterViewChecked = function () {
    };
    TraceDocumentLandingComponent.prototype.ngOnDestroy = function () {
        if (this.node && !this.isDefaultTrackerNode(this.node)) {
            this.documentCommunicationService.trackerNodeSource.next(this.documentCommunicationService.getDefaultTrackerNode());
        }
        if (this.businessUnit && !this.isDefaultBU(this.businessUnit)) {
            this.documentCommunicationService.businessUnitSource.next(this.documentCommunicationService.getDefaultBUNode());
        }
        this.businessunitsub.unsubscribe();
        this.trackernodesub.unsubscribe();
    };
    TraceDocumentLandingComponent = __decorate([
        Component({
            selector: 'app-trace-document-landing',
            templateUrl: './trace-document-landing.component.html',
            styleUrls: ['./trace-document-landing.component.scss']
        }),
        __metadata("design:paramtypes", [DocumentCommunicationService])
    ], TraceDocumentLandingComponent);
    return TraceDocumentLandingComponent;
}());
export { TraceDocumentLandingComponent };
//# sourceMappingURL=trace-document-landing.component.js.map