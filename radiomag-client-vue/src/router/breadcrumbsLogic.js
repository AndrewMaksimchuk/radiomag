import store from '@/store/index';

export default function breadcrumbsLogic(to, from) {
  function findSamePath(currentValue) {
    return currentValue.path === to.path;
  }
  const breadcrumbs = store.getters.getBreadcrumbs;

  if (from.path === '/') {
    return;
  }

  if (to.path === '/') {
    store.commit('clearBreadcrumbs');
    return;
  }

  if (breadcrumbs.length === 0) {
    store.commit('addToBreadcrumbs', from);
    return;
  }

  const pathToExistInBreadcrumbs = breadcrumbs.findIndex(findSamePath);
  if (pathToExistInBreadcrumbs > -1) {
    const newBreadcrumbs = breadcrumbs.slice(0, pathToExistInBreadcrumbs);
    store.commit('clearBreadcrumbs');
    store.commit('rewriteBreadcrumbs', newBreadcrumbs);
    return;
  }

  store.commit('addToBreadcrumbs', from);
}
