import type { StateMenu } from "@/components/ButtonMenuComponent.vue";
import { defineComponent, ref } from "vue";
import { HeaderUserAction } from "@/components/HeaderUserActionComponent";
import HeaderInfoContacts from "@/components/HeaderInfoContactsComponent.vue";
import { HeaderCart } from "@/components";
import LangChoose from "@/components/LangChooseComponent.vue";
import ButtonMenu from "@/components/ButtonMenuComponent.vue";

export default defineComponent({
  components: {
    HeaderUserAction,
    HeaderInfoContacts,
    HeaderCart,
    LangChoose,
    ButtonMenu,
  },
  setup() {
    const isMenuOpen = ref(false);
    const isOverflow = ref(false);

    const toggleMenu = (state: StateMenu) => {
      "open" === state ? (isMenuOpen.value = true) : (isMenuOpen.value = false);
    };

    const toggleOverflow = (data: boolean) => {
      isOverflow.value = data;
    };

    return {
      isMenuOpen,
      isOverflow,
      toggleMenu,
      toggleOverflow,
    };
  },
});
