import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { EvidenceDetailsComponent } from '../evidence-details/evidence-details.component';
import { ProductStoryComponent } from './product-story/product-story.component';
import { ProductUsageComponent } from './product-usage/product-usage.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';

const routes: Routes = [
  {
    path: '',
    component: ProductLandingComponent
  },
  {
    path: 'evidence',
    component: EvidenceDetailsComponent
  },
  {
    path: 'story',
    component: ProductStoryComponent
  },
  {
    path: 'usage',
    component: ProductUsageComponent 
  },
  {
    path: 'error',
    component: ProductNotFoundComponent
  },
  {
    path: 'home',
    component : ProductHomeComponent
  },
  {
    path:'rating',
    component : ProductRatingComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductFeatureRoutingModule { }
