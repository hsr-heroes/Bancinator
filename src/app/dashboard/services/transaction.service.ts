import { Injectable } from '@angular/core';
import {ResourceBase} from '../../auth/resources/resource-base';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {TransactionInfo} from '../models/transaction-info';

@Injectable()
export class TransactionService extends ResourceBase{

  constructor(http: Http) {
    super(http);
  }

  public getTransactions(count: number): Observable<TransactionInfo> {
    const url = `/accounts/transactions?count=${count}`;
    return this.get(url)
      .map((response: Response) => {
        const result = response.json();
        if (result) {
          return TransactionInfo.fromDto(result);
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<TransactionInfo>(null);
      });
  }

}
