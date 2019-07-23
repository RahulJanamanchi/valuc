var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Injectable } from '@angular/core';
import { GeoserviceService } from './geoservice.service';
import * as localforage from "localforage";
var GoogleResponseService = /** @class */ (function () {
    function GoogleResponseService(geoService) {
        this.geoService = geoService;
        this.data = {};
    }
    GoogleResponseService.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mapDatastorage, _loop_1, this_1, _a, _b, _i, i, _loop_2, this_2, _c, _d, _e, j;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, localforage.getItem("MapData")];
                    case 1:
                        mapDatastorage = _f.sent();
                        this.mockdata = JSON.parse(mapDatastorage);
                        _loop_1 = function (i) {
                            var markerLocation;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        markerLocation = this_1.mockdata['markers'][i]['location'];
                                        return [4 /*yield*/, localforage.getItem(markerLocation)];
                                    case 1:
                                        if ((_a.sent()) === null) {
                                            console.log("No response in local storage ");
                                            this_1.geoService.getLocation(markerLocation).subscribe(function (response) {
                                                localforage.setItem(markerLocation, response);
                                            });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a = [];
                        for (_b in this.mockdata['markers'])
                            _a.push(_b);
                        _i = 0;
                        _f.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        i = _a[_i];
                        return [5 /*yield**/, _loop_1(i)];
                    case 3:
                        _f.sent();
                        _f.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        _loop_2 = function (j) {
                            var pathSource, pathDestination, pathData, directionService;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pathSource = this_2.mockdata['paths'][j]['source'];
                                        pathDestination = this_2.mockdata['paths'][j]['destination'];
                                        pathData = pathDestination + "+" + pathSource;
                                        return [4 /*yield*/, localforage.getItem(pathData)];
                                    case 1:
                                        if ((_a.sent()) === null) {
                                            console.log("no path response");
                                            directionService = new google.maps.DirectionsService;
                                            directionService.route({
                                                origin: pathSource,
                                                destination: pathDestination,
                                                travelMode: google.maps.TravelMode.DRIVING
                                            }, function (response) {
                                                if (google.maps.DirectionsStatus) {
                                                    localforage.setItem(pathData, JSON.stringify(response));
                                                }
                                            });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _c = [];
                        for (_d in this.mockdata['paths'])
                            _c.push(_d);
                        _e = 0;
                        _f.label = 6;
                    case 6:
                        if (!(_e < _c.length)) return [3 /*break*/, 9];
                        j = _c[_e];
                        return [5 /*yield**/, _loop_2(j)];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        _e++;
                        return [3 /*break*/, 6];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    GoogleResponseService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [GeoserviceService])
    ], GoogleResponseService);
    return GoogleResponseService;
}());
export { GoogleResponseService };
//# sourceMappingURL=google-response.service.js.map