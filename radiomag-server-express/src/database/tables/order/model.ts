import type { Orders } from "../../../../../dto/Order";
import type { OrderTableRow } from "./type";
import type { OrderForm } from "../orderForm/model";
import type { Manager } from "../manager/model";
import names from "../names.json" assert { type: "json" };
import { Knex } from "knex";
import { GETALLBYUSERSELECTPARAMS } from "./constants";
import { getOrdersIds } from "./functions/getOrdersIds";
import { getOrdersData } from "./functions/getOrdersData";

export class Order {
  #table;
  #tableOrderForm;
  #tableManager;

  constructor(
    connection: Knex,
    OrderFormModel?: OrderForm,
    ManagerModel?: Manager
  ) {
    this.#table = connection<OrderTableRow>(names.order);
    this.#tableOrderForm = OrderFormModel;
    this.#tableManager = ManagerModel;
  }

  async add(order: Omit<OrderTableRow, "id">) {
    return await this.#table.returning(["id"]).insert<[{ id: string }]>(order);
  }

  async get(id: number) {
    return await this.#table.where("id", id).first();
  }

  private async concatFormsWithOrders(orders: Orders) {
    if (!this.#tableOrderForm || !this.#tableManager) {
      return [];
    }
    const ids = getOrdersIds(orders);
    const [formData, managers] = await Promise.all([
      this.#tableOrderForm.getByIds(ids),
      this.#tableManager.getAll(),
    ]);
    return getOrdersData(orders, formData, managers);
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
