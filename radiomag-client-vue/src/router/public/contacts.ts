export default {
  path: "/contacts",
  name: "contacts" as const,
  component: () => {
    return import("@/views/ContactsPage.vue");
  },
  meta: {
    title: "contacts",
  },
};
