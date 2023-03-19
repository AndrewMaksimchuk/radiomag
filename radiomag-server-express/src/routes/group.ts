import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { getGroupInfo } from "../services/getGroupData.js";
import { cache } from "../services/cache.js";

export const routerGroup = Router();

routerGroup.get(endpoints.group, async (req, res) => {
  const { id } = req.params;
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (cache[id]) {
    console.log("Data from cache!");
    const fromCache = cache[id];
    return res.json(fromCache);
  }

  const data = await getGroupInfo(id);
  cache[id] = data;
  console.log("Data from request!");
  return res.json(data);
});
