export default {
  path: "/cart",
  name: "cart" as const,
  component: () => {
    return import("@/views/CartPage/CartPage.vue");
  },
  meta: {
    title: "cart",
  },
};
