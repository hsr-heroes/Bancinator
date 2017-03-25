import { Component, OnInit } from '@angular/core';
import {Transaction} from '../models/transaction';
import {TransactionInfo} from '../models/transaction-info';
import {TransactionService} from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  private years: number [];
  private selectedYear: number;
  private months: Date [];
  private selectedMonth: number;
  private transactions: Transaction [];

  constructor(private transSvc: TransactionService) { }

  ngOnInit() {
    this.months = Array.apply(null, {length: 12}).map(Function.call, Number).map( (x) => new Date().setMonth(x));
    this.selectedMonth = new Date().getMonth();
    const year = new Date().getFullYear();
    this.years = [year - 2, year - 1, year];
    this.selectedYear = year;
    this.getTransactions();
  }

  private getTransactions(): void {
    this.transSvc.getTransactions(null, this.selectedYear, this.selectedMonth).subscribe(
      (data: TransactionInfo) => {
        this.transactions = data.result;
      }
    );
  }

}
