import { BaseModel } from './base.model';

export class CalculatedOrdersModel extends BaseModel {
  static tableName = 'calculated_orders';
  total_amount: string;
  free_delivery: boolean;
  delivery_fee: string;
  service_charge: string;
  address_details: {
    city: string;
    name: string;
    address_line: string;
    building_number: string;
  };
  meals: {
    id: string;
    new: string;
    name: string;
    brand: {
      id: string;
      name: string;
    };
    active: boolean;
    addons: {
      id: string;
      amount: number;
      meal_id: string;
      meal_data: {
        id: string;
        name: string;
        active: boolean;
        amount: number;
        brand_id: string;
        item_type: string;
        created_at: string;
        updated_at: string;
      };
      meal_addon_id: string;
      internal_profit: number;
      min_selection_no: string;
      meal_addon_category_id: string;
      created_at: string;
      updated_at: string;
    }[];
    amount: string;
    images: string[];
    alcohol: false;
    item_no: string;
    summary: string;
    brand_id: string;
    calories: string;
    is_addon: false;
    is_combo: false;
    positioon: number;
    quantity: number;
    home_page: boolean;
    item_type: string;
    meal_tags: string[];
    is_deleted: boolean;
    order_note: string;
    description: string;
    minimum_age: string;
    posist_data: object;
    available_no: string;
    meal_keywords: string[];
    internal_profit: number;
    meal_category_id: string;
    created_at: string;
    updated_at: string;
  }[];
}

export const getMostBoughtMeal = async () => {
  const knex = CalculatedOrdersModel.knex();
  return knex.raw(`
    SELECT name, COUNT(*) AS quantity
    FROM (
        SELECT obj->>'name' AS name
        FROM calculated_orders, jsonb_array_elements(meals) AS obj
    ) AS subquery
    GROUP BY name
    ORDER BY quantity DESC
    LIMIT 1;
  `);
};
