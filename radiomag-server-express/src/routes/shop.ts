import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Shop } from "../database/tables/shop/model.js";
import { redisSetWithEx } from "../services/redis.js";

export const routerShop = Router();

routerShop.get(endpoints.shop, async (req, res) => {
  const shopModel = new Shop(req.dbConnection);
  const data = await shopModel.all();

  if (data.length) {
    await redisSetWithEx(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
