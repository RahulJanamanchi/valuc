import { NgModule } from '@angular/core';


//import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { MapsComponent } from './maps.component';
@NgModule({
  declarations: [
    MapsComponent
  ],
  imports: [
    HttpClientModule
  ],
  providers: [],
  exports: [MapsComponent]
})
export class MapsModule { }
