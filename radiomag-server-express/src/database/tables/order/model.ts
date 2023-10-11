import type { Orders } from "../../../../../dto/Order";
import type { OrderTableRow } from "./type";
import type { OrderFormTableRow } from "../orderForm/type";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };
import { GETALLBYUSERSELECTPARAMS } from "./constants";

export class Order {
  #table;
  #tableOrderForm;

  constructor(connection: Knex) {
    this.#table = connection<OrderTableRow>(names.order);
    this.#tableOrderForm = connection<OrderFormTableRow>(names.orderForm);
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

  private async concatFormsWithOrders(orders: Orders) {
    const ids = orders.map((value) => {
      return value.formId;
    });
    const formData = await this.#tableOrderForm.select().whereIn("id", ids);
    const ordersData = orders.map((orderRow) => {
      const form = formData.find((formRow) => {
        return formRow.id === orderRow.formId;
      });
      return {
        ...orderRow,
        form,
      };
    });
    return ordersData;
  }

  async getAllByUser(id: string) {
    return await this.#table
      .select(...GETALLBYUSERSELECTPARAMS)
      .innerJoin("cart", "order.cartId", "=", "cart.id")
      .where<Orders>("userId", id)
      .then((orders) => {
        return this.concatFormsWithOrders(orders);
      })
      .catch(() => {
        return [];
      });
  }
}
