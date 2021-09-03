import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
     cdata:any;
  constructor() { 
  
  }
  // sendData(val){
  //  this.data= val;
  // }
  // fun1(val){
  //   this.cdata= val;
  // }
  ngOnInit(): void {
  }

}
