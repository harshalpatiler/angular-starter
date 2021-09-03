import { Component, ViewEncapsulation } from '@angular/core';
import { MessageserviceService } from './messageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'lifeCycleHooks';
  msg:string=""
  constructor( private _messageServ:MessageserviceService){
    this.msg = _messageServ.getmessage();
    console.log("appp component constructor is called")
  }
}
