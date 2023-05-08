import type { App } from "vue";
import type { Router } from "vue-router";
import * as Sentry from "@sentry/vue";

const dsn = "https://examplePublicKey@o0.ingest.sentry.io/0";

export const useSentry = (app: App<Element>, router: Router) => {
  Sentry.init({
    app,
    dsn,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      }),
    ],
    tracesSampleRate: 1.0,
  });
};
