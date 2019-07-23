import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as authActions from './actions';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.LoginRequestAction>(
      authActions.ActionTypes.LOGIN_REQUEST
    ),
    switchMap(action =>
      this.authService.
      	login(action.payload.credentials).
      	pipe(
      	  map(user => new authActions.LoginSuccessAction({ user })),
          catchError(error => of(new authActions.LoginFailureAction({ error })))
	      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccessEffect$: Observable<any> = this.actions$.pipe(
    ofType<authActions.LoginSuccessAction>(
      authActions.ActionTypes.LOGIN_SUCCESS
    ),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl);
    })
  );

}
