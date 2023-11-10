import { defineComponent, computed } from "vue";
import { RouterLink } from "vue-router";
import { useUser } from "@/store/user";

export default defineComponent({
  components: {
    RouterLink,
  },
  emits: ["click"],
  setup(_props, { emit }) {
    const storeUser = useUser();

    const link = computed(() => {
      const name = storeUser.user.name ? "user" : "login";
      return {
        name,
      };
    });

    const click = () => {
      emit("click");
    };

    return {
      storeUser,
      link,
      click,
    };
  },
});
