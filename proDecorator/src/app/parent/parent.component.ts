import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  cData: any;
  getData(value) {
    this.cData = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
