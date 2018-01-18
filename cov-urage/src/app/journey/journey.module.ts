import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchJourneyComponent } from './search-journey/search-journey.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchJourneyComponent, AddUserComponent]
})
export class JourneyModule { }
