import type { RequestHandler, Request } from "express";
import type {
  OrderRequestBody,
  OrderResponse,
  OrdersRequestBody,
  OrdersResponse,
} from "../../../../dto/Order.js";

export type MethodHandlerCreateOrder = RequestHandler<
  Record<string, unknown>,
  OrderResponse,
  OrderRequestBody
>;

type RequestCreateOrder = Request<
  Record<string, never>,
  OrderResponse,
  OrderRequestBody
>;

export type MethodHandlerGetOrders = RequestHandler<
  Record<string, unknown>,
  OrdersResponse,
  OrdersRequestBody
>;

type RequestGetOrders = Request<
  Record<string, never>,
  OrdersResponse,
  OrdersRequestBody
>;

export type MethodHandlerPOST =
  | MethodHandlerCreateOrder
  | MethodHandlerGetOrders;

export const isGetOrdersRequest = (
  req: RequestCreateOrder | RequestGetOrders
): req is RequestGetOrders => {
  return "userId" in req.body;
};
