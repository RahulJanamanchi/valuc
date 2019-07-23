import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';

const COMPONENTS = [TabComponent, TabsComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: COMPONENTS
})
export class TabModule { }
