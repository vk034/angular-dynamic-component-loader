import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTabDetail]'
})
export class TabDetailDirective implements OnInit {

  @Input() tabComponent: any;
  @Input() tabData: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(this.tabComponent);
    const componentRef = this.container.createComponent(factory);
    (<TabDetail>componentRef.instance).data = this.tabData;
  }
}

export interface TabDetail {
  data: any;
}
