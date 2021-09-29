import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempalate-form',
  templateUrl: './tempalate-form.component.html',
  styleUrls: ['./tempalate-form.component.css']
})
export class TempalateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Registration(formData:any){
   console.log(formData.value);
   console.log(formData.valid);
  }
}
