/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createPing = (table) => {
  table.integer("id").notNullable().unique().primary();
  table.string("user").notNullable();
  table.integer("time").notNullable();
  table.string("action").notNullable();
  table.json("payload");
  table.string("from");
  table.string("to");
  table.string("window");
  table.string("todo");
  table.timestamps(true, true);
};
