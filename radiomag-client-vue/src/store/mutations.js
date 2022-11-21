const mutations = {
  addToBreadcrumbs(state, data) {
    state.breadcrumbs.push(data);
  },
  removeItemFromBreadcrumbs(state, index) {
    state.breadcrumbs = state.breadcrumbs.filter((item, itemIndex) => index !== itemIndex);
  },
  clearBreadcrumbs(state) {
    state.breadcrumbs = [];
  },
  rewriteBreadcrumbs(state, data) {
    state.breadcrumbs = data;
  },
  addDataOfGroup(state, obj) {
    state.dataOfGroupProducts[obj.id] = obj.data;
  },
};

export { mutations };
export default mutations;
