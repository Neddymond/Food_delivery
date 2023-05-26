import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('logs', function (table: any) {
    table.increments('id');
    table.jsonb('activity_log');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('logs');
}
