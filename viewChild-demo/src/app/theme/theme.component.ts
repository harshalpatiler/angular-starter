import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  @ViewChild('name', { static: false }) elname: ElementRef;
  @ViewChild('roll', { static: false }) elroll: ElementRef;

  ngAfterViewInit() {
    this.elname.nativeElement.style.backgroundColor = "red";
    this.elroll.nativeElement.style.backgroundColor = "Black";
    this.elroll.nativeElement.style.Color = "white";
  }
}
