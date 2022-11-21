export default {
  path: "/product/:code",
  name: "goods",
  component: () => import("@/views/Goods.vue"),
  props: true,
  meta: {
    title: "Товар",
  },
};
