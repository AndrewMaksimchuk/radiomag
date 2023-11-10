import type { Ref } from "vue";
export const useAddToCart = (
  isAddedToCart: Ref<boolean>,
  emit: { (e: "addToCart"): void }
) => {
  const showNotificationIsAddedToCart = () => {
    isAddedToCart.value = true;
    setTimeout(() => {
      isAddedToCart.value = false;
    }, 1000);
  };

  const addToCart = () => {
    emit("addToCart");
    showNotificationIsAddedToCart();
  };

  return addToCart;
};
