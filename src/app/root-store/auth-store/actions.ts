import { Action } from '@ngrx/store';
import { Credentials, User } from '../../models/auth';

export enum ActionTypes {
  LOGIN_REQUEST = '[My Feature] Login Request',
  LOGIN_FAILURE = '[My Feature] Login Failure',
  LOGIN_SUCCESS = '[My Feature] Login Success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { credentials: Credentials }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export type Actions = LoginRequestAction | LoginFailureAction | LoginSuccessAction;
