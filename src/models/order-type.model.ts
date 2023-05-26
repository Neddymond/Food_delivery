import { BaseModel } from './base.model';

export class OrderTypeModel extends BaseModel {
  static tableName = 'order_type';
  name: string;
  created_at: string;
  updated_at: string;
}
