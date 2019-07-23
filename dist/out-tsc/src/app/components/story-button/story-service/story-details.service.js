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
var StoryDetailsService = /** @class */ (function () {
    function StoryDetailsService() {
        this.toProduct = new EventEmitter();
        this.storyDetails = new ReplaySubject(1);
    }
    StoryDetailsService.prototype.storyDetailMethod = function (details) {
        this.storyDetails.next(details);
        this.toProduct.emit(details);
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], StoryDetailsService.prototype, "toProduct", void 0);
    __decorate([
        Output(),
        __metadata("design:type", ReplaySubject)
    ], StoryDetailsService.prototype, "storyDetails", void 0);
    StoryDetailsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StoryDetailsService);
    return StoryDetailsService;
}());
export { StoryDetailsService };
//# sourceMappingURL=story-details.service.js.map