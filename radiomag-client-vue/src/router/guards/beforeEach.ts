import type { Router } from 'vue-router';
import { setTitle } from '@/router/features/title';
import breadcrumbs from '@/router/features/breadcrumbs';

type BeforeEach = Parameters<Router["beforeEach"]>[0];

export const beforeEach: BeforeEach = (to, from, next) => {
    setTitle(to);
    breadcrumbs(to, from);
    next();
  };
