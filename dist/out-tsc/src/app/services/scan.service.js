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
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var ScanService = /** @class */ (function () {
    function ScanService(http) {
        this.http = http;
    }
    ScanService.prototype.scan = function (batchNumber) {
        var requestDataObject = JSON.parse(batchNumber);
        var params = new HttpParams();
        params = requestDataObject.sequence ? params.append('sequence', requestDataObject.sequence) : params;
        params = requestDataObject.batchNumber ? params.append('batchNumber', requestDataObject.batchNumber) : params;
        params = requestDataObject.itemCode ? params.append('itemCode', requestDataObject.itemCode) : params;
        return this.http.get("" + environment.apis.track, { params: requestDataObject });
    };
    ScanService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ScanService);
    return ScanService;
}());
export { ScanService };
//# sourceMappingURL=scan.service.js.map