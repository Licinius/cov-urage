import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TrajetService} from './journey/trajet.service';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchJourneyComponent } from './journey/search-journey/search-journey.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchJourneyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TrajetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
