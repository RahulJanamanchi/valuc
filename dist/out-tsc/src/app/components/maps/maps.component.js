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
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { GeoserviceService } from './geoservice.service';
import * as localforage from "localforage";
var MapsComponent = /** @class */ (function () {
    function MapsComponent(geoService) {
        this.geoService = geoService;
        this.mapdata = { "markers": [], "paths": [], "selectNode": "", "selectPath": { "pathSource": "", "pathDestination": "" } };
        this.sendData = new EventEmitter();
        this.circleFlag = false;
        this.polylines = [];
        this.setPolylinesAttribute = {
            strokeColour: '#0000FF',
            strokeOpacity: 0,
            strokeWeight: 12
        };
        this.flag = false;
        this.infoWindowPath = null;
    }
    MapsComponent.prototype.ngOnInit = function () {
        this.directionResponses = [];
    };
    MapsComponent.prototype.ngAfterContentInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mapProp, mapDatastorage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mapProp = {
                            center: new google.maps.LatLng(20.593683, 78.962883),
                            zoom: 5,
                            minZoom: 5,
                            maxZoom: 7,
                            disableDefaultUI: true,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
                        return [4 /*yield*/, localforage.getItem("MapData")];
                    case 1:
                        mapDatastorage = _a.sent();
                        this.mapdata = JSON.parse(mapDatastorage);
                        this.createMap();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapsComponent.prototype.createMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _i, i, markerLocation, markerLabel, response, _c, _d, _e, j, pathSource, pathDestination, pathDetail, pathData, response, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _a = [];
                        for (_b in this.mapdata['markers'])
                            _a.push(_b);
                        _i = 0;
                        _j.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        markerLocation = this.mapdata['markers'][i]['location'];
                        markerLabel = this.mapdata['markers'][i]['label'];
                        return [4 /*yield*/, localforage.getItem(markerLocation)];
                    case 2:
                        response = _j.sent();
                        if (markerLocation == this.mapdata['selectNode']) {
                            this.createCircle(response, markerLocation, markerLabel, true);
                        }
                        else {
                            this.createCircle(response, markerLocation, markerLabel, false);
                        }
                        _j.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _c = [];
                        for (_d in this.mapdata['paths'])
                            _c.push(_d);
                        _e = 0;
                        _j.label = 5;
                    case 5:
                        if (!(_e < _c.length)) return [3 /*break*/, 8];
                        j = _c[_e];
                        pathSource = this.mapdata['paths'][j]['source'];
                        pathDestination = this.mapdata['paths'][j]['destination'];
                        pathDetail = this.mapdata['paths'][j]['pathDetails'];
                        pathData = pathDestination + "+" + pathSource;
                        _g = (_f = JSON).parse;
                        _h = String;
                        return [4 /*yield*/, localforage.getItem(pathData)];
                    case 6:
                        response = _g.apply(_f, [_h.apply(void 0, [_j.sent()])]);
                        //console.log("path responses-------->",response);
                        if (this.mapdata['selectPath']['pathSource'] === pathSource && this.mapdata['selectPath']['pathDestination'] === pathDestination) {
                            this.setPath(pathSource, response, "#008000", pathDetail, pathDestination);
                        }
                        else {
                            this.setPath(pathSource, response, "#808080", pathDetail, "");
                        }
                        _j.label = 7;
                    case 7:
                        _e++;
                        return [3 /*break*/, 5];
                    case 8:
                        this.map.setZoom(4);
                        return [2 /*return*/];
                }
            });
        });
    };
    MapsComponent.prototype.createCircle = function (response, loc, nodeLabel, setnode) {
        var _this = this;
        var marker;
        var imgLoc = 'assets/icons/lightGreenCircle.svg';
        // this.geoService.getLocation(loc).subscribe(
        // (response: any) => {
        if (setnode) {
            imgLoc = 'assets/icons/darkGreenCircle.svg';
            this.sendLoc(loc);
        }
        marker = new google.maps.Marker({
            position: response['results'][0]['geometry']['location'],
            map: this.map,
            icon: imgLoc,
            label: { text: nodeLabel, color: "white" }
        });
        if (setnode) {
            this.circleFlag = true;
            this.previousSelectedCircle = marker;
            this.prevText = nodeLabel;
        }
        google.maps.event.addListener(marker, 'click', function (ev) {
            _this.sendLoc(loc);
            if (_this.circleFlag) {
                _this.previousSelectedCircle.setOptions({
                    icon: 'assets/icons/lightGreenCircle.svg',
                    label: { text: _this.prevText, color: "white" }
                });
                _this.previousSelectedCircle.setMap(_this.map);
            }
            _this.circleFlag = true;
            _this.previousSelectedCircle = marker;
            _this.prevText = nodeLabel;
            marker.setOptions({
                icon: 'assets/icons/darkGreenCircle.svg',
                label: { text: nodeLabel, color: "white" }
            });
            marker.setMap(_this.map);
        });
        // });
    };
    MapsComponent.prototype.sendLoc = function (dataToEvidence) {
        this.sendData.emit(dataToEvidence);
    };
    MapsComponent.prototype.setPath = function (sourceAddress, response, colourpath, pathContent, infoLocation) {
        if (sourceAddress != "") {
            //let directionService = new google.maps.DirectionsService;
            var directionDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: colourpath,
                    strokeWeight: 3
                }
            });
            directionDisplay.setMap(this.map);
            // directionService.route({
            //     origin: sourceAddress,
            //     destination: destinationAddress,
            //     travelMode: google.maps.TravelMode.DRIVING
            //   },(response: any) => {
            //         if(google.maps.DirectionsStatus)
            //         {
            this.directionResponses.push(response);
            directionDisplay.setDirections(response);
            this.clickableRoute(response, directionDisplay, pathContent, infoLocation);
        }
        //       });
        // }
    };
    MapsComponent.prototype.clickableRoute = function (response, directionDisplay, pathContent, pathLocation) {
        var _this = this;
        if (pathLocation !== "") {
            this.infoWindowPath = new google.maps.InfoWindow({
                content: pathContent,
                position: response['routes'][0].bounds.getCenter()
            });
            this.flag = true;
            this.directionFlag = directionDisplay;
            this.resetPath("#008000", directionDisplay);
            this.infoWindowPath.open(this.map);
        }
        var legs = response['routes'][0]['legs'];
        console.log("+++++++++", response);
        for (var i = 0; i < legs.length; i++) {
            var steps = legs[i].steps;
            for (var j = 0; j < steps.length; j++) {
                var nextSegment = steps[j].path;
                var stepPolyline = new google.maps.Polyline(this.setPolylinesAttribute);
                for (var k = 0; k < nextSegment.length; k++) {
                    stepPolyline.getPath().push(nextSegment[k]);
                }
                this.polylines.push(stepPolyline);
                console.log(">>>>>>>>", stepPolyline.getPath().getLength());
                stepPolyline.setMap(this.map);
                google.maps.event.addListener(stepPolyline, 'click', function (evt) {
                    if (_this.flag) {
                        _this.infoWindowPath.close();
                        _this.resetPath("#808080", _this.directionFlag);
                    }
                    _this.infoWindowPath = new google.maps.InfoWindow({
                        content: pathContent,
                        position: evt.latLng
                    });
                    console.log("77777777777", evt);
                    _this.flag = true;
                    _this.directionFlag = directionDisplay;
                    _this.resetPath("#008000", directionDisplay);
                    _this.infoWindowPath.open(_this.map);
                });
            }
        }
    };
    MapsComponent.prototype.resetPath = function (recolour, directiondisplay) {
        directiondisplay.setOptions({
            polylineOptions: {
                strokeColor: recolour
            }
        });
        directiondisplay.setMap(this.map);
    };
    __decorate([
        ViewChild('gmap'),
        __metadata("design:type", Object)
    ], MapsComponent.prototype, "gmapElement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MapsComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MapsComponent.prototype, "evidenceType", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MapsComponent.prototype, "sendData", void 0);
    MapsComponent = __decorate([
        Component({
            selector: 'app-maps',
            templateUrl: './maps.component.html',
            styleUrls: ['./maps.component.scss'],
            providers: [GeoserviceService]
        }),
        __metadata("design:paramtypes", [GeoserviceService])
    ], MapsComponent);
    return MapsComponent;
}());
export { MapsComponent };
//# sourceMappingURL=maps.component.js.map