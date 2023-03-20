import { Knex } from "knex";

export class Slider {
  #connection: Knex;

  constructor(connection: Knex) {
    this.#connection = connection;
  }

  all() {
    return this.#connection("slider").select();
  }
}
