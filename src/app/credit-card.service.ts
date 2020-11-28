import { Injectable } from '@angular/core';
import { CreditCard } from './credit-cards/credit-card.model';
import { CREDITCARDS } from './credit-cards/mock-credit-cards';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor() {}

  /* 同步获取数据
  getCreditCards(): CreditCard[] {
    return CREDITCARDS;
  } */

  /* 模拟从服务端获取数据 */
  getCreditCards(): Observable<CreditCard[]> {
    return of(CREDITCARDS);
  }
}
