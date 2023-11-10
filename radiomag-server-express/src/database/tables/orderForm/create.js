/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createOrderForm = (table) => {
  table.integer("id").primary();
  table.timestamps(true, true);
  table.string("email").notNullable();
  table.string("contactPerson").notNullable();
  table.string("telFax").notNullable();
  table.string("unit");
  table.string("subscriptions");
  table.string("typeOfDelivery");
  table.string("city");
  table.string("address");
  table.string("recipient");
  table.string("comment");
};
