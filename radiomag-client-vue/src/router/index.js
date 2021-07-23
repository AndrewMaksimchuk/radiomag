import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Group from '@/views/Group.vue';
import Search from '@/views/Search.vue';
import Contacts from '@/views/Contacts.vue';
import Product from '@/views/Products.vue';
import Error404 from '@/views/Error404.vue';
import Goods from '@/views/Goods.vue';
import Cart from '@/views/Cart.vue';
import breadcrumbsLogic from './breadcrumbsLogic';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Радіомаг - Магазин електронних компонентів',
    },
  },
  {
    path: '/group/:id',
    name: 'group',
    component: Group,
    props: true,
    meta: {
      title: 'Група',
      breadcrumbsName: 'Група',
    },
  },
  {
    path: '/product/:code',
    name: 'goods',
    component: Goods,
    props: true,
    meta: {
      title: 'Товар',
    },
  },
  {
    path: '/search/:name',
    name: 'search',
    component: Search,
    meta: {
      title: 'Пошук',
    },
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
    meta: {
      title: 'Контакти',
    },
  },
  {
    path: '/products',
    name: 'products',
    component: Product,
    meta: {
      title: 'Каталог продукції',
      breadcrumbsName: 'Каталог продукції',
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      title: 'Корзина',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Error404,
    meta: {
      title: 'Сталася помилка',
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const docTitle = to.meta.title;
  if (docTitle) {
    document.title = docTitle;
  }
  breadcrumbsLogic(to, from);
  next();
});

export default router;
