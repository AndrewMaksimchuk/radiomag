import { Knex } from "knex";
import type { IOriginGroups } from "./type";
import type { Group } from "../../../../../dto/Group";

export class OriginGroups {
  #connection: Knex;

  constructor(connection: Knex) {
    this.#connection = connection;
  }

  async all() {
    try {
      const rawData = await this.#connection("originGroups").select();
      return rawData.map(({ id, data }) => {
        const datas = JSON.parse(data) as Group;
        return { id, datas };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getOne(id: number | string) {
    try {
      const rawData = await this.#connection("originGroups")
        .select("data")
        .where("id", id)
        .limit(1);
      if (rawData.length === 0) return {};
      const data = JSON.parse(rawData[0].data) as Group;
      return rawData.length ? { id, data } : {};
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  async setOne({ id, data }: IOriginGroups<Group>) {
    try {
      return await this.#connection
        .insert({ id, data: JSON.stringify(data) })
        .into("originGroups");
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
