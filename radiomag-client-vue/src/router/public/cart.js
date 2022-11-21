export default {
  path: "/cart",
  name: "cart",
  component: () => import("@/views/Cart.vue"),
  meta: {
    title: "Корзина",
  },
};
