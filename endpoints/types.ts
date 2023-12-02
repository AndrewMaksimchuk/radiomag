import { Endpoints } from "./nodeEndpoints";
import type { UserRegistration, UserClientData } from "../dto/User";
import type {
  OrderRequestBody,
  OrderResponse,
  OrdersRequestBody,
  OrdersResponse,
} from "../dto/Order";
import type { Shops } from "$/dto/Shop";
import type { Managers } from "$/dto/Manager";

type APIDefinition<
  url extends keyof Endpoints,
  method extends "get" | "post",
  request,
  response
> = {
  url: Endpoints[url];
  method: method;
  request: request;
  response: response;
};

export interface DefaultResponse {
  ok: boolean;
  message?: string;
}

export type APILogin = APIDefinition<
  "login",
  "post",
  UserRegistration,
  UserClientData | DefaultResponse
>;
export type APIOrder = APIDefinition<
  "order",
  "post",
  OrderRequestBody | OrdersRequestBody,
  OrderResponse | OrdersResponse
>;
export type APIShop = APIDefinition<"shop", "get", undefined, Shops>;
export type APIManager = APIDefinition<"manager", "get", undefined, Managers>;
