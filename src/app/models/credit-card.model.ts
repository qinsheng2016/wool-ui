export class CreditCard {
  id: number;
  cardNumber: string;
  bank: string;
  type: string;
  organization: string;
  statementDay: number;
  paymentDueDay: number;
  currency: string;
  creditLimit: number;
  expiryDate?: Date;
}
