import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TrajetService} from './journey/trajet.service';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { DisplayJourneyComponent } from './journey/display-journey/display-journey.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayJourneyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TrajetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
