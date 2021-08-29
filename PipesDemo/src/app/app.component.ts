import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipesDemo';
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
  input(){
    console.log('This is input event');
  }
}
