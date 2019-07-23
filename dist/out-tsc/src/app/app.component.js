var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as localforage from "localforage";
var AppComponent = /** @class */ (function () {
    function AppComponent(updates) {
        this.title = 'value-check';
        updates.available.subscribe(function () {
            updates.activateUpdate().then(function () {
                document.location.reload();
            });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        localforage.setItem('somekey', 'some value').then(function (value) {
            // Do other things once the value has been saved.
            console.log("Set value" + value);
        }).catch(function (err) {
            // This code runs if there were any errors
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [SwUpdate])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map