const getters = {
  getDataOfGroupProducts: (state) => state.dataOfGroupProducts,
  getDataOfGroupProductsById: (state) => (id) => state.dataOfGroupProducts[id],
};

export { getters };
export default getters;
