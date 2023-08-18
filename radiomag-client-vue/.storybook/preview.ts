import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { i18n } from "../src/languages";
import "../src/assets/styles/style.scss";

setup((app) => {
  app.use(i18n);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;