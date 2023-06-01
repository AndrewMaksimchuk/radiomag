import type { RouterScrollBehavior } from "vue-router";

export const scrollBehavior: RouterScrollBehavior = () => {
  // if(to.name === "group" && from.name === "goods" && savedPosition) { // savedPosition return uncorrect top value
  // return savedPosition;
  // }
  return { top: 0, behavior: "smooth" };
};
