export interface FormData {
  email: string;
  unit: "shop" | "manager";
  subscriptions: "creditCard" | "cashlessWithoutVAT" | "cashlessWithVAT";
  typeOfDelivery: "selfPickup" | "urkPost" | "nodePost";
  city: string;
  address: string;
  recipient: string;
  contactPerson: string;
  telFax: string;
  comment: string;
}

export interface OrderResponse {
  ok: boolean;
}
