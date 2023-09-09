import type { User as IUser, UserRegistration } from "../../../../../dto/User";
import { Knex } from "knex";
import names from "../names.json" assert { type: "json" };
import { returningUserColumns } from "./constants.js";
import { createProperties } from "./functions/createProperties.js";

export class User {
  #table;

  constructor(connection: Knex) {
    this.#table = connection<IUser>(names.user);
  }

  all() {
    return this.#table.select();
  }

  async create(user: UserRegistration): Promise<IUser | undefined> {
    try {
      const { id, password, role, token, tokenRefresh } =
        await createProperties(user);
      const newUser = await this.#table.insert(
        { ...user, id, password, role, token, tokenRefresh },
        returningUserColumns
      );

      if (newUser[0]) {
        return newUser[0];
      }

      return undefined;
    } catch (error) {
      return undefined;
    }
  }

  async set(user: IUser): Promise<IUser | undefined> {
    try {
      const newUser = await this.#table.insert(user, returningUserColumns);

      if (newUser[0]) {
        return newUser[0];
      }

      return undefined;
    } catch (error) {
      return undefined;
    }
  }

  async get(phone: string) {
    return await this.#table
      .first<IUser | undefined>(returningUserColumns)
      .where("phone", phone);
  }
}
