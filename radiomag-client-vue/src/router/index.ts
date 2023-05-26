import { createRouter, createWebHistory } from "vue-router";
import { useLogService } from "@/services/ErrorService";
import { beforeEach } from "./guards/beforeEach";
import { routes } from "./routes";

const logService = useLogService();

const config = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
};

const router = createRouter(config);

router.beforeEach(beforeEach);

router.onError((error, to, from) => logService.error({ error, to, from }));

export default router;
