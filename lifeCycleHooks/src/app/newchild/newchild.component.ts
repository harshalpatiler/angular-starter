import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {

  constructor() { }
  message: string = "hello from new child";
  ngOnInit(): void {
  }

}
