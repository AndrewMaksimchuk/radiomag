import { createRouter, createWebHistory } from 'vue-router';
import { beforeEach } from './guards/beforeEach';
import { routes } from './routes';

const config = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
}

const router = createRouter(config);

router.beforeEach(beforeEach);

export default router;
