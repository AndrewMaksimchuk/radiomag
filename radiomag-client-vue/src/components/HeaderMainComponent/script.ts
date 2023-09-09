import { defineComponent } from "vue";
import { HeaderInfo } from "@/components/HeaderInfoComponent";
import { HeaderSearch } from "@/components/HeaderSearchComponent";
import HeaderNav from "@/components/HeaderNavComponent.vue";

export default defineComponent({
  components: {
    HeaderInfo,
    HeaderSearch,
    HeaderNav,
  },
});
