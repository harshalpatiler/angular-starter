import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData: string
  @Output() childEvent = new EventEmitter()
  constructor() {
    console.log("parent component constructor is called");
  }
  ngOnChanges() {
    console.log(' Child component ngOnChanges is method is called');
  }
  
  ngOnInit(): void {
  }
  childData: string;
  sendData(val: any) {
    this.childEvent.emit(val);
  }

}
