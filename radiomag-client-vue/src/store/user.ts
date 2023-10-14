import type { UserClientData } from "$/dto/User";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { v4 } from "uuid";
import { Role } from "../../../dto/Role";

const createDefaultUser = () => {
  const user: UserClientData = {
    id: v4(),
    role: Role.guest,
    name: "",
    phone: "",
    email: "",
    secondName: "",
    token: "",
    tokenRefresh: "",
  };
  return user;
};

export const useUser = defineStore("user", () => {
  const user = ref<UserClientData>(createDefaultUser());

  const localStorage = useLocalStorage<UserClientData>("user", user);

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
    if (undefined === user.value) {
      return undefined;
    }

    return (user.value[prop] = data);
  };

  const clear = () => {
    // TODO: logout from server to
    return (user.value = createDefaultUser());
  };

  return {
    user,
    set,
    get,
    updateProperty,
    localStorage,
    clear,
  };
});
