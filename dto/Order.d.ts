import type { DefaultResponse } from "../endpoints/types";
import type { Cart } from "$/dto/Cart";
import type { UserClientData } from "./User";
import type { Order as OrdersTable } from "../radiomag-server-express/src/database/tables/order/type";

export interface FormData {
  /* Require */ email: string;
  /* Require */ contactPerson: string;
  /* Require */ telFax: string;
  unit: "shop" | "manager";
  subscriptions: "creditCard" | "cashlessWithoutVAT" | "cashlessWithVAT";
  typeOfDelivery: "selfPickup" | "urkPost" | "nodePost";
  city: string;
  address: string;
  recipient: string;
  comment: string;
  id?: number;
}

type DateTime = string;

export interface Order {
  created: DateTime;
  cart: Cart;
  form: FormData;
  user: UserClientData;
  status:
    | "orders.window.orders.tableBody.status.waitingForPayment"
    | "orders.window.orders.tableBody.status.atWork"
    | "orders.window.orders.tableBody.status.done";
  manager: string;
  closed: string;
}

export type OrderRequestBody = Order;

export interface OrderResponse extends DefaultResponse {
  orderId?: string;
  newUser?: UserClientData;
}

export interface OrdersRequestBody {
  userId: string;
}

export type Orders = OrdersTable[];

export interface OrdersResponse extends DefaultResponse {
  orders?: Orders;
}
