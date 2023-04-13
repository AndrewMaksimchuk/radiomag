import type { Request, Response, NextFunction } from "express";
import redis from "redis";

export let redisClient: ReturnType<typeof redis.createClient>;

export const redisInit = async () => {
  redisClient = redis.createClient();
  redisClient.on("error", (error: Error) => console.error(error));
  await redisClient.connect();
};

export const cacheData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await redisClient.get(req.url);
  data ? res.json(JSON.parse(data)) : next();
};
