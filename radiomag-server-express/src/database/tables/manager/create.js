/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createManager = (table) => {
  table.integer("id").primary();
  table.boolean("active").notNullable();
  table.integer("shopId").notNullable();
  table.string("firstName").notNullable();
  table.string("lastName").notNullable();
  table.string("phone").notNullable();
  table.string("email").notNullable();
  table.string("messenger_telegram").notNullable();
  table.foreign("shopId").references("id").inTable("shop");
};
