/* eslint-disable */

import type { Knex } from "knex";
import type { Endpoints } from "../endpoints/nodeEndpoints";
import type {
  OrderRequestBody,
  OrderResponse,
  OrdersRequestBody,
  OrdersResponse,
} from "../dto/Order";
import type { PingPayload } from "../dto/Ping";
import type { Bulletin } from "../dto/Bulletin";
import type { UserRegistration, UserClientData } from "../dto/User";
import type { DefaultResponse } from "../endpoints/types";
import type { Shops } from "$/dto/Shop";
import type { Managers } from "$/dto/Manager";

declare global {
  namespace Express {
    interface Request {
      dbConnection: Knex | undefined;
    }
  }
}

// Extends Router by set url and corresponding types for res, req body
declare module "express-serve-static-core" {
  interface IRouterMatcher {
    <
      Route extends Endpoints["order"],
      P = RouteParameters<Route>,
      ResBody = OrderResponse,
      ReqBody = OrderRequestBody,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;

    <
      Route extends Endpoints["order"],
      P = RouteParameters<Route>,
      ResBody = OrdersResponse,
      ReqBody = OrdersRequestBody,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;

    <
      Route extends Endpoints["ping"],
      P = RouteParameters<Route>,
      ResBody = unknown,
      ReqBody = PingPayload,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;

    <
      Route extends Endpoints["bulletin"],
      P = Bulletin,
      ResBody = unknown,
      ReqBody = Bulletin,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;

    <
      Route extends Endpoints["login"],
      P = RouteParameters<Route>,
      ResBody = UserClientData | DefaultResponse,
      ReqBody = UserRegistration,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;

    <
      Route extends Endpoints["shop"],
      P = RouteParameters<Route>,
      ResBody = Shops,
      ReqBody = unknown,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;

    <
      Route extends Endpoints["manager"],
      P = RouteParameters<Route>,
      ResBody = Managers,
      ReqBody = unknown,
      ReqQuery = ParsedQs,
      LocalsObj extends Record<string, unknown> = Record<string, unknown>
    >(
      path: Route,
      ...handlers: Array<
        RequestHandler<P, ResBody, ReqBody, ReqQuery, LocalsObj>
      >
    ): T;
  }
}
