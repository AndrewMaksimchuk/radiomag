import type { FormData } from "../../../../../dto/Order";
import type { OrderFormTableRow } from "./type";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class OrderForm {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<OrderFormTableRow>(names.orderForm);
  }

  async add(formData: FormData) {
    const returningColumns = ["id"];
    return await this.#table.returning(returningColumns).insert(formData);
  }

  async get(id: number) {
    return await this.#table.where("id", id).first();
  }

  async getAllByTel(tel: string) {
    return await this.#table.where("telFax", tel);
  }
}
