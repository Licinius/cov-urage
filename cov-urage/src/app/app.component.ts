import { Component } from '@angular/core';
import {AuthGuardService} from './auth-guard.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cov@urage';
  constructor(private logGuard: AuthGuardService){}
}
