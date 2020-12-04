import { Component, OnInit } from '@angular/core';
import { CreditCard } from './credit-card.model';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss'],
})
export class CreditCardsComponent implements OnInit {
  creditCards: CreditCard[];

  constructor(private creditCardService: CreditCardService) {}

  ngOnInit(): void {
    this.getCreditCards();
  }

  getCreditCards(): void {
    this.creditCardService.getCreditCards().then((creditCards) => {
      this.creditCards = creditCards;
    });
  }
}
