import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Pipes Demo Example';
  clickfun() {
    console.log("Simple example of Click event");
  }
  clickfun2() {
    console.log("This is written in conical form of event");
  }
  keyUp() {
    console.log('This is keyup event')
  }
  keyDown() {
    console.log('This is key down event'
    )
  }
  msg: any;
  input(data: any) {
    console.log('This is input event');
    this.msg = data;
  }
  newmsg: any = 'hello world';
  funct(val: any){
    this.newmsg = val;
  }
  newdata: any= 'hey there';
  obj = {
    'name': "Harshal",
    'city': "Dhule",
    'education': 'BE'
  }
    newdate = new Date()
}
