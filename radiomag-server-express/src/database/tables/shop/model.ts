import type { ShopModel } from "./type";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class Shop {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<ShopModel>(names.shop);
  }

  all() {
    return this.#table.select();
  }
}
