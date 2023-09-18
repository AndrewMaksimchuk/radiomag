/* eslint-disable */

import type { Knex } from "knex";
import type { Endpoints } from "../endpoints/nodeEndpoints";
import type { Order } from "../dto/Order";
import type { PingPayload } from "../dto/Ping";
import type { Bulletin } from "../dto/Bulletin";
import type { UserRegistration, UserClientData } from "../dto/User";
import type { DefaultResponse } from "../endpoints/types";

declare global {
  namespace Express {
    interface Request {
      dbConnection: Knex;
    }
  }
}

// Extends Router by set url and corresponding types for res, req body
declare module "express-serve-static-core" {
  interface IRouterMatcher {
    <
      Route extends Endpoints["order"],
      P = RouteParameters<Route>,
      ResBody = DefaultResponse,
      ReqBody = Order,
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
  }
}
