import type { RouteLocationNormalized } from 'vue-router';

export const setTitle = <T extends RouteLocationNormalized>({ meta: { title }}: T) => title ? document.title = title : undefined;