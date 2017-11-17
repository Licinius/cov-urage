import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayJourneyComponent } from './display-journey/display-journey.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayJourneyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
