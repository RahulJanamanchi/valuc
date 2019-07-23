import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { IconModule } from '../../components/icon/icon.module';
import { StoresFeatureRoutingModule } from './stores-feature-routing.module';
import { StoresComponent } from './stores/stores.component';
import { StoresHeaderComponent } from './stores-header/stores-header.component';
import { StoresNearbyComponent } from './stores-nearby/stores-nearby.component';
import { PlacesNearbyComponent } from './places-nearby/places-nearby.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [StoresComponent, StoresHeaderComponent, StoresNearbyComponent, PlacesNearbyComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    VirtualScrollerModule,
    StoresFeatureRoutingModule,
    IconModule
  ],
  entryComponents: [StoresComponent]
})
export class StoresFeatureModule { }
