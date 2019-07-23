var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ChildTrackNode } from '../trace-logs/tracker-tree/child-node';
import { TrackerNodeComponent } from '../trace-logs/tracker-node/tracker-node.component';
var TreeHelperService = /** @class */ (function () {
    function TreeHelperService() {
    }
    TreeHelperService.prototype.addComponent = function (node) {
        return new ChildTrackNode(TrackerNodeComponent, node);
    };
    TreeHelperService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TreeHelperService);
    return TreeHelperService;
}());
export { TreeHelperService };
//# sourceMappingURL=tree-helper.service.js.map