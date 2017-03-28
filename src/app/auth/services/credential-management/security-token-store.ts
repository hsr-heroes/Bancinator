import {Injectable} from '@angular/core';

/**
 * TODO: Add localStorage logic here...
 */
@Injectable()
export class SecurityTokenStore {
  private token: SecurityToken;

  constructor() {
    this.token = JSON.parse(localStorage.getItem('currentUser'));
  }

  public get storedValue(): SecurityToken {
    return this.token;
  }

  public set storedValue(value: SecurityToken) {
    this.token = value;
    if (this.token) {
      localStorage.setItem('currentUser', JSON.stringify(({ owner: this.token.owner, token: this.token.token})) );
    } else {
      localStorage.removeItem('currentUser');
    }
  }
}

export interface SecurityToken {
  token: string;
  owner: any;
}
