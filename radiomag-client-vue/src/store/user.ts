import type { UserClientData } from "$/dto/User";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

export const useUser = defineStore("user", () => {
  const user = ref<UserClientData | Record<string, unknown>>({});

  const localStorage = useLocalStorage<
    UserClientData | Record<string, unknown>
  >("user", user);

  const set = (data: UserClientData) => {
    return (user.value = data);
  };

  const get = () => {
    return user;
  };

  const updateProperty = <T extends keyof UserClientData>(
    prop: T,
    data: UserClientData[T]
  ) => {
    return (user.value[prop] = data);
  };

  return {
    user,
    set,
    get,
    updateProperty,
    localStorage,
  };
});
