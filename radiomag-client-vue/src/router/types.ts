import type { RouteNamesPublic } from "./public";
import type { RouteNamesProtected } from "./protected";
import type { TabName } from "@/views/UserPage/scripts/tabs";
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

  interface LocationQueryApp {
    window?: TabName;
  }

  interface RouteLocationNormalizedLoaded {
    name: RouteNames;
    params: RouteParams & { id?: string };
    query: LocationQueryApp;
  }

  type RouteNameWithQuery = RouteLocationNamedRaw & {
    name: RouteNames;
    query?: LocationQueryApp;
  };

  type RouteLocationApp = RouteNames | RouteNameWithQuery;

  interface Router {
    push(to: RouteLocationApp): Promise<NavigationFailure | void | undefined>;
  }

  interface RouteLocationNormalized {
    name: RouteNames;
  }
}

export {};
