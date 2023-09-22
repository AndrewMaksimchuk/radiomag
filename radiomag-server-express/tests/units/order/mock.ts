import type { Order, FormData } from "../../../../dto/Order";
import { Role } from "../../../../dto/Role";

export const initFormData: FormData = {
  email: "",
  unit: "shop",
  subscriptions: "creditCard",
  typeOfDelivery: "selfPickup",
  city: "",
  address: "",
  recipient: "",
  contactPerson: "",
  telFax: "",
  comment: "",
};

const cart = [{}];

export const user = {
  id: "",
  role: Role.guest,
  name: "",
  phone: "",
  email: "",
  secondName: "",
  token: "",
  tokenRefresh: "",
};

export const order: Order = {
  created: "",
  form: initFormData,
  cart,
  user,
};
