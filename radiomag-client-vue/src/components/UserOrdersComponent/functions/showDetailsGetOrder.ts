import { useOrders } from "@/store/orders";

export const getOrder = (id: number) => {
  const ordersStore = useOrders();
  return ordersStore.orders.find((order) => {
    return order.id === id;
  });
};
