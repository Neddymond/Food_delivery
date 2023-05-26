import { BaseModel } from './base.model';

export class OrderModel extends BaseModel {
  static tableName = 'orders';
  user_id: string;
  completed: boolean;
  cancelled: boolean;
  kitchen_cancelled: boolean;
  kitchen_accepted: boolean;
  kitchen_dispatched: boolean;
  kitchen_dispatched_time: string;
  kitchen_verified_time: string;
  kitchen_completed_time: string;
  rider_started_time: string;
  rider_arrived_time: string;
  completed_time: string;
  scheduled_delivery_date: string;
  scheduled_delivery_time: string;
  rider_id: string;
  kitchen_prepared: boolean;
  rider_assigned: boolean;
  paid: boolean;
  shop_accepted: boolean;
  shop_prepared: boolean;
  rider_started: boolean;
  rider_arrived: boolean;
  is_failed_trip: boolean;
  is_hidden: boolean;
  scheduled: boolean;
  order_code: string;
  order_change: string;
  no_of_mealbags_delivered: string;
  no_of_drinks_delivered: string;
  calculated_order_id: string;
  box_number: string;
  shelf_id: string;
  confirmed_by_id: string;
  cmpleted_by_id: string;
  failed_trip_details: string;
  created_at: string;
  updated_at: string;
}

export const getAllOrders = async () => {
  const knex = OrderModel.knex();
  return knex.raw(`
    SELECT * FROM orders
    INNER JOIN logs ON true
    INNER JOIN calculated_orders ON true
    INNER JOIN order_total_amount_history ON true
    INNER JOIN order_type ON true
  `);
};
