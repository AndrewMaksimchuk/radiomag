/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createCatalog = (table) => {
  table.integer("id").notNullable();
  table.text("img").notNullable();
  table.text("name").notNullable();
  table.timestamps(true, true);
};
