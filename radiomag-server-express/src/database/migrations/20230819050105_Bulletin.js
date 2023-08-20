import names from "../tables/names.json" assert { type: "json" };
import { createBulletin } from "../tables/bulletin/create.js";

/**
 * @param { import("knex").Knex } knex
 */
export const up = function (knex) {
  return knex.schema.createTable(names.bulletin, createBulletin);
};

/**
 * @param { import("knex").Knex } knex
 */
export const down = function (knex) {
  return knex.schema.dropTable(names.bulletin);
};
