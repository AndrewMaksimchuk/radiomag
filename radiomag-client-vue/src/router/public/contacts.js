export default {
  path: "/contacts",
  name: "contacts",
  component: () => import("@/views/Contacts.vue"),
  meta: {
    title: "Контакти",
  },
};
