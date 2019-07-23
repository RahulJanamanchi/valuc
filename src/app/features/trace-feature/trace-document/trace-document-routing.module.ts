import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraceDocumentLandingComponent } from './trace-document-landing/trace-document-landing.component';

const routes: Routes = [
  {
    path: '',
    component: TraceDocumentLandingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraceDocumentRoutingModule { }
