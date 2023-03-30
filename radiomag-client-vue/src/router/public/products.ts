export default {
  path: "/products",
  name: "products",
  component: () => import("@/views/ProductsPage.vue"),
  meta: {
    title: "products",
    breadcrumbsName: "Каталог продукції",
  },
};
