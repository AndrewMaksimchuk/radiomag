import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { getGroupInfo } from "../services/getGroupData.js";
import { cache } from "../services/cache.js";
import { OriginGroups } from "../database/tables/originGroups/model.js";

export const routerGroup = Router();

routerGroup.get(endpoints.group, async (req, res) => {
  const originGroupsModel = new OriginGroups(req.dbConnection);

  const { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (cache[id]) return res.json(cache[id]);

  const dbResponse = await originGroupsModel.getOne(id);
  if (dbResponse.id) {
    cache[id] = dbResponse.data;
    return res.json(dbResponse.data);
  }

  const data = await getGroupInfo(id);
  cache[id] = data;
  originGroupsModel.setOne({ id: Number(id), data });
  return res.json(data);
});
