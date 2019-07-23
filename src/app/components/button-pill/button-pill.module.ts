import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPillComponent } from './button-pill.component';

@NgModule({
  declarations: [ButtonPillComponent],
  imports: [
    CommonModule
  ],
  exports:[ButtonPillComponent]
})
export class ButtonPillModule { }
