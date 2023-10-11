import type { PingModel } from "./type";
import type { PingPayload } from "../../../../../dto/Ping";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class Ping {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<PingModel>(names.ping);
  }

  async set(data: PingPayload) {
    try {
      if (data.payload) {
        return await this.#table.insert({
          ...data,
          payload: JSON.stringify(data.payload),
        });
      }
      return await this.#table.insert(data);
    } catch (error) {
      return [];
    }
  }
}
