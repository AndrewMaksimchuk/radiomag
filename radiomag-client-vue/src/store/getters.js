const getters = {
  isModalVisible: (state) => state.isModalVisible,
  dataOfModalWindow: (state) => state.modalDataProductCatalog,
  getBreadcrumbs: (state) => state.breadcrumbs,
  getDataOfGroupProducts: (state) => state.dataOfGroupProducts,
  getDataOfGroupProductsById: (state) => (id) => state.dataOfGroupProducts[id],
  getGoods: (state) => state.goods,
  getCart: (state) => state.cart,
  isBigImageShowed: (state) => state.isBigImageShowed,
  getBigImage: (state) => state.bigImage,
};

export { getters };
export default getters;
