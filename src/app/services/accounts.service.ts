import { Injectable, transition } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Account, Transaction } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('/api/accounts/1');
  }

  getAccount(accountid: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('/api/account/' + accountid);
  }

  createAccount(account: Account): Observable<any> {
    return this.http.post('/api/account', {
      'nickname': account.nickname,
      'type': account.type,
      'bankRefrence': account.bankRefrence
    }, httpOptions);
  }

  createTransaction(transaction: Transaction) {
    return this.http.post('/api/transaction', {
      'amount': transaction.amount,
      'vendor': transaction.vendor,
      'date': transaction.date
    }, httpOptions);
  }

}
