export const ua = {
  orders: {
    notify: {
      bad: "Погана відповідь",
      unknown: "Невідома помилка",
      notProvide: "Замовлення не надаються",
    },
  },
};

export const en = {
  orders: {
    notify: {
      bad: "Bad response",
      unknown: "Unknown error",
      notProvide: "Orders not provide",
    },
  },
};

export default { ua, en };

export type OrdersStoreI18nKeys =
  `orders.notify.${keyof typeof ua.orders.notify}`;
