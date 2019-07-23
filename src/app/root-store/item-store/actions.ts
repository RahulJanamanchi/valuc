import { Action } from '@ngrx/store';
import { Item } from '../../models/item';

export enum ActionTypes {
  ITEM_REQUEST = '[Home] Item Request',
  ITEM_SUCCESS = '[Home] Item Success',
  ITEM_FAILURE = '[Home] Item Failure',
  ITEM_ADD= '[Home] Item Add'
}

export class ItemRequestAction implements Action {
  readonly type = ActionTypes.ITEM_REQUEST;
}

export class ItemSuccessAction implements Action {
  readonly type = ActionTypes.ITEM_SUCCESS;
  constructor(public payload: { items: Item[] }) {}
}

export class ItemFailureAction implements Action {
  readonly type = ActionTypes.ITEM_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class ItemAddAction implements Action {
  readonly type = ActionTypes.ITEM_ADD;
  constructor(public payload: Item ) {}
}


export type Actions = ItemRequestAction | ItemSuccessAction | ItemFailureAction | ItemAddAction;
