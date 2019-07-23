import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceDetailsComponent } from './evidence-details.component';
import { ProductFeatureRoutingModule } from '../product-feature/product-feature-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapsModule } from 'src/app/components/maps/maps.module';
import { TabModule } from 'src/app/components/tab/tab.module';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonPillModule } from 'src/app/components/button-pill/button-pill.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [EvidenceDetailsComponent, ProductCardComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductFeatureRoutingModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MapsModule,
    TabModule,
    MatCardModule,
    MatDividerModule,
    ButtonPillModule,
    MatTabsModule
  ],
  exports:[EvidenceDetailsComponent]
})
export class EvidenceDetailsModule { }
