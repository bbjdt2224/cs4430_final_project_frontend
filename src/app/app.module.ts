import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService, AccountsService } from './services';
import { LoginComponent } from './login/login.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransationsComponent } from './transations/transations.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { NewtransactionComponent } from './newtransaction/newtransaction.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountsComponent,
    TransationsComponent,
    NewAccountComponent,
    NewtransactionComponent,
    NewUserComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
