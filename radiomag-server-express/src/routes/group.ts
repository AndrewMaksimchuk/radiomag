import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { getGroupInfo } from "../services/getGroupData.js";
import { OriginGroups } from "../database/tables/originGroups/model.js";
import { redisClient } from "../services/redis.js";

export const routerGroup = Router();

routerGroup.get(endpoints.group, async (req, res) => {
  const originGroupsModel = new OriginGroups(req.dbConnection);

  const { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const dbResponse = await originGroupsModel.getOne(id);
  if (dbResponse.id) {
    await redisClient.set(req.url, JSON.stringify(dbResponse.data));
    return res.json(dbResponse.data);
  }

  const data = await getGroupInfo(id);
  await redisClient.set(req.url, JSON.stringify(data));
  originGroupsModel.setOne({ id: Number(id), data });
  return res.json(data);
});
