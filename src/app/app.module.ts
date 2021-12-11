import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PksratifyModule } from 'pksratify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PksratifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
