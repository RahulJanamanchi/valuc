import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[child-nodes]',
  })
export class ChildNodeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}