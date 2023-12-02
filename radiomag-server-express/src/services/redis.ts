import type { RedisCommandArgument } from "@redis/client/dist/lib/commands";
import type { Request, Response, NextFunction } from "express";
import redis from "redis";

export let redisClient: ReturnType<typeof redis.createClient> | undefined =
  undefined;

export const redisInit = async () => {
  try {
    redisClient = redis.createClient();
    redisClient.on("error", (error: Error) => {
      process.stderr.write(JSON.stringify(error));
    });
    await redisClient.connect();
  } catch {
    return;
  }
};

export const useCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (redisClient) {
    const data = await redisClient.get(req.url);
    data ? res.json(JSON.parse(data)) : next();
  }
};

export const redisQuit = () => {
  if (redisClient) {
    redisClient.quit();
  }
};

export const redisSetWithEx = async (
  key: string,
  value: number | RedisCommandArgument
) => {
  if (redisClient) {
    await redisClient.set(key, value, {
      EX: 60 * 60 * 24,
    });
  }
};
