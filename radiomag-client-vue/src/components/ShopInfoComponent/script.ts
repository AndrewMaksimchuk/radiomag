import { defineComponent } from "vue";
import { onBeforeMount } from "vue";
import { useContacts } from "@/store/contacts";
import ButtonToUp from "@/components/ButtonToUpComponent.vue";
import { ServerNotAvailable } from "@/components/ServerNotAvailableComponent";

export default defineComponent({
  components: {
    ButtonToUp,
    ServerNotAvailable,
  },
  setup() {
    const store = useContacts();
    onBeforeMount(() => {
      return store.load();
    });
    return {
      store,
    };
  },
});
