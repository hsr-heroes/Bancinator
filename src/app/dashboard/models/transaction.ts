import {Account} from '../../auth/models/account';

export class Transaction {
  constructor(public from: Account = null,
              public target: Account = null,
              public amount: number = null,
              public total: number = null,
              public date: Date = new Date() ) {
  }

  public static fromDto(data: any): Transaction {
    return new Transaction(data.from, data.target, data.amount, data.total, data.date);
  }

  toDto(): any {
    return {
      from: this.from.accountNr,
      target: this.target.accountNr,
      amount: this.amount,
      total: this.total,
      date: this.date.toISOString()
    };
  }
}
