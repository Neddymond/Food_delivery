import { Global, Module } from '@nestjs/common';
import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { OrderModel } from '../models/order.model';
import { LogModel } from '../models/logs.model';
import { OrderTotalAmountHistoryModel } from '../models/order-total-amount-history.model';
import { OrderTypeModel } from '../models/order-type.model';
import { CalculatedOrdersModel } from '../models/calculated-order.model';

const models = [
  OrderModel,
  LogModel,
  CalculatedOrdersModel,
  OrderTypeModel,
  OrderTotalAmountHistoryModel,
];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DbModule {}
