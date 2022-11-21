export default {
  path: "/products",
  name: "products",
  component: () => import("@/views/Products.vue"),
  meta: {
    title: "Каталог продукції",
    breadcrumbsName: "Каталог продукції",
  },
};
