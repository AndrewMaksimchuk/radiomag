import type { StateMenu } from "@/components/ButtonMenuComponent/ButtonMenuComponent.vue";
import { defineComponent, ref } from "vue";
import { HeaderUserAction } from "@/components/HeaderUserActionComponent";
import HeaderInfoContacts from "@/components/HeaderInfoContactsComponent.vue";
import { HeaderCart } from "@/components";
import { LangChoose } from "@/components";
import { ButtonMenu } from "@/components";

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

    const closeMenu = () => {
      isMenuOpen.value = false;
      isOverflow.value = false;
    };

    const toggleMenu = (state: StateMenu) => {
      "open" === state ? (isMenuOpen.value = true) : (isMenuOpen.value = false);
    };

    const toggleOverflow = (data: boolean) => {
      isOverflow.value = data;
    };

    return {
      isMenuOpen,
      isOverflow,
      closeMenu,
      toggleMenu,
      toggleOverflow,
    };
  },
});
