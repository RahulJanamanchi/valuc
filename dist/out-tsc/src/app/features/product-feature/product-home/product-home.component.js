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
import { Component, Input, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScanService } from '../../../services/scan.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { DataEvidenceService } from '../product-services/data-evidence.service';
import * as _ from 'lodash';
import * as localforage from "localforage";
import { GoogleResponseService } from '../product-services/google-response.service';
import { EvidenceDetailsService } from '../../evidence-details/services/evidence-details.service';
import { ProductDetailsService } from '../../../services/product-details.service';
import { StoryDetailsService } from '../../../components/story-button/story-service/story-details.service';
var jsonData = require('../../../../assets/json/storyData.json');
var ProductHomeComponent = /** @class */ (function () {
    function ProductHomeComponent(router, route, scanService, sanitizer, dataEvidence, googleService, evidenceDetailService, store, productData, storyService) {
        this.router = router;
        this.route = route;
        this.scanService = scanService;
        this.sanitizer = sanitizer;
        this.dataEvidence = dataEvidence;
        this.googleService = googleService;
        this.evidenceDetailService = evidenceDetailService;
        this.store = store;
        this.productData = productData;
        this.storyService = storyService;
        this.productDetails = {};
        this.productGrades = [];
        this.productQuality = [];
        this.batchNumber = {};
        this.isLoad = false;
        this.gallery = {
            images: [],
            videos: []
        };
        //variables for lifestyle home page
        this.storyData = [];
        this.isStoryData = false;
        this.pageFlag = true;
        this.imageArray = ["assets/images/bag1.jpg", "assets/images/bag2.jpg", "assets/images/bag3.jpg", "assets/images/bag4.jpg", "assets/images/bag5.jpg", "assets/images/bag6.jpg"];
        this.mainImage = "assets/images/Home-Screen.png";
        this.checkedTrue = true;
    }
    ProductHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productData.productData.subscribe(function (data) {
            _this.batchNumber = data;
            _this.initializeNode(data);
        });
        this.storyData = jsonData;
        this.isStoryData = true;
        this.storyService.toProduct.subscribe(function (storydata) {
            _this.gotoRoute('/product/story');
        });
    };
    ProductHomeComponent.prototype.initializeNode = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var sequence, indexdbResponse, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        sequence = data.sequence;
                        return [4 /*yield*/, localforage.getItem(sequence)];
                    case 1:
                        indexdbResponse = _a.sent();
                        if (!indexdbResponse) return [3 /*break*/, 2];
                        this.trackerNode = indexdbResponse;
                        this.setProduct(this.trackerNode.inventories[0].inventory, this.trackerNode.companyData.company, this.trackerNode.companyData.businessUnit, this.trackerNode.inventories[0].stockMasters[0]);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.scanService.scan(data).subscribe(function (json) { return _this.getSmallProductInfoFromVeryLargeJson(json); }, function () { return _this.router.navigateByUrl('/product/error'); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        this.router.navigateByUrl('product/error');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductHomeComponent.prototype.getSmallProductInfoFromVeryLargeJson = function (jsonObj) {
        this.trackerNode = jsonObj;
        this.setProduct(this.trackerNode.inventories[0].inventory, this.trackerNode.companyData.company, this.trackerNode.companyData.businessUnit, this.trackerNode.inventories[0].stockMasters[0]);
    };
    ProductHomeComponent.prototype.setProduct = function (inventory, company, businessUnit, stockMasters) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, product, productDetails, item;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dataEvidence.getData(this.trackerNode)];
                    case 1:
                        _a.evidenceData = _b.sent();
                        this.evidenceDetailService.evidenceDataMethod(this.evidenceData);
                        this.googleService.getData();
                        product = {
                            title: inventory.productName,
                            brand: inventory.brandName,
                            quantity: inventory.unitOfMeasureName,
                            location: company.name + ' ' + businessUnit.name + ' ( ' + businessUnit.type + ' )',
                            image: this.getImageSrc(inventory.gallery.images[0].imageURL)
                        };
                        productDetails = {
                            batchNo: stockMasters.stockMaster.batchNumber,
                            mfgDate: stockMasters.stockMaster.manufacturingDate,
                            expDate: stockMasters.stockMaster.expiryDate,
                            mrp: inventory.price.MRP.value,
                            description: inventory.productName,
                            sequence: stockMasters.items[0].stockItem.sequence
                        };
                        // Time remaining
                        productDetails.mfgDate = moment(productDetails.mfgDate).format("DD/MM/YY");
                        productDetails.expDate = moment(productDetails.expDate).format("DD/MM/YY");
                        this.timeRemaining = moment.duration(moment(productDetails.expDate).add(1, 'days').diff(moment())).asDays();
                        this.totalTime = moment.duration(moment(productDetails.expDate).diff(moment(productDetails.mfgDate))).asDays();
                        this.diffexpcurrent = moment.duration(moment(this.expDate).diff(moment())).asDays();
                        if (this.timeRemaining > 0) {
                            this.humanizedRemaining = moment.duration(moment(productDetails.expDate).diff(moment())).humanize();
                            this.percentTimeRemaining = this.totalTime > 0 ? (this.timeRemaining * 100 / this.totalTime) : (this.timeRemaining * 100 / 1);
                        }
                        else {
                            this.humanizedRemaining = "Expired";
                            this.percentTimeRemaining = 0;
                        }
                        _.get(inventory, ['productBrandVariety', 'gradeDefinition', 'length']) ? inventory.productBrandVariety.gradeDefinition.map(function (item) { return _this.productGrades.push(item); }) : "";
                        _.get(inventory, ['productBrandVariety', 'qualityDefinition', 'length']) ? inventory.productBrandVariety.qualityDefinition.map(function (item) { return _this.productQuality.push(item); }) : null;
                        this.product = product;
                        this.productDetails = productDetails;
                        this.isLoad = true;
                        item = {
                            title: product.title,
                            thumbnailUrl: environment.apis.images + "/" + inventory.gallery.images[0].imageURL,
                            batchNumber: productDetails.batchNo,
                            sequence: stockMasters.items[0].stockItem.sequence,
                            itemCode: this.batchNumber.itemCode
                        };
                        localforage.setItem(stockMasters.items[0].stockItem.sequence, this.trackerNode);
                        localforage.setItem("mainproduct", item);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductHomeComponent.prototype.traceProduct = function () {
        this.router.navigateByUrl('/trace');
    };
    ProductHomeComponent.prototype.getImageSrc = function (path) {
        return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(236, 230, 230, 0.35), rgba(62, 57, 57, 0.9)), ' +
            ("url(\"" + environment.apis.images + "/" + path + "\")"));
    };
    ProductHomeComponent.prototype.gotoRoute = function (url) {
        this.router.navigateByUrl(url);
    };
    ProductHomeComponent.prototype.toFirstStory = function (url) {
        this.storyService.storyDetailMethod(this.storyData[0]);
        this.router.navigateByUrl(url);
    };
    ProductHomeComponent.prototype.toUsagePage = function () {
        this.router.navigate(['/product/usage']);
    };
    ProductHomeComponent.prototype.toTracePage = function () {
        this.router.navigate(['/trace']);
    };
    ProductHomeComponent.prototype.getStyle = function () {
        return {
            'width.px': 30,
            'height.px': 30,
            'background-color': 'white',
            'border-radius': '50px'
        };
    };
    ProductHomeComponent.prototype.getStar = function () {
        return {
            'width.px': 25,
            'height.px': 20,
            'background-color': 'white'
        };
    };
    ProductHomeComponent.prototype.getArrow = function () {
        return {
            'width.px': 25,
            'height.vh': 7,
            'fill': 'white',
            'color': 'white',
        };
    };
    ProductHomeComponent.prototype.getCorrect = function () {
        return {
            'width.': 50,
            'height.px': 50,
            'background-color': 'transparent',
            'margin-right.vw': 40,
        };
    };
    ProductHomeComponent.prototype.changeImage = function (image) {
        this.mainImage = image;
    };
    ProductHomeComponent.prototype.styleBackGround = function () {
        return {
            'background-image': 'url(' + this.mainImage + ')',
            'background-repeat': 'repeat',
            'background-position': 'center',
            'background-attachment': 'scroll',
            'background-size': 'cover'
        };
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductHomeComponent.prototype, "product", void 0);
    ProductHomeComponent = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        Component({
            selector: 'app-product-home',
            templateUrl: './product-home.component.html',
            styleUrls: ['./product-home.component.scss']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            ScanService,
            DomSanitizer,
            DataEvidenceService,
            GoogleResponseService,
            EvidenceDetailsService,
            Store,
            ProductDetailsService,
            StoryDetailsService])
    ], ProductHomeComponent);
    return ProductHomeComponent;
}());
export { ProductHomeComponent };
//# sourceMappingURL=product-home.component.js.map