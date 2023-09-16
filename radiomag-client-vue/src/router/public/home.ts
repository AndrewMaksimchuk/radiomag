export default {
  path: "/",
  name: "home" as const,
  component: () => {
    return import("@/views/HomePage.vue");
  },
  meta: {
    title: "home",
  },
};
