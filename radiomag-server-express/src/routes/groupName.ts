import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { catalogGroups } from "../database/tables/catalogGroups/model.js";
import { redisSetWithEx } from "../services/redis.js";

export const routerGroupName = Router();

routerGroupName.get(endpoints.groupName, async (req, res) => {
  const CatalogGroupsModel = new catalogGroups(req.dbConnection);

  const data = await CatalogGroupsModel.getName(req.params.id);

  if (!data.length) {
    return res.json({ error: "Group with that id not exist!" });
  }

  const [row] = data;
  await redisSetWithEx(req.url, JSON.stringify(row.name));
  return res.json(row.name);
});
