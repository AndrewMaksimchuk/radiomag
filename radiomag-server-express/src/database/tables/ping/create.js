/**
 * @param { import("knex").Knex.CreateTableBuilder } table
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
  table.integer("userRole");
  table.timestamps(true, true);
};
