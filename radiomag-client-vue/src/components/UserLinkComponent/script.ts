import { defineComponent, computed } from "vue";
import { RouterLink } from "vue-router";
import { useUser } from "@/store/user";

export default defineComponent({
  components: {
    RouterLink,
  },
  setup() {
    const storeUser = useUser();

    const link = computed(() => {
      const name = storeUser.user.name ? "user" : "login";
      return {
        name,
      };
    });

    return {
      storeUser,
      link,
    };
  },
});
