import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Catalog } from "../database/tables/catalog/model.js";
import { redisSetWithEx } from "../services/redis.js";

export const routerCatalog = Router();

routerCatalog.get(endpoints.catalog, async (req, res) => {
  const sliderModel = new Catalog(req.dbConnection);
  const data = await sliderModel.all();

  if (data.length) {
    await redisSetWithEx(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
