import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { CreditCardDetailComponent } from './components/credit-cards/credit-card-detail/credit-card-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PosComponent } from './components/pos/pos.component';
import { PosDetailComponent } from './components/pos/pos-detail/pos-detail.component';
import { RightsComponent } from './components/rights/rights.component';
import { RightDetailComponent } from './components/rights/right-detail/right-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardsComponent,
    CreditCardDetailComponent,
    DashboardComponent,
    PosComponent,
    PosDetailComponent,
    RightsComponent,
    RightDetailComponent,
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
