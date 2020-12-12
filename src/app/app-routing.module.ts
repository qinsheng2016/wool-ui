import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { CreditCardDetailComponent } from './components/credit-cards/credit-card-detail/credit-card-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PosComponent } from './components/pos/pos.component';
import { PosDetailComponent } from './components/pos/pos-detail/pos-detail.component';
import { RightsComponent } from './components/rights/rights.component';
import { RightDetailComponent } from './components/rights/right-detail/right-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'creditCards', component: CreditCardsComponent },
  { path: 'creditCard/detail/:id', component: CreditCardDetailComponent },
  { path: 'pos', component: PosComponent },
  { path: 'pos/detail/:id', component: PosDetailComponent },
  { path: 'rights', component: RightsComponent },
  { path: 'right/detail/:id', component: RightDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
