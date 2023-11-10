/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createUser = (table) => {
  table.string("id").primary();
  table.integer("role");
  table.string("name").notNullable();
  table.string("secondName");
  table.string("phone").notNullable();
  table.string("email");
  table.string("password").notNullable();
  table.string("token");
  table.string("tokenRefresh");
  table.timestamps(true, true);
};
