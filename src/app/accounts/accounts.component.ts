import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsArray } from '../test/testvars';
import { Account } from '../interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountsService } from '../services';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  accounts: Account[] = AccountsArray;

  constructor(private router: Router, private modalService: NgbModal, private accountsService: AccountsService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountsService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  viewAccount(id: number) {
    this.router.navigate(['/transaction']);
  }

  addAccount() {
    this.router.navigate(['/newaccount']);
  }

}
