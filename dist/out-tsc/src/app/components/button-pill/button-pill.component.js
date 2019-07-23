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
import { EvidenceDetailsService } from '../../features/evidence-details/services/evidence-details.service';
import { ButtonSelectionService } from '../../features/evidence-details/services/button-selection.service';
var ButtonPillComponent = /** @class */ (function () {
    function ButtonPillComponent(evidenceDetailsService, buttonSelection) {
        this.evidenceDetailsService = evidenceDetailsService;
        this.buttonSelection = buttonSelection;
        this.isSelected = false;
    }
    ButtonPillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonSelection.style.subscribe(function (selected) {
            _this.isSelected = selected;
        });
    };
    ButtonPillComponent.prototype.sendEvidence = function () {
        this.buttonSelection.changeStyle(false);
        this.isSelected = true;
        if (this.pillType == 'Node') {
            this.evidenceDetailsService.newNodeDetails(this.evidence);
        }
        if (this.pillType == 'Product') {
            this.evidenceDetailsService.newProductDetails(this.evidence);
        }
    };
    ButtonPillComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ButtonPillComponent.prototype, "evidence", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonPillComponent.prototype, "pillType", void 0);
    ButtonPillComponent = __decorate([
        Component({
            selector: 'app-button-pill',
            templateUrl: './button-pill.component.html',
            styleUrls: ['./button-pill.component.scss']
        }),
        __metadata("design:paramtypes", [EvidenceDetailsService, ButtonSelectionService])
    ], ButtonPillComponent);
    return ButtonPillComponent;
}());
export { ButtonPillComponent };
//# sourceMappingURL=button-pill.component.js.map