import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  refForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }
  Registration(data: any) {
    console.log(data);
  }

  setForm() {
    this.refForm = this.fb.group({
      //  fname: new FormContro
      //  lname: new FormControl(),
      //  email: new FormControl(),
      fname: ['', Validators.required],
      lname: [''],
      email: [''],
    })
  }
  resetFun() {
    this.refForm.reset();
  }
  filldata() {
    this.refForm.setValue({
      fname: "Harshal",
      lname: 'Patil',
      email: "hp@gmail.com"
    })
  }


}
