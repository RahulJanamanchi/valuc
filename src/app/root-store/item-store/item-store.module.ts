import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ItemEffects } from './effects';
import { itemReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('item', itemReducer),
    EffectsModule.forFeature([ItemEffects])
  ]
})
export class ItemStoreModule { }
