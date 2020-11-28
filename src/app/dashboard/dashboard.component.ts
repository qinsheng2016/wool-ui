import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../credit-card.service';
import { CreditCard } from '../credit-cards/credit-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  creditCards: CreditCard[] = [];

  constructor(private creditCardService: CreditCardService) {}

  ngOnInit(): void {
    this.creditCardService.getCreditCards().subscribe((creditCards) => {
      this.creditCards = creditCards.slice(1, 5);
    });
  }
}
