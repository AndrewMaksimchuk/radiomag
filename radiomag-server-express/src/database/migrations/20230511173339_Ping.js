import names from "../tables/names.json" assert { type: "json" };
import { createPing } from "../tables/ping/create.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable(names.ping, createPing);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable(names.ping);
};
