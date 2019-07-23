import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[conversion-node]',
  })
export class ConversionNodeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}