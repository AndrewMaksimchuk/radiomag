/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createOriginGroups = (table) => {
  table.integer("id").notNullable().unique().primary();
  table.json("data").notNullable();
  table.timestamps(true, true);
};
