import type { RouteRecordRaw } from "vue-router";

const group: RouteRecordRaw = {
  path: "/group/:id",
  name: "group",
  component: () => {
    return import("@/views/GroupPage/GroupPage.vue");
  },
  props: true,
  meta: {
    title: "group",
    breadcrumbs: {
      name: "title.group",
      path: "",
      set({ name, path }) {
        this.name = name ?? "title.group";
        this.path = path ?? "";
      },
    },
  },
};

export default group;
