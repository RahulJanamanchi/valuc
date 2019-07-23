import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoryButtonComponent } from './story-button.component';

@NgModule({
  declarations: [StoryButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [StoryButtonComponent]
})
export class StoryButtonModule { }
