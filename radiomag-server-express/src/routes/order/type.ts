import type { RequestHandler } from "express";
import type { Order as IOrder, OrderResponse } from "../../../../dto/Order.js";

export type MethodHandler = RequestHandler<
  Record<string, unknown>,
  OrderResponse,
  IOrder
>;
