import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PosComponent } from './pos/pos.component';
import { PosDetailComponent } from './pos-detail/pos-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'creditCards', component: CreditCardsComponent },
  { path: 'creditCard/detail/:id', component: CreditCardDetailComponent },
  { path: 'pos', component: PosComponent },
  { path: 'pos/detail/:id', component: PosDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
