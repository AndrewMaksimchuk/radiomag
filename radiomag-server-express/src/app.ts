import process from "node:process";
import dotenv from "dotenv";
import Express from "express";
import { router } from "./routes/index.js";
import { getConnection } from "./database/index.js";
import dbConfig from "../knexfile.js";

dotenv.config();

const dbConnection =
  process.env.NODE_ENV === "development"
    ? dbConfig.development
    : dbConfig.production;
const connection = getConnection(dbConnection);

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT ?? DEFAULT_PORT;

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  req.dbConnection = connection;
  next();
});
app.use(router);
app.listen(PORT);

process.on("beforeExit", () => connection.destroy());
