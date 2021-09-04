import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {
  msg: string = "Good Morning";
  constructor() { }

  ngOnInit(): void {
    console.log(" parent compoent ngOnit called")
  }
  change(){
    this.msg="This change is from childTwo ";
  }

}
