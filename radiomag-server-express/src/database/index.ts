import type { Knex } from "knex";
import knex from "knex";

export let connection: Knex | undefined = undefined;

export const getConnection = (config: Knex.Config) => {
  return !connection ? (connection = knex(config)) : connection;
};
