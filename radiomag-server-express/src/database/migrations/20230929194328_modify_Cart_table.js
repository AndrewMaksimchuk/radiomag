import names from "../tables/names.json" assert { type: "json" };

const COLUMNNAME = "totalCost";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.table(names.cart, (table) => {
    table.renameColumn("data", "items");
    table.string(COLUMNNAME);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.table(names.cart, (table) => {
    table.renameColumn("items", "data");
    table.dropColumn(COLUMNNAME);
  });
};
