import { createRouter, createWebHistory } from 'vue-router';
import home from './public/home';
import group from './public/group';
import product from './public/product';
import products from './public/products';
import search from './public/search';
import contacts from './public/contacts';
import cart from './public/cart';
import error404 from './public/error404';

import breadcrumbs from './breadcrumbs';

const routes = [
  home,
  group,
  product,
  search,
  contacts,
  products,
  cart,
  error404,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const setTitle = ({ meta: { title }}) => title ? document.title = title : undefined;

router.beforeEach((to, from, next) => {
  setTitle(to);
  breadcrumbs(to, from);
  next();
});

export default router;
