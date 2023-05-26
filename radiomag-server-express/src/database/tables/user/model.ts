import type { User as IUser } from "../../../../../dto/User";
import { randomUUID, scryptSync } from "node:crypto";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };

export class User {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<IUser>(names.user);
  }

  all() {
    return this.#table.select();
  }

  async set(user: Omit<IUser, "id">) {
    try {
      const id = randomUUID();
      const password = scryptSync(user.password, "salt", 32).toString("hex");
      return await this.#table.insert({ ...user, id, password });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async get(phoneNumber: number) {
    const columns = [
      "id",
      "role",
      "name",
      "secondName",
      "phoneNumber",
      "email",
    ] as const;
    return await this.#table
      .first<Omit<IUser, "password">>(columns)
      .where("phoneNumber", phoneNumber);
  }
}
