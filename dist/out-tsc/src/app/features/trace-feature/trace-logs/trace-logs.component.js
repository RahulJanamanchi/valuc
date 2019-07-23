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
import { environment } from 'src/environments/environment.prod';
import { TreeHelperService } from '../services/tree-helper.service';
import { ChildTrackNode } from './tracker-tree/child-node';
var TraceLogsComponent = /** @class */ (function () {
    function TraceLogsComponent(treeHelperService) {
        this.treeHelperService = treeHelperService;
    }
    TraceLogsComponent.prototype.ngOnInit = function () {
    };
    TraceLogsComponent.prototype.isSingleIcon = function (_a) {
        var type = _a.type;
        return ['transport', 'transform'].includes(type);
    };
    TraceLogsComponent.prototype.getIcon = function (_a) {
        var type = _a.type;
        return type === 'transform' ? 'covert' : 'events';
    };
    TraceLogsComponent.prototype.getImageSrc = function (path) {
        return environment.apis.images + "/" + path;
    };
    __decorate([
        Input(),
        __metadata("design:type", ChildTrackNode)
    ], TraceLogsComponent.prototype, "node", void 0);
    TraceLogsComponent = __decorate([
        Component({
            selector: 'app-trace-logs',
            templateUrl: './trace-logs.component.html',
            styleUrls: ['./trace-logs.component.scss']
        }),
        __metadata("design:paramtypes", [TreeHelperService])
    ], TraceLogsComponent);
    return TraceLogsComponent;
}());
export { TraceLogsComponent };
//# sourceMappingURL=trace-logs.component.js.map