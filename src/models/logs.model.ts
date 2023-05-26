import { BaseModel } from './base.model';

export class LogModel extends BaseModel {
  static tableName = 'logs';
  activity_log: {
    time: string;
    description: string;
  }[];
}
