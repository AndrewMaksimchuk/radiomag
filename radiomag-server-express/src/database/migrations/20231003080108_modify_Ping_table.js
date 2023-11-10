import names from "../tables/names.json" assert { type: "json" };

const COLUMNNAME = "userRole";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.table(names.ping, (table) => {
    table.integer(COLUMNNAME);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.table(names.ping, (table) => {
    table.dropColumn(COLUMNNAME);
  });
};
