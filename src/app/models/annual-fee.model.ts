export class AnnualFee {
  id: number;
  bank: string;
  cardType: string;
  cardNumber: number;
  annualFee: number;
  startDate: number;
  endDate: number;
  reductionWay: any;
  // hasMetExemptionCondition: boolean;
  consumptionAmount?: number;
  consumptionTimes?: number;
  spentAmount?: number;
  spentTimes?: number;
  progressType?: string;
}
