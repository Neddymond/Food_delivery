import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', function (table: any) {
    table.inrements('id');
    table.string('user_id');
    table.boolean('completed');
    table.boolean('cancelled');
    table.boolean('kitchen_cancelled');
    table.boolean('kitchen_accepted');
    table.boolean('kitchen_dispatched');
    table.timestamp('kitchen_dispatched_time');
    table.timestamp('kitchen_verified_time');
    table.timestamp('kitchen_completed_time');
    table.timestamp('rider_started_time');
    table.timestamp('rider_arrived_time');
    table.timestamp('completed_time');
    table.timestamp('scheduled_delivery_date');
    table.timestamp('scheduled_delivery_time');
    table.string('rider_id');
    table.boolean('kitchen_prepared');
    table.boolean('rider_assigned');
    table.boolean('paid');
    table.boolean('shop_accepted');
    table.boolean('shop_prepared');
    table.boolean('rider_started');
    table.boolean('rider_arrived');
    table.boolean('is_failed_trip');
    table.boolean('is_hidden');
    table.boolean('scheduled');
    table.string('order_code');
    table.string('order_change');
    table.string('no_of_mealbags_delivered');
    table.string('no_of_drinks_delivered');
    table.string('calculated_order_id');
    table.string('box_number');
    table.string('shelf_id');
    table.string('confirmed_by_id');
    table.string('cmpleted_by_id');
    table.jsonb('failed_trip_details');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders');
}
