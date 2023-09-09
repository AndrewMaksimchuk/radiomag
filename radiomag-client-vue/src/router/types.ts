import type { RouteNames } from "./public";
import "vue-router";

// Extends vue router interface/s
declare module "vue-router" {
  export interface RouteMeta {
    title: string;
    breadcrumbs?: {
      name: string;
      path: string;
      set: (data: { name: string; path: string }) => void;
    };
  }

  interface RouteLocationNormalizedLoaded {
    params: RouteParams & { id?: string };
  }

  interface Router {
    push(
      to: RouteNames | RouteLocationPathRaw | RouteLocationNamedRaw
    ): Promise<NavigationFailure | void | undefined>;
  }
}

export {};
