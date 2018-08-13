import { Component, OnInit } from '@angular/core';
import { Transaction } from '../interfaces';
import { TransactionArray } from '../test/testvars';
import { Router } from '@angular/router';
import { AccountsService } from '../services';

@Component({
  selector: 'app-transations',
  templateUrl: './transations.component.html',
  styleUrls: ['./transations.component.css']
})
export class TransationsComponent implements OnInit {

  transactions: Transaction[] = TransactionArray;

  constructor(private router: Router, private accountService: AccountsService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.accountService.getAccount(1).subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  newTransaction() {
    this.router.navigate(['/newtransaction']);
  }

}
