export default {
  path: "/login",
  name: "login",
  component: () => {
    return import("@/views/LoginPage/LoginPage.vue");
  },
  meta: {
    title: "login",
  },
};
