import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BrandService } from '../../services/brand.service';
import * as brandActions from './actions';

@Injectable()
export class BrandEffects {

  constructor(private brandService: BrandService, private actions$: Actions) {}

  @Effect()
  brandRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<brandActions.BrandRequestAction>(
      brandActions.ActionTypes.BRAND_REQUEST
    ),
    switchMap(action =>
      this.brandService.
      	fetchBrands().
      	pipe(
      	  map(brands => new brandActions.BrandSuccessAction({ brands: brands.slice(0, 5) })),
          catchError(error => of(new brandActions.BrandFailureAction({ error })))
	      )
    )
  );

}
