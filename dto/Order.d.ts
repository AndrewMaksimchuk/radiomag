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

export interface OrderResponse {
  ok: boolean;
}

type DateTime = string; // 2023-05-10 09:31:04

export interface Order {
  created: DateTime;
  cart: Cart;
  form: FormData;
  user: UserClientData;
}
