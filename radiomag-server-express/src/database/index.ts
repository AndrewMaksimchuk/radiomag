import type { Request, Response, NextFunction } from "express";
import type { Knex } from "knex";
import knex from "knex";
import dbConfig from "@/../knexfile.js";

let connection: Knex | undefined = undefined;

const dbConnection =
  "development" === process.env.NODE_ENV
    ? dbConfig.development
    : dbConfig.production;

export const getConnection = () => {
  return !connection ? (connection = knex(dbConnection)) : connection;
};

export const useDbConnection = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  req.dbConnection = getConnection();
  next();
};
