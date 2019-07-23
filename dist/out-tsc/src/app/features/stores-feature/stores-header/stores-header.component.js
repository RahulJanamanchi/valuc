var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
var StoresHeaderComponent = /** @class */ (function () {
    function StoresHeaderComponent() {
        this.queryChange = new EventEmitter();
    }
    StoresHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], StoresHeaderComponent.prototype, "query", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], StoresHeaderComponent.prototype, "queryChange", void 0);
    StoresHeaderComponent = __decorate([
        Component({
            selector: 'app-stores-header',
            templateUrl: './stores-header.component.html',
            styleUrls: ['./stores-header.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], StoresHeaderComponent);
    return StoresHeaderComponent;
}());
export { StoresHeaderComponent };
//# sourceMappingURL=stores-header.component.js.map