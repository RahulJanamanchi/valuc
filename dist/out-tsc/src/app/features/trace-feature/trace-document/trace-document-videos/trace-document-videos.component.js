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
var TraceDocumentVideosComponent = /** @class */ (function () {
    function TraceDocumentVideosComponent() {
    }
    TraceDocumentVideosComponent.prototype.ngOnInit = function () {
        console.log(this.videos.length);
    };
    // imageArray:string[]=["assets/icons/node_details.png", "assets/icons/node_details_2.png", "assets/icons/node_details_3.png"];
    TraceDocumentVideosComponent.prototype.videosPresent = function () {
        return this.videos ? this.videos.length > 0 : false;
    };
    TraceDocumentVideosComponent.prototype.getYouTubeThumbnailURL = function (url, size) {
        if (url === null) {
            return '';
        }
        size = (size === null) ? 'big' : size;
        var results = url.match('[\\?&]v=([^&#]*)');
        var video = (results === null) ? url : results[1];
        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + video + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + video + '/0.jpg';
    };
    ;
    TraceDocumentVideosComponent.prototype.openVideo = function (url) {
        window.open(url);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TraceDocumentVideosComponent.prototype, "videos", void 0);
    TraceDocumentVideosComponent = __decorate([
        Component({
            selector: 'app-trace-document-videos',
            templateUrl: './trace-document-videos.component.html',
            styleUrls: ['./trace-document-videos.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], TraceDocumentVideosComponent);
    return TraceDocumentVideosComponent;
}());
export { TraceDocumentVideosComponent };
//# sourceMappingURL=trace-document-videos.component.js.map