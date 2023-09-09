import type { Ref } from "vue";
import type { CookieSetOptions } from "universal-cookie";
import type { UserClientData } from "../../../dto/User";
import { ref } from "vue";
import { v4 } from "uuid";
import { useCookies } from "@vueuse/integrations/useCookies";
import { Role } from "../../../dto/Role";

const userCookiesName = "user";
const userCookiesSetOptions: CookieSetOptions = {
  sameSite: "strict",
  maxAge: 60 * 60 * 24,
  secure: true,
};
const userCookies = useCookies([userCookiesName]);

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
  userCookies.set(userCookiesName, user, userCookiesSetOptions);
  return user;
};

const isUserIn = () => {
  return Boolean(userCookies.get(userCookiesName)?.id);
};

const createUser = () => {
  return isUserIn()
    ? userCookies.get<UserClientData>(userCookiesName)
    : createDefaultUser();
};

const user = ref<UserClientData>(createUser());

export const useUser = () => {
  return user;
};

export const userUpdate = (newData: Ref<Partial<UserClientData>>) => {
  return (user.value = { ...user.value, ...newData.value });
};

export const userReset = () => {
  return (user.value = createDefaultUser());
};
