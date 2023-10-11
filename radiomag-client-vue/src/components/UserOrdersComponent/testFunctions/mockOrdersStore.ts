import { vi } from "vitest";

export const ordersStore = {
  orders: [
    {
      id: "0",
      created: "12-09-2023",
      cartId: 1,
      formId: 1,
      status: "orders.window.orders.tableBody.status.waitingForPayment",
      manager: "Vasya Pupkin",
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
