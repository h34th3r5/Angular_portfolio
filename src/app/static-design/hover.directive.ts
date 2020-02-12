import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElements.class = 'hover-on-mouse'
  }

  constructor() { }

}
