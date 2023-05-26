/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createUser = (table) => {
  table.string("id").primary();
  table.integer("role");
  table.string("name").notNullable();
  table.string("secondName");
  table.string("phoneNumber").notNullable();
  table.string("email");
  table.string("password").notNullable();
  table.timestamps(true, true);
};
