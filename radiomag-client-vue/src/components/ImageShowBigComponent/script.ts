import { defineComponent } from "vue";
import { useImageShow } from "@/store/imageShow";

export default defineComponent({
  setup() {
    const store = useImageShow();
    const closeWindow = () => {
      return store.hide();
    };

    return {
      store,
      closeWindow,
    };
  },
});
