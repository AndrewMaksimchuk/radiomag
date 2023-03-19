/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createContacts = (table) => {
  table.increments("id").primary();
  table.json("data").notNullable();
  table.timestamps(true, true);
};
