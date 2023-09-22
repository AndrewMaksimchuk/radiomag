import type { DefaultResponse } from "../endpoints/types";
import type { Cart } from "$/dto/Cart";
import type { UserClientData } from "./User";

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
}

type DateTime = string;
type JSONString = string;

export interface OrderResponse extends DefaultResponse {
  orderId?: string;
  newUser?: UserClientData;
}

export interface Order {
  created: DateTime;
  cart: Cart;
  form: FormData;
  user: UserClientData;
}
