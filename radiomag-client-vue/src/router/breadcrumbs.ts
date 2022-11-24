// import { useBreadcrumbs } from '@/store/breadcrumbs';

export default function breadcrumbsLogic(to, from) {

  console.log({to, from})

  // const findSamePath = (currentValue) => currentValue.path === to.path;
  // const store = useBreadcrumbs();

  // const targetRoute = {
  //   name: to.meta?.breadcrumbs?.name,
  //   path: to.path,
  // };

  // if (to.path === '/') return store.reset();
  // if (from.path === '/') return;
  // if (store.length === 0) return store.add(from);

  // const pathToExistInBreadcrumbs = breadcrumbs.findIndex(findSamePath);
  // if (pathToExistInBreadcrumbs > -1) {
  //   const newBreadcrumbs = breadcrumbs.slice(0, pathToExistInBreadcrumbs);
  //   store.commit('clearBreadcrumbs');
  //   store.commit('rewriteBreadcrumbs', newBreadcrumbs);
  //   return;
  // }

  // store.add(targetRoute);
}
