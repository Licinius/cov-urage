import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { TrajetService } from './journey/trajet.service';
import {AuthService} from './auth/auth.service'
import {AuthGuardService} from './auth-guard.service'
import {UserService} from './user/user.service';

import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth/auth.component';
import {InscriptionComponent} from './user/inscription/inscription.component'
import { SearchJourneyComponent } from './journey/search-journey/search-journey.component';
import { AppRoutingModule } from './/app-routing.module';
import {AddUserComponent} from './journey/add-user/add-user.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchJourneyComponent,
    AuthComponent,
    InscriptionComponent,
    AddUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [TrajetService,AuthService,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
