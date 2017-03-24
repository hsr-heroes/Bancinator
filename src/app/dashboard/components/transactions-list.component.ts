import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../models/transaction';

@Component({
  selector: 'wed-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  @Input() transactions: Transaction [];
  @Input() showDate: boolean;

  constructor() { }

  ngOnInit() {
  }

}
