import { Component, OnInit } from '@angular/core';
import {Transaction} from '../models/transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private payStatus: Boolean;
  private newTransaction: Transaction;

  constructor() { }

  ngOnInit() {
    this.payStatus = false;
    this.newTransaction = new Transaction();
  }

  private pay(event: UIEvent): void {
    this.payStatus = true;
  }

  private startOver(event: UIEvent): void {
    this.payStatus = false;
    this.newTransaction = new Transaction();
  }
}
