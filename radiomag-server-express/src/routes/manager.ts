import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Manager } from "../database/tables/manager/model.js";
import { redisSetWithEx } from "../services/redis.js";

export const routerManager = Router();

routerManager.get(endpoints.manager, async (req, res) => {
  const managerModel = new Manager(req.dbConnection);
  const data = await managerModel.getAll();

  if (data.length) {
    await redisSetWithEx(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
