import type { ManagerTable } from "./type";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class Manager {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<ManagerTable>(names.manager);
  }

  async getById(id: number) {
    return await this.#table.where("id", id).first();
  }

  async getAll() {
    try {
      return await this.#table.select().where("active", "1");
    } catch (error) {
      return [];
    }
  }

  async getAllWithShop() {
    try {
      return await this.#table
        .select()
        .innerJoin("shop", "manager.shopId", "=", "shop.id");
    } catch (error) {
      return [];
    }
  }
}
