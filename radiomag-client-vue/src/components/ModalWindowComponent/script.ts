import { defineComponent } from "vue";
import { ModalWindowItem } from "@/components";
import { useModalWindow } from "@/store/modalWindow";

export default defineComponent({
  components: {
    ModalWindowItem,
  },
  setup() {
    const store = useModalWindow();

    return {
      store,
    };
  },
});
