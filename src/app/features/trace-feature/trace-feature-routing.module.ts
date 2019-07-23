import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraceComponent } from './trace/trace.component';

const routes: Routes = [
  {
    path: 'tracedocuments',
    loadChildren: './trace-document/trace-document.module#TraceDocumentModule'
  },
  {
    path: '',
    component: TraceComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraceFeatureRoutingModule { }
