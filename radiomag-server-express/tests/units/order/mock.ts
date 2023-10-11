import type { Order, FormData } from "../../../../dto/Order";
import type { Cart } from "$/dto/Cart";
import type { UserClientData } from "$/dto/User";
import { Role } from "../../../../dto/Role";
import { product } from "../../mock/product";

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

const cart: Cart = {
  items: [
    {
      product,
      quantity: 10,
    },
  ],
  totalCost: "635.50",
};

export const user: UserClientData = {
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
  cart,
  form: initFormData,
  user,
  status: "orders.window.orders.tableBody.status.waitingForPayment",
  manager: "",
  closed: "",
};
