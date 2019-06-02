import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { Hw1Component } from './hw1/hw1.component';
import { Hw2Component } from './hw2/hw2.component';
import { Hw3Component } from './hw3/hw3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Hw1Component,
    Hw2Component,
    Hw3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
