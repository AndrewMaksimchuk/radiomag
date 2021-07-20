import { createStore } from 'vuex';
import getListOfCatalogGroups from '@/services/index';

export default createStore({
  state: {
    isModalVisible: false,
    modalDataProductCatalog: [],
    breadcrumbs: [],
    dataOfGroupProducts: {},
    cart: [],
    goods: {},
  },
  mutations: {
    showModalWindow(state) {
      state.isModalVisible = true;
    },
    hideModalWindow(state) {
      state.isModalVisible = false;
      state.modalDataProductCatalog = [];
    },
    writeDataInModalWindow(state, data) {
      state.modalDataProductCatalog = data;
    },
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
    addGoods(state, obj) {
      state.goods = obj;
    },
    addGoodsToCart(state, obj) {
      state.cart.push(obj);
    },
  },
  actions: {
    async getCatalogGroupList(context, payloadId) {
      // maybe get request to server
      context.commit('showModalWindow');
      const d = await getListOfCatalogGroups(payloadId);
      context.commit('writeDataInModalWindow', d);
    },

  },
  getters: {
    isModalVisible: (state) => state.isModalVisible,
    dataOfModalWindow: (state) => state.modalDataProductCatalog,
    getBreadcrumbs: (state) => state.breadcrumbs,
    getDataOfGroupProducts: (state) => state.dataOfGroupProducts,
    getDataOfGroupProductsById: (state) => (id) => state.dataOfGroupProducts[id],
    getGoods: (state) => state.goods,
    getCart: (state) => state.cart,
  },
  modules: {
  },
});
