import type { IBulletin } from "./types";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class Bulletin {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<IBulletin>(names.bulletin);
  }

  all() {
    return this.#table.select("id", "email").where("is_deleted", 0);
  }

  async insert(email: string) {
    try {
      return await this.#table.insert({
        email,
      });
    } catch {
      return [];
    }
  }

  async del(id: number) {
    return await this.#table.where("id", id).update({
      is_deleted: 1,
    });
  }
}
