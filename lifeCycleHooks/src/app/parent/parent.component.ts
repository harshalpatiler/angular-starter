import { AfterContentChecked } from '@angular/core';
import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ChildtwoComponent } from '../childtwo/childtwo.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild(ChildtwoComponent, { static: false }) childComp: ChildtwoComponent;
  cdata: any;
  constructor() {
    console.log("parent component constructor is called");
  }
  ngAfterContentChecked(): void {
    console.log('parent component ngAfterContentChecked is called');
    this.childComp.msg = "Hello this change is from ngAfterContentChecked()";
    this.childComp.change();
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit this method is executed');
    this.childComp.msg = "Good Evening";
  }
  ngOnChanges() {
    console.log(' Parent component ngOnChanges is method is called');
  }


  // sendData(val){
  //  this.data= val;
  // }
  // fun1(val){
  //   this.cdata= val;
  // }


  ngOnInit(): void {
    console.log(" parent compoent ngOnit called")
  }

}
