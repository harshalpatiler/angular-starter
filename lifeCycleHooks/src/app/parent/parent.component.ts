import { AfterContentChecked, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ChildtwoComponent } from '../childtwo/childtwo.component';
import { NewchildComponent } from '../newchild/newchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild(ChildtwoComponent, { static: false }) childComp: ChildtwoComponent;
  cdata: any;
  @ViewChild(NewchildComponent, {static:false}) newchild:NewchildComponent;
  constructor( private cd:ChangeDetectorRef) {
    console.log("parent component constructor is called");
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit this method is executed');
    this.childComp.msg = "Good Evening";
  }
 

  ngAfterViewInit(){
    console.log("ngAfterViewInit lifecycle hook is called");
    this.newchild.message="Changed from parent ngAfterViewInit method";
    this.cd.detectChanges();
  }
  // sendData(val){
  //  this.data= val;
  // }
  // fun1(val){
  //   this.cdata= val;
  // }
  ngOnChanges() {
    console.log(' Parent component ngOnChanges is method is called');
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked method is called");
  }

  ngOnInit(): void {
    console.log(" parent compoent ngOnit called")
  }
  ngAfterContentChecked(): void {
    console.log('parent component ngAfterContentChecked is called');
    this.childComp.msg = "Hello this change is from ngAfterContentChecked()";
    this.childComp.change();
  }
}
