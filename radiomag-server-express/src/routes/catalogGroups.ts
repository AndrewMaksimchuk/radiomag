import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { catalogGroups } from "../database/tables/catalogGroups/model.js";
import { redisClient } from "../services/redis.js";

export const routerCatalogGroups = Router();

routerCatalogGroups.get(endpoints.catalogGroups, async (req, res) => {
  const CatalogGroupsModel = new catalogGroups(req.dbConnection);

  const data = await CatalogGroupsModel.getByColumnName("key", req.params.id);

  if (data.length) {
    await redisClient.set(req.url, JSON.stringify(data));
  }

  return res.json(data);
});
