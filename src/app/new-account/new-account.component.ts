import { Component, OnInit } from '@angular/core';
import { Account } from '../interfaces';
import { AccountsService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  account: Account = new Account();

  constructor(private accountService: AccountsService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.account.bankRefrence = '8675309';
    this.accountService.createAccount(this.account).subscribe(account => this.router.navigate(['/accounts']));
  }

}
