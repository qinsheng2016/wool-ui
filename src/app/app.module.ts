import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PosComponent } from './pos/pos.component';
import { PosDetailComponent } from './pos-detail/pos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardsComponent,
    CreditCardDetailComponent,
    DashboardComponent,
    PosComponent,
    PosDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
