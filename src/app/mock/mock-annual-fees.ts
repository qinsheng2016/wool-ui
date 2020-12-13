import { AnnualFee } from '../models/annual-fee.model';

export const ANNUALFEES: AnnualFee[] = [
  {
    id: 1,
    bank: '民生银行',
    cardType: '车车白金卡',
    cardNumber: 4726,
    annualFee: 600,
    startDate: 1574697600000,
    endDate: 1608825600000,
    reductionWay: ['刷卡次数'],
    consumptionTimes: 18,
    spentTimes: 18,
  },
  {
    id: 2,
    bank: '招商银行',
    cardType: '自由人生白金卡',
    cardNumber: 8587,
    annualFee: 800,
    startDate: 1591200000000,
    endDate: 1622649600000,
    reductionWay: ['刷卡金额'],
    consumptionAmount: 90000,
    spentAmount: 30000,
  },
];
