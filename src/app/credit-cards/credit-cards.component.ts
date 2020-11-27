import { Component, OnInit } from '@angular/core';
import { CreditCard } from './credit-card.model';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss'],
})
export class CreditCardsComponent implements OnInit {
  creditCard: CreditCard = {
    cardNumber: '0001',
    bank: '中国工商银行',
    type: '环球旅行卡',
    creditCardLimit: 76000,
    currency: 'CNY',
  };

  constructor() {}

  ngOnInit(): void {}
}
