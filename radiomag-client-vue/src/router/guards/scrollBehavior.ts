import type { RouterScrollBehavior } from "vue-router";

const behavior = "smooth";

export const scrollBehavior: RouterScrollBehavior = (to, from) => {
  if ("group" === to.name && "group" === from.name) {
    return {
      behavior,
      el: ".pagination",
    };
  }

  if ("group" === to.name) {
    return {
      behavior,
      el: ".group",
    };
  }

  return {
    behavior,
    top: 0,
  };
};
