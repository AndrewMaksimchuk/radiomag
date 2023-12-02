import process from "node:process";
import Express from "express";
import { router } from "./routes/index.js";
import { useDbConnection, getConnection } from "./database/index.js";
import { redisInit, useCache, redisQuit } from "./services/redis.js";
import { useLogger } from "./services/logger/index.js";

const DEFAULT_PORT = 3000;

const beforeExitHandler = () => {
  redisQuit();
  getConnection().destroy();
};

const main = async () => {
  await redisInit();

  Express()
    .use(Express.json())
    .use(Express.urlencoded({ extended: false }))
    .use(useDbConnection)
    .use(useLogger)
    .use(useCache)
    .use(router)
    .listen(process.env.PORT ?? DEFAULT_PORT);

  process.on("beforeExit", beforeExitHandler);
};

main();
