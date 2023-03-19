/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createCatalogGroups = (table) => {
  table.integer("key").notNullable();
  table.integer("id").notNullable();
  table.text("name").notNullable();
  table.text("img").notNullable();
  table.timestamps(true, true);
};
