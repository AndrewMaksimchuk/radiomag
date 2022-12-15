import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "@/languages";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/styles/style.scss";

export const app = createApp(App);
export const pinia = createPinia();

app.use(i18n).use(pinia).use(router).mount("#app");
