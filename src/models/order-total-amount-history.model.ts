import { BaseModel } from './base.model';

export class OrderTotalAmountHistoryModel extends BaseModel {
  static tableName = 'order_total_amount_history';
  order_total_amount: {
    time: string;
    total_amount: number;
  }[];
}
