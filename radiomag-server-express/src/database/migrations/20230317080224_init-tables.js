import names from "../tables/names.json" assert { type: "json" };
import { createCatalog } from "../tables/catalog/create.js";
import { createCatalogGroups } from "../tables/catalogGroups/create.js";
import { createContacts } from "../tables/contacts/create.js";
import { createSlider } from "../tables/slider/create.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable(names.catalog, createCatalog)
    .createTable(names.catalogGroups, createCatalogGroups)
    .createTable(names.contacts, createContacts)
    .createTable(names.slider, createSlider);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema
    .dropTable(names.catalog)
    .dropTable(names.catalogGroups)
    .dropTable(names.contacts)
    .dropTable(names.slider);
};
