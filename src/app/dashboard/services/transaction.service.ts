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

  public getTransactions(count?: number, year?: number, month?: number): Observable<TransactionInfo> {
    let url = '/accounts/transactions';
    if (count) {
      url += `?count=${count}`;
    } else if (year && month) {
      const fromDate = new Date(year, month++, 1, 0, 0, 0, 0).toISOString();
      const toDate = new Date(year, month, 1, 0, 0, 0, 0).toISOString();
      url += `?fromDate=${fromDate}&toDate=${toDate}`;
    } else {
      return Observable.of<TransactionInfo>(null);
    }
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
