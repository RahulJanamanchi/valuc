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
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input, HostListener } from '@angular/core';
import 'webrtc-adapter/out/adapter_no_global';
import { debounce } from 'lodash-es';
import jsQR from 'jsqr';
var WebcamComponent = /** @class */ (function () {
    function WebcamComponent() {
        var _this = this;
        this.scan = new EventEmitter();
        this.error = new EventEmitter();
        this.back = new EventEmitter();
        // @ViewChild('canvas')
        this.canvas = document.createElement('canvas');
        this.flash = false;
        this.streamingStopped = false;
        this.handleResize = debounce(function () {
            _this.stop();
            _this.start();
        }, 500);
        this.startScanning = function () {
            if (_this.streamingStopped)
                return;
            var _a = _this.getElements(), canvas = _a.canvas, video = _a.video;
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                _this.canvas.hidden = true;
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
                if (code && code.data) {
                    _this.stop();
                    _this.scan.emit(imageData);
                }
            }
            if (!_this.streamingStopped) {
                _this.raf = requestAnimationFrame(_this.startScanning);
            }
        };
    }
    WebcamComponent.prototype.ngOnInit = function () {
        this.start();
    };
    WebcamComponent.prototype.ngOnDestroy = function () {
        this.stop();
    };
    WebcamComponent.prototype.getElements = function () {
        return {
            canvas: this.canvas,
            // canvasOverlay: this.canvasOverlay.nativeElement,
            video: this.video.nativeElement
        };
    };
    WebcamComponent.prototype.start = function () {
        this.reset();
        // this.drawOverlay();
        this.play();
    };
    WebcamComponent.prototype.reset = function () {
        var _a = this.getElements(), canvas = _a.canvas, video = _a.video;
        var main = video.parentNode;
        this.width = canvas.width = video.width = main.offsetWidth;
        this.height = canvas.height = video.height = main.offsetHeight;
    };
    // drawOverlay() {
    //   // const { canvasOverlay } = this.getElements();
    //   const canvasWidth = canvasOverlay.width;
    //   // for footer tab 82px
    //   const canvasHeight = canvasOverlay.height - 82;
    //   const scanAreaSize = 200;
    //   const x = canvasWidth / 2 - scanAreaSize / 2;
    //   const y = canvasHeight / 2 - scanAreaSize / 2;
    //   const ctx = canvasOverlay.getContext('2d');
    //   // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //   // ctx.globalCompositeOperation = 'source-out';
    //   // ctx.fillStyle = '#000';
    //   // drawRoundRect(ctx, x, y, scanAreaSize, scanAreaSize, 30);
    //   ctx.fill();
    //   ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    //   // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // }
    WebcamComponent.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, cameras, stream, video, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _a.sent();
                        cameras = devices.filter(function (device) { return device.kind === 'videoinput'; });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        if (!cameras.length)
                            throw new Error('Camera not found!');
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                video: {
                                    width: {
                                        min: 320,
                                        max: 1280
                                    },
                                    height: {
                                        min: 240,
                                        max: 720
                                    },
                                    facingMode: 'environment'
                                },
                            })];
                    case 3:
                        stream = _a.sent();
                        video = this.getElements().video;
                        // this.stream = video.srcObject = stream;
                        this.stream = stream;
                        video.srcObject = stream;
                        this.startScanning();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.error.emit(err_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    WebcamComponent.prototype.stop = function () {
        this.streamingStopped = true;
        cancelAnimationFrame(this.raf);
        if (this.stream) {
            this.stream.getTracks().forEach(function (track) { return track.stop(); });
        }
    };
    WebcamComponent.prototype.getStyle = function () {
        return { 'width.px': 30, 'height.px': 30, 'background-color': 'white', 'border-radius': '50px', 'padding': '3px' };
    };
    WebcamComponent.prototype.switchCamera = function () {
        if (!this.stream)
            return;
        var track = this.stream.getVideoTracks()[0];
        var currentMode = track.getSettings().facingMode;
        console.log("current mode==>", currentMode);
        var newMode = currentMode === 'environment' ? 'user' : 'environment';
        console.log("new mode==>", newMode);
        this.stream.getVideoTracks()[0].applyConstraints({
            width: {
                min: 320,
                max: 1280
            },
            height: {
                min: 240,
                max: 720
            },
            facingMode: newMode
        });
        // track.applyConstraints({
        //   facingMode: newMode
        // });
    };
    WebcamComponent.prototype.toggleFlash = function (onOrOff) {
        return __awaiter(this, void 0, void 0, function () {
            var track, imageCapture, capabilities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.stream)
                            return [2 /*return*/];
                        track = this.stream.getVideoTracks()[0];
                        imageCapture = new ImageCapture(track);
                        return [4 /*yield*/, imageCapture.getPhotoCapabilities()];
                    case 1:
                        capabilities = _a.sent();
                        if (capabilities.torch) {
                            this.flash = !onOrOff;
                            return [2 /*return*/, track.applyConstraints({ advanced: [{ torch: onOrOff }] })];
                        }
                        this.error.emit('Flash is not supported');
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], WebcamComponent.prototype, "type", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "scan", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "error", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "back", void 0);
    __decorate([
        ViewChild('video'),
        __metadata("design:type", ElementRef)
    ], WebcamComponent.prototype, "video", void 0);
    __decorate([
        HostListener('window:resize'),
        __metadata("design:type", Object)
    ], WebcamComponent.prototype, "handleResize", void 0);
    WebcamComponent = __decorate([
        Component({
            selector: 'app-webcam',
            templateUrl: './webcam.component.html',
            styleUrls: ['./webcam.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], WebcamComponent);
    return WebcamComponent;
}());
export { WebcamComponent };
function drawRoundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}
//# sourceMappingURL=webcam.component.js.map