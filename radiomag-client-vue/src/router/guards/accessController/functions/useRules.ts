import type { RouteLocationNormalized } from "vue-router";
import { getRules } from "./rules";

export const useRules = (to: RouteLocationNormalized) => {
  const rules = getRules(to);

  for (const [, checkRule] of rules.entries()) {
    if (checkRule()) {
      return false;
    }
  }

  return true;
};
