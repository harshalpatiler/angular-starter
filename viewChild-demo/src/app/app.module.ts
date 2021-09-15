import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { CusdirectiveDirective } from './cusdirective.directive';
import { StrdirectiveDirective } from './strdirective.directive';
import { BgcolorDirective } from './bgcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    CusdirectiveDirective,
    StrdirectiveDirective,
    BgcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
