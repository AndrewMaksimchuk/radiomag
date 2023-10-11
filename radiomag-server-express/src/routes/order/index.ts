import { Router } from "express";
import { endpoints } from "../../../../endpoints/nodeEndpoints.js";
import { newOrder } from "./newOrder.js";
import { getOrders } from "./getOrders.js";
import { isGetOrdersRequest } from "./type.js";

export const routerOrder = Router();

routerOrder.post(endpoints.order, async (req, res, next) => {
  return isGetOrdersRequest(req)
    ? getOrders(req, res, next)
    : newOrder(req, res, next);
});
