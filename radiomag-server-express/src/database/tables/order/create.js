/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createOrder = (table) => {
  table.integer("id").primary();
  table.text("created");
  table.timestamps(true, true);
  table.foreign("cartId").references("id").inTable("cart");
  table.foreign("formId").references("id").inTable("orderForm");
  table.foreign("userId").references("id").inTable("user");
};
