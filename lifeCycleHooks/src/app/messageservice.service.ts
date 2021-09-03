import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor() { }
  getmessage(){
    return "Hello world";
  }
}
