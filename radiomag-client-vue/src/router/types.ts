import "vue-router";

// Extends vue router interface/s
declare module "vue-router" {
  interface RouteMeta {
    title: string;
  }

  interface RouteLocationNormalizedLoaded {
    params: RouteParams & { id?: string };
  }
}

export {};
