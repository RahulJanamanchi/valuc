var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TraceDocumentLandingComponent } from './trace-document-landing/trace-document-landing.component';
var routes = [
    {
        path: '',
        component: TraceDocumentLandingComponent
    }
];
var TraceDocumentRoutingModule = /** @class */ (function () {
    function TraceDocumentRoutingModule() {
    }
    TraceDocumentRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TraceDocumentRoutingModule);
    return TraceDocumentRoutingModule;
}());
export { TraceDocumentRoutingModule };
//# sourceMappingURL=trace-document-routing.module.js.map