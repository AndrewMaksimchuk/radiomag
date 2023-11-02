import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "@/languages";
import { useLogService } from "@/services/ErrorService";
import App from "@/App.vue";
import AppCrushed from "@/AppCrushed.vue";
import router from "@/router";
import Toast from "vue-toastification";
import { ElLoading } from "element-plus";
import "vue-toastification/dist/index.css";
import "element-plus/es/components/loading/style/css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/assets/styles/style.scss";

export const app = createApp(App);
export const pinia = createPinia();
const logService = useLogService();

app.config.errorHandler = (err, instance, info) => {
  logService.globalError({ err, instance, info }, () => {
    app.unmount();
    createApp(AppCrushed).mount("#app");
  });
};

app.config.warnHandler = (msg, instance, trace) => {
  logService.globalWarn({ msg, instance, trace });
};

ElLoading.install(app);

app.use(i18n).use(pinia).use(router).use(Toast).mount("#app");
