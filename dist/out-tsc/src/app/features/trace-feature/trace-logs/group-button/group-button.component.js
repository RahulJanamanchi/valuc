var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output } from '@angular/core';
import { ItemDetailsService } from '../../services/itemdetails.service';
import { GroupButtonService } from './groupbutton.service';
import { EventEmitter } from 'events';
var GroupButtonComponent = /** @class */ (function () {
    function GroupButtonComponent(itemDetailsService, groupButtonService) {
        this.itemDetailsService = itemDetailsService;
        this.groupButtonService = groupButtonService;
        this.click = new EventEmitter();
        this.display = "";
        this.enableStyle = false;
    }
    GroupButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupButtonService.sub.subscribe(function (newVal) {
            if (_this.enableStyle)
                _this.enableStyle = newVal;
        });
        if (!this.show) {
            this.display = 'none';
        }
    };
    GroupButtonComponent.prototype.loadDetails = function () {
        this.groupButtonService.disableAllButtons(false);
        this.groupButtonService.sendData(this.node);
        this.enableStyle = true;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GroupButtonComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GroupButtonComponent.prototype, "node", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GroupButtonComponent.prototype, "show", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], GroupButtonComponent.prototype, "click", void 0);
    GroupButtonComponent = __decorate([
        Component({
            selector: 'app-group-button',
            templateUrl: './group-button.component.html',
            styleUrls: ['./group-button.component.scss']
        }),
        __metadata("design:paramtypes", [ItemDetailsService, GroupButtonService])
    ], GroupButtonComponent);
    return GroupButtonComponent;
}());
export { GroupButtonComponent };
//# sourceMappingURL=group-button.component.js.map