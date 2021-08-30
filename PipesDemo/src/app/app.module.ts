import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { BoldPipe } from './bold.pipe';
import { ReversePipe } from './reverse.pipe';
import { LimitwordPipe } from './limitword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    BoldPipe,
    ReversePipe,
    LimitwordPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
