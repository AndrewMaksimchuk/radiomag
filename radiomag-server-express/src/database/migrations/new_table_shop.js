import names from "../tables/names.json" assert { type: "json" };
import { createShop } from "../tables/shop/create.js";
import { createManager } from "../tables/manager/create.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable(names.shop, createShop)
    .createTable(names.manager, createManager);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable(names.shop).dropTable(names.manager);
};
