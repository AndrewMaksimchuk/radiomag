import { join } from "node:path";

export const DEFAULT_DB_NAME = "db.sqlite";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: join("..", process.env.DB_NAME ?? DEFAULT_DB_NAME),
      flags: ["OPEN_CREATE"],
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
  production: {},
};
