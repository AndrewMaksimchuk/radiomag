import type { RouteLocationNormalized } from "vue-router";
import { useRules } from "./functions/useRules";

export const accessController = (to: RouteLocationNormalized) => {
  return useRules(to);
};
