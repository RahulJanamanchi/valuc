var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPillComponent } from './button-pill.component';
var ButtonPillModule = /** @class */ (function () {
    function ButtonPillModule() {
    }
    ButtonPillModule = __decorate([
        NgModule({
            declarations: [ButtonPillComponent],
            imports: [
                CommonModule
            ],
            exports: [ButtonPillComponent]
        })
    ], ButtonPillModule);
    return ButtonPillModule;
}());
export { ButtonPillModule };
//# sourceMappingURL=button-pill.module.js.map