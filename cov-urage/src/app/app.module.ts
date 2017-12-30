import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { TrajetService } from './journey/trajet.service';
import {AuthService} from './auth/auth.service'
import {AuthGuardService} from './auth-guard.service'
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth/auth.component';
import { SearchJourneyComponent } from './journey/search-journey/search-journey.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchJourneyComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [TrajetService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
