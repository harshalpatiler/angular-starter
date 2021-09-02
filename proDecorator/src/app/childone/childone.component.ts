import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  constructor() { }
  @Input() pData: string;
  @Output() childEvent = new EventEmitter()
  ngOnInit(): void {
  }
  sendData(val: any) {
    this.childEvent.emit(val)
  }

}
