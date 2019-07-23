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
var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.width = 24;
        this.height = 24;
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent.prototype.getSrc = function () {
        return "assets/icons/" + this.src + ".svg";
    };
    IconComponent.prototype.getStyle = function () {
        return {
            color: this.color || 'currentColor',
            fill: 'currentColor',
            width: this.width + "px",
            height: this.height + "px"
        };
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "variant", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "width", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconComponent.prototype, "height", void 0);
    IconComponent = __decorate([
        Component({
            selector: 'app-icon',
            templateUrl: './icon.component.html',
            styleUrls: ['./icon.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=icon.component.js.map