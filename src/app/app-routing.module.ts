import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransationsComponent } from './transations/transations.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NewtransactionComponent } from './newtransaction/newtransaction.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'transaction', component: TransationsComponent},
  { path: 'newaccount', component: NewAccountComponent},
  { path: 'newtransaction', component: NewtransactionComponent},
  { path: 'signup', component: NewUserComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
