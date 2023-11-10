import type { Orders } from "$/dto/Order";
import { ref } from "vue";
import { defineStore } from "pinia";
import { POST } from "@/httpClient";
import { useUser } from "@/store/user";
import { isNotOrders } from "./isNotOrders";
import { useNotification } from "./functions/useNotification";

export const useOrders = defineStore("OrdersStore", () => {
  const userStore = useUser();
  const orders = ref<Orders | []>([]);
  const isLoading = ref(false);
  const notifications = useNotification();

  const getOrders = async (force = false) => {
    try {
      if (orders.value.length && false === force) {
        return;
      }

      isLoading.value = true;

      const response = await POST.order({
        userId: userStore.user.id,
      });

      if (undefined === response) {
        return notifications.notifyError("orders.notify.bad");
      }

      if (false === response.ok) {
        return notifications.notifyError("orders.notify.unknown");
      }

      if (isNotOrders(response)) {
        return notifications.notifyError("orders.notify.unknown");
      }

      if (undefined === response.orders) {
        return notifications.notifyError("orders.notify.notProvide");
      }

      orders.value = response.orders;
    } catch {
      return notifications.notifyError("orders.notify.unknown");
    } finally {
      isLoading.value = false;
    }
  };

  return {
    orders,
    isLoading,
    getOrders,
  };
});
