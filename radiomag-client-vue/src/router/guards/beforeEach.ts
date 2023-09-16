import type { Router } from "vue-router";
import { setTitle } from "@/router/features/title";
import { accessController } from "./accessController";
import breadcrumbs from "@/router/features/breadcrumbs";

type BeforeEach = Parameters<Router["beforeEach"]>[0];

export const beforeEach: BeforeEach = (to, from) => {
  if (false === accessController(to)) {
    return {
      name: "403",
    };
  }

  setTitle(to);
  breadcrumbs(to, from);

  return true;
};
