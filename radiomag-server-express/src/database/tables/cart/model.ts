import type { CartTableRow } from "./type";
import type { Cart as ICart } from "../../../../../dto/Cart";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class Cart {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<CartTableRow>(names.cart);
  }

  async add(cart: ICart) {
    const returningColumns = ["id"];
    return await this.#table
      .returning(returningColumns)
      .insert<[{ id: number }]>({
        items: JSON.stringify(cart.items),
        totalCost: cart.totalCost,
      });
  }

  async get(id: number): Promise<ICart | undefined> {
    const cart = await this.#table.where("id", id).first();
    return cart
      ? { items: JSON.parse(cart.items), totalCost: cart.totalCost }
      : undefined;
  }
}
