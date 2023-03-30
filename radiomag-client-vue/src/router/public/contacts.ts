export default {
  path: "/contacts",
  name: "contacts",
  component: () => import("@/views/ContactsPage.vue"),
  meta: {
    title: "contacts",
  },
};
