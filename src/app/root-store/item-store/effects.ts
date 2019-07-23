import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemService } from '../../services/item.service';
import * as itemActions from './actions';

@Injectable()
export class ItemEffects {

  constructor(private itemService: ItemService, private actions$: Actions) {}

  // @Effect()
  // itemRequestEffect$: Observable<Action> = this.actions$.pipe(
  //   ofType<itemActions.ItemRequestAction>(
  //     itemActions.ActionTypes.ITEM_REQUEST
  //   ),
  //   switchMap(action =>
  //     this.itemService.
  //       fetchItems().
  //       pipe(
  //         map(items => new itemActions.ItemSuccessAction({ items: items.slice(0, 15) })),
  //         catchError(error => of(new itemActions.ItemFailureAction({ error })))
  //       )
  //   )
  // );

}
