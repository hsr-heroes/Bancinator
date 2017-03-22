import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private payStatus: Boolean;

  constructor() { }

  ngOnInit() {
    this.payStatus = false;
  }

  private pay(event: UIEvent): void {
    this.payStatus = true;
  }

  private startOver(event: UIEvent): void {
    this.payStatus = false;
  }
}
