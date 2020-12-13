import { Component, OnInit } from '@angular/core';
import { AnnualFeeService } from '../../services/annual-fee.service';
import { AnnualFee } from '../../models/annual-fee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  annualFeesInfo: AnnualFee[];

  constructor(private annualFeeService: AnnualFeeService) {}

  ngOnInit(): void {
    this.annualFeeService.getAnnualFeesInfo().subscribe((annualFeesInfo) => {
      this.annualFeesInfo = annualFeesInfo;
      for (const annualFee of annualFeesInfo) {
        if (
          annualFee.spentAmount / annualFee.consumptionAmount === 1 ||
          annualFee.spentTimes / annualFee.consumptionTimes === 1
        ) {
          annualFee.progressType = 'success';
        } else if (
          annualFee.spentAmount / annualFee.consumptionAmount >= 0.8 ||
          annualFee.spentTimes / annualFee.consumptionTimes >= 0.8
        ) {
          annualFee.progressType = 'info';
        } else if (
          (annualFee.spentAmount / annualFee.consumptionAmount >= 0.5 &&
            annualFee.spentAmount / annualFee.consumptionAmount < 0.8) ||
          (annualFee.spentTimes / annualFee.consumptionTimes < 0.8 &&
            annualFee.spentTimes / annualFee.consumptionTimes >= 0.5)
        ) {
          annualFee.progressType = 'warning';
        } else if (
          annualFee.spentAmount / annualFee.consumptionAmount < 0.5 ||
          annualFee.spentTimes / annualFee.consumptionTimes < 0.5
        ) {
          annualFee.progressType = 'danger';
        }
      }
    });
  }
}
