import { defineComponent } from "vue";
import { UserLink } from "@/components/UserLinkComponent";

export default defineComponent({
  components: {
    UserLink,
  },
  emits: ["click"],
  setup(_props, { emit }) {
    const click = () => {
      emit("click");
    };

    return {
      click,
    };
  },
});
