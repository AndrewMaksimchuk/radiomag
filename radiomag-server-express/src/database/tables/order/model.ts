import type { OrderTableRow, OrdersUser } from "./type";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class Order {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<OrderTableRow>(names.order);
  }

  async add(order: Omit<OrderTableRow, "id">) {
    const returningColumns = ["id"];
    return await this.#table
      .returning(returningColumns)
      .insert<[{ id: string }]>(order);
  }

  async get(id: number) {
    return await this.#table.where("id", id).first();
  }

  async getAllByUser(id: string) {
    return await this.#table
      .select(
        "order.id",
        "order.created",
        "order.formId",
        "order.cartId",
        "cart.data"
      )
      .innerJoin("cart", "order.cartId", "=", "cart.id")
      .where<OrdersUser>("userId", id);
  }
}
