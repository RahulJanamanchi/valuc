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
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
var EnvironmentConfigComponent = /** @class */ (function () {
    function EnvironmentConfigComponent(route) {
        this.route = route;
        this.environmentSettingsForm = new FormGroup({
            apiEndPoint: new FormControl('')
        });
        this.environment = environment;
    }
    EnvironmentConfigComponent.prototype.onChange = function (e) {
        console.log(Object.values(environment.apis));
        Object.keys(environment.apis).forEach(function (key) {
            environment.apis[key] = environment[e][key];
        });
        console.log(Object.values(environment.apis));
    };
    EnvironmentConfigComponent.prototype.goBack = function () {
        this.route.navigateByUrl('/home');
    };
    EnvironmentConfigComponent.prototype.ngOnInit = function () {
    };
    EnvironmentConfigComponent = __decorate([
        Component({
            selector: 'app-environment-config',
            templateUrl: './environment-config.component.html',
            styleUrls: ['./environment-config.component.scss']
        }),
        __metadata("design:paramtypes", [Router])
    ], EnvironmentConfigComponent);
    return EnvironmentConfigComponent;
}());
export { EnvironmentConfigComponent };
//# sourceMappingURL=environment-config.component.js.map