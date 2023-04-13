import names from "../tables/names.json" assert { type: "json" };
import { createOriginGroups } from "../tables/originGroups/create.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable(names.originGroups, createOriginGroups);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable(names.originGroups);
};
