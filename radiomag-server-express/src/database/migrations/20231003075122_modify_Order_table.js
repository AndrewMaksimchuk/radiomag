import names from "../tables/names.json" assert { type: "json" };

const COLUMNNAMES = {
  status: "status",
  manager: "manager",
  closed: "closed",
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.table(names.order, (table) => {
    table.string(COLUMNNAMES.status);
    table.string(COLUMNNAMES.manager);
    table.string(COLUMNNAMES.closed);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.table(names.order, (table) => {
    table.dropColumn(COLUMNNAMES.status);
    table.dropColumn(COLUMNNAMES.manager);
    table.dropColumn(COLUMNNAMES.closed);
  });
};
