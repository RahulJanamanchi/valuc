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
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as authActions from './actions';
var AuthEffects = /** @class */ (function () {
    function AuthEffects(authService, actions$, router, route) {
        var _this = this;
        this.authService = authService;
        this.actions$ = actions$;
        this.router = router;
        this.route = route;
        this.loginRequestEffect$ = this.actions$.pipe(ofType(authActions.ActionTypes.LOGIN_REQUEST), switchMap(function (action) {
            return _this.authService.
                login(action.payload.credentials).
                pipe(map(function (user) { return new authActions.LoginSuccessAction({ user: user }); }), catchError(function (error) { return of(new authActions.LoginFailureAction({ error: error })); }));
        }));
        this.loginSuccessEffect$ = this.actions$.pipe(ofType(authActions.ActionTypes.LOGIN_SUCCESS), tap(function (action) {
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            _this.router.navigateByUrl(_this.route.snapshot.queryParams.returnUrl);
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], AuthEffects.prototype, "loginRequestEffect$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Observable)
    ], AuthEffects.prototype, "loginSuccessEffect$", void 0);
    AuthEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AuthService,
            Actions,
            Router,
            ActivatedRoute])
    ], AuthEffects);
    return AuthEffects;
}());
export { AuthEffects };
//# sourceMappingURL=effects.js.map