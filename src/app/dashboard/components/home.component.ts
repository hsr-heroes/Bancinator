import { Component, OnInit } from '@angular/core';
import {Transaction} from '../models/transaction';
import {AccountService} from '../services/account.service';
import {BankAccount} from '../models/bankaccount';
import {TransactionService} from '../services/transaction.service';
import {TransactionInfo} from '../models/transaction-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private payStatus: Boolean;
  private newTransaction: Transaction;
  private transactions: Transaction [];
  private account: BankAccount;
  private toAccount: BankAccount;

  constructor(private accSvc: AccountService, private transSvc: TransactionService) { }

  ngOnInit() {
    this.payStatus = false;
    this.myAccount();
    this.getTransactions(5);
    this.newTransaction = new Transaction();
  }

  private pay(event: UIEvent): void {
    this.payStatus = true;
  }

  private startOver(event: UIEvent): void {
    this.payStatus = false;
    this.newTransaction = new Transaction();
  }

  private myAccount(): void {
    this.accSvc.getAccount().subscribe(
      (data: BankAccount) => {
        this.account = data;
        this.newTransaction.from = this.account.accountNr;
      }
    );
  }

  private getAccount(id: number): void {
    this.accSvc.getAccount(id).subscribe(
      (data: BankAccount) => {
        this.toAccount = data;
      }
    );
  }

  private getTransactions(count: number): void {
    this.transSvc.getTransactions(count).subscribe(
      (data: TransactionInfo) => {
        this.transactions = data.result;
      }
    );
  }
}
