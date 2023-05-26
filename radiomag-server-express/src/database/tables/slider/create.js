/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * @returns { Promise<void> }
 */
export const createSlider = (table) => {
  table.increments("id").primary();
  table.text("imgsrc").notNullable();
  table.text("title").notNullable();
  table.text("description").notNullable();
  table.timestamps(true, true);
};
