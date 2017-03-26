import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {NavigationService} from '../core/services/navigation.service';

@Component({
  selector: 'wed-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService) {
    if (this.autSvc.hasCredentials) {
      this.navigationSvc.goToDashboard();
    }
  }

  ngOnInit() { }

}
