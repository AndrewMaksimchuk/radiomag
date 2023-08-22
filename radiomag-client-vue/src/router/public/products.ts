import type { RouteRecordRaw } from "vue-router";

const products: RouteRecordRaw = {
  path: "/products",
  name: "products",
  component: () => {
    return import("@/views/ProductsPage/ProductsPage.vue");
  },
  meta: {
    title: "products",
    breadcrumbs: {
      name: "title.products",
      path: "",
      set({ name, path }) {
        this.name = name ?? "title.products";
        this.path = path ?? "/products";
      },
    },
  },
};

export default products;
