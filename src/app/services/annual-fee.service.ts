import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ANNUALFEES } from '../mock/mock-annual-fees';
import { AnnualFee } from '../models/annual-fee.model';

@Injectable({
  providedIn: 'root',
})
export class AnnualFeeService {
  constructor() {}

  getAnnualFeesInfo(): Observable<AnnualFee[]> {
    return of(ANNUALFEES);
  }
}
