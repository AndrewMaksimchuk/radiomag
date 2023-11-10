/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createOrder = (table) => {
  table.integer("id").primary();
  table.text("created");
  table.timestamps(true, true);
  table.integer("cartId").notNullable();
  table.integer("formId").notNullable();
  table.text("userId").notNullable();
  table.text("status").notNullable();
  table.text("manager").notNullable();
  table.text("closed").notNullable();
  table.foreign("cartId").references("id").inTable("cart");
  table.foreign("formId").references("id").inTable("orderForm");
  table.foreign("userId").references("id").inTable("user");
};
