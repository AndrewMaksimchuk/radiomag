import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import { UseDark } from "@vueuse/components";

export default defineComponent({
  components: {
    UseDark,
    Icon,
  },
  emits: ["click"],
  setup(_props, { emit }) {
    const onClick = () => {
      emit("click");
    };

    return {
      onClick,
    };
  },
});
