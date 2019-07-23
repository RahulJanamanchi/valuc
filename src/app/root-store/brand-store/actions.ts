import { Action } from '@ngrx/store';
import { Brand } from '../../models/brand';

export enum ActionTypes {
  BRAND_REQUEST = '[Home] Brand Request',
  BRAND_SUCCESS = '[Home] Brand Success',
  BRAND_FAILURE = '[Home] Brand Failure'
}

export class BrandRequestAction implements Action {
  readonly type = ActionTypes.BRAND_REQUEST;
}

export class BrandSuccessAction implements Action {
  readonly type = ActionTypes.BRAND_SUCCESS;
  constructor(public payload: { brands: Brand[] }) {}
}

export class BrandFailureAction implements Action {
  readonly type = ActionTypes.BRAND_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type Actions = BrandRequestAction | BrandSuccessAction | BrandFailureAction;
