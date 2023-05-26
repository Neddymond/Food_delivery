import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'order_total_amount_history',
    function (table: any) {
      table.increments('id');
      table.jsonb('order_total_amount');
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders');
}
