import { Injectable } from '@angular/core';
import {Account} from '../../auth/models/account';
import {Observable} from 'rxjs';
import {Headers, Http, Response} from '@angular/http';
import {ResourceBase} from '../../auth/resources/resource-base';

@Injectable()
export class AccountService extends ResourceBase {

  constructor(http: Http) {
    super(http);
  }

  public getAccount(id: number = null): Observable<Account> {
    const url = '/accounts' + (id ? '/${id}' : '');
    return this.get(url)
      .map((response: Response) => {
        const result = response.json();
        if (result) {
          return Account.fromDto(result);
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<Account>(null);
      });
  }

}
