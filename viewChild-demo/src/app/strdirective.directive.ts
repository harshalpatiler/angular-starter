import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStrdirective]'
})
export class StrdirectiveDirective {

  constructor( private tempref:TemplateRef<any>, private viewref: ViewContainerRef) { }
  @Input() set appStrdirective(con:boolean){
    if(con){
      this.viewref.createEmbeddedView(this.tempref);
    }else{
      this.viewref.clear();
    }
  } 
  
}
