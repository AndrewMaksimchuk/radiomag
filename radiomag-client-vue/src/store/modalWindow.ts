import { ref } from "vue";
import { defineStore } from "pinia";

export interface ModalItem {
  id: number;
  name: string;
  img: string;
}

type Modal = ModalItem[];

export const useModalWindow = defineStore("modalWindow", () => {
  const isVisible = ref(false);
  const headerText = ref("Електронні компоненти та комплектуючі");
  const data = ref<Modal>([]);

  const show = (someData: Modal) => {
    isVisible.value = true;
    data.value = someData;
  };

  const hide = () => {
    isVisible.value = false;
    data.value = [];
  };

  return { isVisible, headerText, data, show, hide };
});
