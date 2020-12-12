import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CreditCardService } from '../../../services/credit-card.service';
import { CreditCard } from '../../../models/credit-card.model';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.component.html',
  styleUrls: ['./credit-card-detail.component.scss'],
})
export class CreditCardDetailComponent implements OnInit {
  creditCard: CreditCard;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.getCreditCard();
  }

  getCreditCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.creditCardService
      .getCreditCard(id)
      .subscribe((creditCard) => (this.creditCard = creditCard));
  }

  goBack(): void {
    this.location.back();
  }
}
