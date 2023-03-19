import { Knex } from "knex";

export class Catalog {
  #connection: Knex;

  constructor(connection: Knex) {
    this.#connection = connection;
  }

  all() {
    return this.#connection("catalog").select();
  }
}
