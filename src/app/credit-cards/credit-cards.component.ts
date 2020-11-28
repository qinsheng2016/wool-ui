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

  /* 同步方法
  getCreditCards(): void {
    this.creditCards = this.creditCardService.getCreditCards();
  } */

  /* 异步方法 */
  getCreditCards(): void {
    this.creditCardService.getCreditCards().subscribe((creditCards) => {
      this.creditCards = creditCards;
    });
  }
}
