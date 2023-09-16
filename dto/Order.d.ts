import type { Cart } from "$/radiomag-client-vue/src/store/cart";

export interface FormData {
  /* Require */ email: string;
  unit: "shop" | "manager";
  subscriptions: "creditCard" | "cashlessWithoutVAT" | "cashlessWithVAT";
  typeOfDelivery: "selfPickup" | "urkPost" | "nodePost";
  city: string;
  address: string;
  recipient: string;
  /* Require */ contactPerson: string;
  /* Require */ telFax: string;
  comment: string;
}

export interface OrderResponse {
  ok: boolean;
}

export interface Order extends FormData {
  cart: Cart;
}
