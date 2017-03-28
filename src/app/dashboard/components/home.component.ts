import { Component, OnInit } from '@angular/core';
import {Transaction} from '../models/transaction';
import {AccountService} from '../services/account.service';
import {BankAccount} from '../models/bankaccount';
import {TransactionService} from '../services/transaction.service';
import {TransactionInfo} from '../models/transaction-info';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private submitted: Boolean;
  private newTransaction: Transaction;
  private transactions: Transaction [];
  private account: BankAccount;
  private target: string;
  private amount: number;
  private toAccount: BankAccount;

  constructor(private accSvc: AccountService, private transSvc: TransactionService) { }

  ngOnInit() {
    this.submitted = false;
    this.myAccount();
    this.getTransactions();
  }

  private startOver(): void {
    this.target = null;
    this.amount = null;
    this.toAccount = null;
    this.submitted = false;
    this.newTransaction = null;
  }

  private myAccount(): void {
    this.accSvc.getAccount().subscribe(
      (data: BankAccount) => {
        this.account = data;
      }
    );
  }

  private getAccount(): void {
    if (this.target && this.target !== '' && this.target !== this.account.accountNr) {
      this.accSvc.getAccount(this.target).subscribe(
        (data: BankAccount) => {
          this.toAccount = data;
        }
      );
    } else {
      this.toAccount = null;
    }
  }

  private addTransaction(f: NgForm): boolean {
    if (f.valid && this.toAccount && this.toAccount.accountNr === this.target && this.target !== this.account.accountNr) {
      this.transSvc.addTransaction(f.value.to, f.value.amount).subscribe(
        (data: Transaction) => {
          this.newTransaction = data;
          this.submitted = true;
          this.getTransactions();
        }
      );
    }
    return false;
  }

  private getTransactions(): void {
    this.transSvc.getTransactions(3).subscribe(
      (data: TransactionInfo) => {
        this.transactions = data.result;
      }
    );
  }
}
