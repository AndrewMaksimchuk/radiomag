import { Knex } from "knex";
import type { ContactItem } from "../../../../../dto/Contacts.js";

export class Contacts {
  #connection: Knex;

  constructor(connection: Knex) {
    this.#connection = connection;
  }

  async all() {
    const rawData = await this.#connection("contacts").select();
    return rawData.map((row) => {
      const data = JSON.parse(row.data);
      return { ...data } as ContactItem;
    });
  }
}
