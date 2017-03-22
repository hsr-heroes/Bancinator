import { Injectable } from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {AuthService} from './auth.service';
import {NavigationService} from '../../core/services/navigation.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService) {}

  canLoad(route: Route): boolean {
    console.log("now:");
    console.log(this.autSvc.authenticatedUser);
    return this.autSvc.hasCredentials;
  }

}
