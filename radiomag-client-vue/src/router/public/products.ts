export default {
  path: "/products",
  name: "products",
  component: () => import("@/views/ProductsPage.vue"),
  meta: {
    title: "Каталог продукції",
    breadcrumbsName: "Каталог продукції",
  },
};
