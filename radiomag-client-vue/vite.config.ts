import { fileURLToPath, URL } from "node:url";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginVueRoutes from "./plugins/vite-plugin-vue-routes";

export default defineConfig({
  plugins: [vue(), vitePluginVueRoutes()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true,
    proxy: {
      "/api": "http://localhost:3000/",
    },
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), ".."],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/global.scss";`,
      },
    },
  },
});
