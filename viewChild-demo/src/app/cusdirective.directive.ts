import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCusdirective]'
})
export class CusdirectiveDirective {

  constructor(private elref: ElementRef) {
    this.elref.nativeElement.style.color = 'red';
    this.elref.nativeElement.style.fontSize = "20px";
  }

}
