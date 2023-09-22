import { Router } from "express";
import { endpoints } from "../../../../endpoints/nodeEndpoints.js";
import { newOrder } from "./newOrder.js";

export const routerOrder = Router();

routerOrder.post(endpoints.order, newOrder);
