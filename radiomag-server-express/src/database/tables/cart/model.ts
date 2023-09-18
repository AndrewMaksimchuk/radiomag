import type { CartTableRow } from "./type";
import type { Cart } from "../../../../../dto/Cart";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class OrderForm {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<CartTableRow>(names.cart);
  }

  async add(cart: Cart) {
    const returningColumns = ["id"];
    return await this.#table
      .returning(returningColumns)
      .insert({ data: JSON.stringify(cart) });
  }

  async get(id: number): Promise<Cart | undefined> {
    const cart = await this.#table.where("id", id).first();
    return cart ? JSON.parse(cart.data) : undefined;
  }
}
