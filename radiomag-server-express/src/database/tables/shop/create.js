/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 */
export const createShop = (table) => {
  table.integer("id").notNullable().unique().primary();
  table.string("name");
  table.string("location");
  table.string("email");
  table.string("workTime");
  table.string("telephons");
  table.float("map_marker_lat", 8, 2);
  table.float("map_marker_lng", 8, 2);
};
