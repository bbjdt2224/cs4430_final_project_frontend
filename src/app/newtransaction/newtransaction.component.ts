import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../services';
import { Transaction } from '../interfaces';

@Component({
  selector: 'app-newtransaction',
  templateUrl: './newtransaction.component.html',
  styleUrls: ['./newtransaction.component.css']
})
export class NewtransactionComponent implements OnInit {

  transaction: Transaction = new Transaction();

  constructor(private router: Router, private accountService: AccountsService) { }

  ngOnInit() {
  }

  submit() {
    this.transaction.date = new Date(this.transaction.date);
    this.accountService.createTransaction(this.transaction).subscribe(transaction => this.router.navigate(['/transaction']));
  }

}
