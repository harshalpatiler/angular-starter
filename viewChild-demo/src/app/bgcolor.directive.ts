import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {
   
  constructor() { }
  @HostBinding('style.color') color: string = "brown";
 
  @HostListener('click') onclick() {
    this.color = "green";
 
    console.log("Hostlistener Listening The Click event");
  }
}
