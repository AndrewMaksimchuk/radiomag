/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createCart = (table) => {
  table.integer("id").primary();
  table.timestamps(true, true);
  table.json("items").notNullable();
  table.text("totalCost").notNullable();
};
