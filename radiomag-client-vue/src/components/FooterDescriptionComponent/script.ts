import { defineComponent, onBeforeMount } from "vue";
import { useContacts } from "@/store/contacts";
import FooterSocial from "@/components/FooterSocialComponent.vue";

export default defineComponent({
  components: {
    FooterSocial,
  },
  setup() {
    const storeContacts = useContacts();
    onBeforeMount(() => {
      storeContacts.load();
    });

    return {
      storeContacts,
    };
  },
});
