import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  refForm : FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.setForm()
  }
  Registration(data:any){
console.log(data);
  }
setForm(){
  this.refForm = this.fb.group({
   fname: new FormControl(),
   lname: new FormControl(),
   email: new FormControl()
  })
}
}
