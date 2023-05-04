import type { Knex } from "knex";
import type { Endpoints } from "../endpoints/nodeEndpoints";
import type { FormData } from "../dto/Order";

declare global {
  namespace Express {
    interface Request {
      dbConnection: Knex;
    }
  }
}

declare module "express-serve-static-core" {
  interface IRouterMatcher {
    <
      Route extends Endpoints["order"],
      P = RouteParameters<Route>,
      ResBody = unknown,
      ReqBody = FormData,
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
