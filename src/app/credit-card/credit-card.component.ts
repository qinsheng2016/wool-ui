import { Component, OnInit } from '@angular/core';
import {CreditCard} from './credit-card.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  creditCard: CreditCard = {
    bank: '中国工商银行',
    type: '环球旅行卡',
    creditCardLimit: 76000,
    currency: 'CNY'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
