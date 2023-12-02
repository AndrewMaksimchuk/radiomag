import names from "../tables/names.json" assert { type: "json" };

const COLUMNNAMES = {
  manager: "manager",
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.table(names.order, (table) => {
    table.dropColumn(COLUMNNAMES.manager);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.table(names.order, (table) => {
    table.string(COLUMNNAMES.manager);
  });
};
