import { Injectable } from '@angular/core';
import { CreditCard } from './credit-cards/credit-card.model';
import { CREDITCARDS } from './credit-cards/mock-credit-cards';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  creditCardsUrl = '/getCreditCardList';
  constructor(private http: HttpClient) {}

  async getCreditCards(): Promise<CreditCard[]> {
    return this.http
      .get<CreditCard[]>(this.creditCardsUrl)
      .toPromise<CreditCard[]>();
  }

  getCreditCard(id: number): Observable<CreditCard> {
    return of(CREDITCARDS.find((creditCard) => creditCard.id === id));
  }
}
