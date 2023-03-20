import { Knex } from "knex";

declare global {
  namespace Express {
    interface Request {
      dbConnection: Knex;
    }
  }
}
