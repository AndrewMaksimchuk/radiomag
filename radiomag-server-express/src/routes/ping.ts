import { Router } from "express";
import { endpoints } from "../../../endpoints/nodeEndpoints.js";
import { Ping } from "../database/tables/ping/model.js";

export const routerPing = Router();

routerPing.post(endpoints.ping, (req, res) => {
  const PingModel = new Ping(req.dbConnection);
  const pingData = req.body;
  PingModel.set(pingData);
  return res.end();
});
