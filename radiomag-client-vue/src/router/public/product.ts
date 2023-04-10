import type { RouteRecordRaw } from "vue-router";

const product: RouteRecordRaw = {
  path: "/product/:code",
  name: "goods",
  component: () => import("@/views/GoodsPage.vue"),
  props: true,
  meta: {
    title: "product",
    breadcrumbs: {
      name: "title.product",
      path: "",
      set({ name, path }) {
        this.name = name ?? "title.group";
        this.path = path ?? "";
      },
    },
  },
};

export default product;
