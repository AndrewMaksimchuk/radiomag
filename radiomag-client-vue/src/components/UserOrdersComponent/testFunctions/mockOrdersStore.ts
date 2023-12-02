import { vi } from "vitest";

export const ordersStore = {
  orders: [
    {
      id: "0",
      created: "12-09-2023",
      cartId: 1,
      formId: 1,
      status: "orders.window.orders.tableBody.status.waitingForPayment",
      manager: {
        id: 0,
        active: 1,
        shopId: 1,
        firstName: "Vasay",
        lastName: "Pupkin",
        phone: "+380662348584",
        email: "pupkin@radiomag.com.ua",
        messenger_telegram: "https://t.me/VasayPupkin",
      },
      closed: null,
      items: "",
      totalCost: "223.50",
      form: {
        id: 1,
        email: "",
        contactPerson: "",
        telFax: "",
        unit: "shop",
        subscriptions: "creditCard",
        typeOfDelivery: "selfPickup",
        city: "",
        address: "",
        recipient: "",
        comment: "",
      },
    },
  ],
  isLoading: false,
  getOrders: vi.fn(),
};
