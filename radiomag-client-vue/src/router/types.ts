import type { RouteNamesPublic } from "./public";
import type { RouteNamesProtected } from "./protected";
import "vue-router";

export type RouteNames = RouteNamesPublic | RouteNamesProtected;

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
      to:
        | RouteNames
        | (RouteLocationPathRaw & { name?: RouteNames })
        | RouteLocationNamedRaw
    ): Promise<NavigationFailure | void | undefined>;
  }

  interface RouteLocationNormalized {
    name: RouteNames;
  }
}

export {};
