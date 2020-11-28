import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CreditCardDetailComponent } from './credit-card-detail/credit-card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'creditCards', component: CreditCardsComponent },
  { path: 'detail/:id', component: CreditCardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
