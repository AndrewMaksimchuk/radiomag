/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createBulletin = (table) => {
  table.increments("id").primary();
  table.text("email").notNullable();
  table.integer("is_deleted").defaultTo(0);
  table.timestamps(true, true);
};
