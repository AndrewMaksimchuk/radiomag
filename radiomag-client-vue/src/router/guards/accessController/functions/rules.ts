import type { RouteLocationNormalized } from "vue-router";
import { useUser } from "@/store/user";
import { isEmptyName } from "./isEmptyName";
import { isProtected } from "./isProtected";
import { isGuest } from "./isGuest";

export const getRules = (to: RouteLocationNormalized) => {
  const userStore = useUser();
  const rules = [
    () => {
      return isEmptyName(to.name);
    },
    () => {
      return isProtected(to.name) && isGuest(userStore.user.role);
    },
  ];
  return rules;
};
