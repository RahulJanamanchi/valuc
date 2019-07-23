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
import { browser, by, element } from 'protractor';
// Replace your product details in below testdate
var productData = require('./products.testdata.json');
describe('Protractor valucheck App', function () {
    function getPageElts() {
        var navElts = element.all(by.css('app-root'));
        return {
            navElts: navElts,
            scanButton: element(by.xpath('//a[@class="btn pill"]')),
            tryAsaGuestButton: element(by.xpath('//div[3]//button[1]')),
            traceButton: element(by.xpath('//button[@class="btn pill"]')),
            video: element(by.model('video'))
        };
    }
    describe('scan test : Happy Path ', function () {
        it('should have a title', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, browser.get('http://localhost:4200')];
                        case 1:
                            _a.sent();
                            expect(browser.getTitle()).toEqual('ValUCheck');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('click try as a guest', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, browser.get('http://localhost:4200/login')];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, getPageElts().tryAsaGuestButton.click()];
                        case 2:
                            _a.sent();
                            expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/home');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('click on the scan product button', function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getPageElts().scanButton.click()];
                        case 1:
                            _a.sent();
                            expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/scan/qr-code');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('scan the product by camera', function () {
            browser.sleep(15000);
        });
        it('click on the grade tab', function () {
            browser.sleep(2000);
        });
        it('Click on the trace button should to /trace', function () {
            browser.sleep(7000);
            var traceBtn = getPageElts().traceButton;
            browser.sleep(3000);
            traceBtn.click().then(function () {
                return browser.getCurrentUrl().then(function (url) {
                    expect(decodeURIComponent(url))
                        .toEqual(decodeURIComponent('http://localhost:4200/trace/' + encodeURIComponent(JSON.stringify(productData[0]))));
                });
            });
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map