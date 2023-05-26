import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('calculated_orders', function (table: any) {
    table.increments('id');
    table.string('total_amount');
    table.boolean('free_delivery');
    table.string('delivery_fee');
    table.string('service_charge');
    table.jsonb('address_details');
    table.jsonb('meals');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('calculated_orders');
}
