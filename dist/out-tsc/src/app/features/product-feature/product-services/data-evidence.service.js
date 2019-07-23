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
import * as localforage from "localforage";
var DataEvidenceService = /** @class */ (function () {
    function DataEvidenceService() {
        this.evidenceData = [];
        this.mapData = { "markers": [], "paths": [], "selectNode": "", "selectPath": { "pathSource": "", "pathDestination": "" } };
        this.markerArray = [];
        this.pathArray = [];
    }
    DataEvidenceService.prototype.getData = function (trackernode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.traceServerData(trackernode);
                        this.mapData.markers = this.markerArray;
                        this.mapData.paths = this.pathArray;
                        return [4 /*yield*/, localforage.getItem("MapData")];
                    case 1:
                        if ((_a.sent()) === null) {
                            localforage.setItem("MapData", JSON.stringify(this.mapData));
                        }
                        return [2 /*return*/, this.evidenceData];
                }
            });
        });
    };
    DataEvidenceService.prototype.traceServerData = function (node) {
        this.setData(node.inventories, node.companyData);
        this.createConversionDetail(node.inventories);
        if (node.children) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.setData(child.inventories, child.companyData);
                this.setMapPath(node.companyData, child.companyData);
                this.createConversionDetail(child.inventories);
                for (var _b = 0, _c = child.orders; _b < _c.length; _b++) {
                    var order = _c[_b];
                    this.setMapPath(child.companyData, order.companyData);
                    this.traceServerData(order);
                }
            }
        }
    };
    DataEvidenceService.prototype.setMapPath = function (companydata, childCompanydata) {
        var pathobject = { "source": "", "destination": "", "pathDetails": "" };
        pathobject.destination = this.getAddressObject(companydata).address;
        pathobject.source = this.getAddressObject(childCompanydata).address;
        pathobject.pathDetails = "";
        this.pathArray.push(pathobject);
    };
    DataEvidenceService.prototype.setData = function (inventorydata, companydata) {
        this.numberEvidences = 0;
        var arrKeyValue = [];
        for (var _i = 0, _a = companydata.businessUnit.evidences; _i < _a.length; _i++) {
            var data = _a[_i];
            var evidencetype = data.evidenceType;
            arrKeyValue.push(evidencetype);
            this.createEvidenceData(data, inventorydata, companydata);
        }
        for (var _b = 0, inventorydata_1 = inventorydata; _b < inventorydata_1.length; _b++) {
            var idata = inventorydata_1[_b];
            for (var _c = 0, _d = idata.inventory.evidences; _c < _d.length; _c++) {
                var invdata = _d[_c];
                var evidencetype = invdata.evidenceType;
                if (!arrKeyValue.includes(evidencetype)) {
                    this.createEvidenceData(invdata, inventorydata, companydata);
                }
            }
        }
        //for map data 
        var marker = { "location": "", "label": "" };
        marker.label = String(this.numberEvidences);
        marker.location = this.getAddressObject(companydata).address;
        this.markerArray.push(marker);
    };
    DataEvidenceService.prototype.createEvidenceData = function (evidence, inventorydata, companydata) {
        var locationData = this.setEvidenceData(evidence.evidenceType, companydata, inventorydata);
        var present = true;
        for (var i in this.evidenceData) {
            if (this.evidenceData[i].type === evidence.evidenceType) {
                this.evidenceData[i].location.push(locationData);
            }
            else {
                present = false;
            }
        }
        if (present === false || this.evidenceData.length === 0) {
            var keyValueObject = { "type": "", "color": "", "imageUrl": "", "location": [] };
            var locationArr = [];
            locationArr.push(locationData);
            keyValueObject.type = evidence.evidenceType;
            keyValueObject.color = "#F20000";
            keyValueObject.imageUrl = "assets/icons/ecology.svg";
            keyValueObject.location = locationArr;
            this.evidenceData.push(keyValueObject);
        }
    };
    DataEvidenceService.prototype.setEvidenceData = function (evidencetype, companydata, inventorydata) {
        var locationObject = this.getAddressObject(companydata);
        locationObject.businessUnit.unitName = companydata.company.name;
        if (companydata.company.addresses.length > 0) {
            locationObject.businessUnit.unitCity = companydata.company.addresses[0].city;
        }
        else {
            locationObject.businessUnit.unitCity = "";
        }
        locationObject.businessUnit.unitImage = companydata.company.profileImageURL;
        locationObject.nodeLevel = this.setNodelevelDetails(evidencetype, companydata.businessUnit);
        locationObject.productLevel = this.setProductLevelDetails(evidencetype, inventorydata);
        locationObject.numberEvidences = this.numberEvidences;
        return locationObject;
    };
    DataEvidenceService.prototype.getAddressObject = function (companydata) {
        var locationObject = { "address": "", "numberEvidences": null, "businessUnit": { "unitName": "", "unitImage": "", "unitCity": "" }, "nodeLevel": [], "productLevel": [] };
        if (companydata.company.addresses.length > 0) {
            var address = companydata.company.addresses[0];
            var locationString = String(address.addressLine + ", " + address.city + ", " + address.state + ", " + address.country);
            locationObject.address = locationString;
        }
        else {
            locationObject.address = "";
        }
        return locationObject;
    };
    DataEvidenceService.prototype.setProductLevelDetails = function (evidencetype, inventoryData) {
        var productArr = [];
        var productLevelEvidences = [];
        for (var _i = 0, inventoryData_1 = inventoryData; _i < inventoryData_1.length; _i++) {
            var inventorydetails = inventoryData_1[_i];
            for (var _a = 0, _b = inventorydetails.inventory.evidences; _a < _b.length; _a++) {
                var evidence = _b[_a];
                if (evidencetype === evidence.evidenceType) {
                    for (var _c = 0, _d = evidence.evidenceClassification; _c < _d.length; _c++) {
                        var keyclassify = _d[_c];
                        this.numberEvidences++;
                        var productData = { "subType": "", "description": "", "images": [], "videos": [], "document": [], "graphs": [] };
                        productData.description = keyclassify.description;
                        productData.subType = keyclassify.name;
                        productData.images = keyclassify.gallery.images;
                        productData.videos = keyclassify.gallery.videos;
                        productData.document = keyclassify.certificates;
                        productLevelEvidences.push(productData);
                    }
                    break;
                }
            }
            var product = { "product": "", "brandName": "", "productImage": "", "productEvidences": [] };
            product.product = inventorydetails.inventory.productName;
            product.brandName = inventorydetails.inventory.brandName;
            product.productImage = inventorydetails.inventory.gallery.images[0].imageURL;
            product.productEvidences = productLevelEvidences;
            productArr.push(product);
        }
        return productArr;
    };
    DataEvidenceService.prototype.setNodelevelDetails = function (evidencetype, businessunit) {
        var nodeLevelEvidences = [];
        for (var _i = 0, _a = businessunit.evidences; _i < _a.length; _i++) {
            var keyvalues = _a[_i];
            if (keyvalues.evidenceType === evidencetype) {
                for (var _b = 0, _c = keyvalues.evidenceClassification; _b < _c.length; _b++) {
                    var keyclassify = _c[_b];
                    this.numberEvidences++;
                    var nodeData = { "subType": "", "description": "", "images": [], "videos": [], "documents": [] };
                    nodeData.description = keyclassify.description;
                    nodeData.subType = keyclassify.name;
                    nodeData.images = keyclassify.gallery.images;
                    nodeData.videos = keyclassify.gallery.videos;
                    nodeData.documents = keyclassify.certificates;
                    nodeLevelEvidences.push(nodeData);
                }
                break;
            }
        }
        return nodeLevelEvidences;
    };
    DataEvidenceService.prototype.createConversionDetail = function (inventoryArr) {
        for (var _i = 0, inventoryArr_1 = inventoryArr; _i < inventoryArr_1.length; _i++) {
            var inventory = inventoryArr_1[_i];
            for (var _a = 0, _b = inventory.stockMasters; _a < _b.length; _a++) {
                var stockmaster = _b[_a];
                for (var _c = 0, _d = stockmaster.conversions; _c < _d.length; _c++) {
                    var conversiondata = _d[_c];
                    this.setData(conversiondata.inventories, conversiondata.companyData);
                    if (conversiondata.children) {
                        for (var _e = 0, _f = conversiondata.children; _e < _f.length; _e++) {
                            var children = _f[_e];
                            this.setMapPath(conversiondata.companyData, children.companyData);
                            this.traceServerData(children);
                        }
                    }
                }
            }
        }
    };
    DataEvidenceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataEvidenceService);
    return DataEvidenceService;
}());
export { DataEvidenceService };
//# sourceMappingURL=data-evidence.service.js.map