import names from "../tables/names.json" assert { type: "json" };
import catalog from "./data/catalog.json" assert { type: "json" };
import contacts from "./data/contacts.json" assert { type: "json" };
import slider from "./data/slider.json" assert { type: "json" };
import catalogGroups from "./data/catalogGroups.json" assert { type: "json" };
import user from "./data/user.json" assert { type: "json" };
import shop from "./data/shop.json" assert { type: "json" };
import manager from "./data/manager.json" assert { type: "json" };

const contactsData = contacts.map((obj) => {
  return { data: JSON.stringify(obj.data) };
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex(names.catalog).del();
  await knex(names.catalog).insert(catalog);

  await knex(names.catalogGroups).del();
  await knex(names.catalogGroups).insert(catalogGroups);

  await knex(names.contacts).del();
  await knex(names.contacts).insert(contactsData);

  await knex(names.slider).del();
  await knex(names.slider).insert(slider);

  await knex(names.user).del();
  await knex(names.user).insert(user);

  await knex(names.shop).del();
  await knex(names.shop).insert(shop);

  await knex(names.manager).del();
  await knex(names.manager).insert(manager);
};
