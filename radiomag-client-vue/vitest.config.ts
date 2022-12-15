/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
