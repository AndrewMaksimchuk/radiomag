export default {
  path: "/",
  name: "home",
  component: () => {
    return import("@/views/HomePage.vue");
  },
  meta: {
    title: "home",
  },
};
