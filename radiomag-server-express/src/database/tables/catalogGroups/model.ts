import { Knex } from "knex";
import type { CatalogGroups } from "../../types.js";

export class catalogGroups {
  #connection: Knex;

  constructor(connection: Knex) {
    this.#connection = connection;
  }

  all() {
    return this.#connection("catalogGroups").select();
  }

  getByColumnName(columnName: keyof CatalogGroups, isValue: string) {
    return this.#connection("catalogGroups")
      .select()
      .where(columnName, isValue);
  }

  getName(id: string) {
    return this.#connection("catalogGroups").select("name").where("id", id);
  }
}
