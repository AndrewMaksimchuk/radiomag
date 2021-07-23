import { createStore } from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export default createStore({
  state: {
    isModalVisible: false,
    isBigImageShowed: false,
    modalDataProductCatalog: [],
    bigImage: {},
    breadcrumbs: [],
    dataOfGroupProducts: {},
    cart: [],
    goods: {},
  },
  mutations,
  actions,
  getters,
  modules: {
  },
});
