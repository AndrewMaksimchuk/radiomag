export default {
  path: "/product/:code",
  name: "goods",
  component: () => import("@/views/GoodsPage.vue"),
  props: true,
  meta: {
    title: "Товар",
  },
};
