import type { OrderTableRow } from "./type";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class OrderForm {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<OrderTableRow>(names.order);
  }

  async add(order: Omit<OrderTableRow, "id">) {
    const returningColumns = ["id"];
    return await this.#table.returning(returningColumns).insert(order);
  }

  async get(id: number) {
    return await this.#table.where("id", id).first();
  }

  async getAllByUser(id: number) {
    return await this.#table.where("user", id);
  }
}
