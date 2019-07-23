import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrandEffects } from './effects';
import { brandReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('brand', brandReducer),
    EffectsModule.forFeature([BrandEffects])
  ]
})
export class BrandStoreModule { }
