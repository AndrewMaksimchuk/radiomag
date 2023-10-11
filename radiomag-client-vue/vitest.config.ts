/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    cache: false,
    globals: true,
    environment: "jsdom",
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    coverage: {
      reportsDirectory: "./tests/coverage",
    },
    deps: {
      inline: ["element-plus"],
    },
    testTimeout: 30000,
  },
});
