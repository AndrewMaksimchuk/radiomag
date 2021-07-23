const mutations = {
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
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  changeQuantityOfProduct(state, obj) {
    const { code, quantity } = obj;
    function changeValue(item) {
      if (item.product.id === code) {
        const updatedProduct = item;
        updatedProduct.quantity = quantity;
        return updatedProduct;
      }
      return item;
    }
    state.cart = state.cart.map(changeValue);
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  putCartDataFromLocalStorage(state, data) {
    state.cart = data;
  },
  clearCart(state) {
    state.cart = [];
    localStorage.removeItem('cart');
  },
  showBigImage(state, img) {
    state.isBigImageShowed = true;
    state.bigImage = img;
  },
  hiddenBigImage(state) {
    state.isBigImageShowed = false;
    state.bigImageSrc = {};
  },
};

export { mutations };
export default mutations;
