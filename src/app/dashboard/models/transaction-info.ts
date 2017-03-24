import {Transaction} from './transaction';
export class TransactionInfo {
  constructor(public resultcount: number,
              public count: number,
              public skip: number,
              public fromDate: Date,
              public toDate: Date,
              public result: Transaction []) {
  }

  public static fromDto(data: any): Transaction {
    return new TransactionInfo(data.query.resultcount, data.query.count, data.query.skip, data.query.fromDate, data.query.toDate, data.result);
  }

  toDto(): any {
    return {
      query: {
        resultcount: this.resultcount,
        count: this.count,
        skip: this.skip,
        fromDate: this.fromDate.toISOString(),
        toDate: this.toDate.toISOString()
      },
      result: this.result.map((transaction: Transaction) => transaction.toDto())
    };
  }
}
