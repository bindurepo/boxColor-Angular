import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { Box3Component } from './box3/box3.component';
import { Box4Component } from './box4/box4.component';
import { Box5Component } from './box5/box5.component';

@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    Box2Component,
    Box3Component,
    Box4Component,
    Box5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
