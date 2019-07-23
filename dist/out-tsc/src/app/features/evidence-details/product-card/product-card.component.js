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
import * as Chart from 'chart.js';
import { EvidenceDetailsService } from '../services/evidence-details.service';
import { ButtonSelectionService } from '../services/button-selection.service';
var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(evidenceDetailsService, buttonSelection) {
        this.evidenceDetailsService = evidenceDetailsService;
        this.buttonSelection = buttonSelection;
        this.productDetails = [];
        this.pilltype = 'Product';
        this.visible = true;
        this.flag = false;
        this.isZero = false;
        this.buttonText = "View";
        this.productLevelFlag = true;
        this.productEvidenceDetails = [];
    }
    ProductCardComponent.prototype.toggleExpanded = function () {
        if (this.flag) {
            this.isZero = false;
            this.buttonText = "View";
            if (this.visible) {
                this.buttonSelection.changeProductView(true);
                this.visible = true;
                this.flag = false;
            }
        }
        else {
            if (this.numberOfProducts - 1 == 1) {
                this.buttonText = "+" + String(this.numberOfProducts - 1) + " item";
            }
            else if (this.numberOfProducts - 1 == 0) {
                this.isZero = true;
            }
            else {
                this.buttonText = "+" + String(this.numberOfProducts - 1) + " items";
            }
            this.flag = true;
            this.buttonSelection.changeProductView(false);
        }
    };
    ProductCardComponent.prototype.ngAfterViewInit = function () {
        //this.product=this.product['0']['evidences']['evidenceList'];
        var _this = this;
        this.setProductData(this.product['0']);
        this.evidenceDetailsService.productDetails.subscribe(function (prodDetails) {
            _this.setProductData(prodDetails);
        });
    };
    ProductCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonSelection.productView.subscribe(function (selected) {
            if (_this.flag == true) {
                _this.visible = !selected;
            }
            else {
                _this.visible = selected;
            }
        });
    };
    ProductCardComponent.prototype.setProductData = function (evidence) {
        this.productEvidenceDetails = evidence;
        if (this.productEvidenceDetails.length === 0) {
            this.productLevelFlag = false;
        }
        try {
            for (var _i = 0, _a = evidence['graphs']; _i < _a.length; _i++) {
                var graph = _a[_i];
                this.makeGraph(graph['labels'], graph['data'], graph['title']);
            }
        }
        catch (e) {
        }
    };
    ProductCardComponent.prototype.makeGraph = function (labelInput, dataInput, title) {
        this.canvas = document.getElementById('myChart');
        do {
            this.ctx = this.canvas.getContext('2d');
        } while (this.ctx == undefined);
        var myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: labelInput,
                datasets: [{
                        label: title,
                        data: dataInput,
                        borderWidth: 2,
                        borderColor: "crimson",
                        backgroundColor: "crimson",
                        fill: 50
                    }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                },
                responsive: true
            }
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProductCardComponent.prototype, "brand", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "evidenceType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProductCardComponent.prototype, "numberOfProducts", void 0);
    ProductCardComponent = __decorate([
        Component({
            selector: 'app-product-card',
            templateUrl: './product-card.component.html',
            styleUrls: ['./product-card.component.scss']
        }),
        __metadata("design:paramtypes", [EvidenceDetailsService, ButtonSelectionService])
    ], ProductCardComponent);
    return ProductCardComponent;
}());
export { ProductCardComponent };
//# sourceMappingURL=product-card.component.js.map