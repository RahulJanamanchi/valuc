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
import { Store } from '@ngrx/store';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(store$) {
        this.store$ = store$;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (userType) {
        // this.store$.dispatch(new AuthActions.LoginRequestAction({
        //   credentials: { userName: userType, userType, password: '123' }
        // }));
    };
    LoginComponent.prototype.styleBackGround = function () {
        var styles = {
            'background': 'white',
            'background-image': 'linear-gradient(to bottom, rgba(154,204,157,1), rgba(252,0,0,0)),url("~/assets/icons/icon-72x72.png")',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-attachment': 'fixed',
            'background-size': 'contain'
        };
        return styles;
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [Store])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map