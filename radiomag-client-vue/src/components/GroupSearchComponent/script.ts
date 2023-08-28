import type { PropType } from "vue";
import type { WorkerProduct } from "@/public/types";
import { defineComponent, ref } from "vue";
import { ElInput, ElIcon, ElButton } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import { toastWarning } from "./scripts/useNotify";
import { useI18nStore } from "@/store/i18n";
import { fuseSearch } from "./scripts/search";
import "element-plus/es/components/input/style/css";

export default defineComponent({
  components: {
    ElInput,
    ElIcon,
    ElButton,
    Search,
  },
  props: {
    data: {
      required: true,
      type: Array as PropType<WorkerProduct[]>,
    },
  },
  emits: {
    search(payload: WorkerProduct[]) {
      return payload;
    },
    reset() {
      return true;
    },
  },
  setup(props, ctx) {
    const input = ref("");
    const savedContext = ref<WorkerProduct[]>([]);
    const useI18n = useI18nStore();

    const reset = () => {
      input.value = "";
      ctx.emit("reset");
    };

    const toSearch = () => {
      if (0 === input.value.length) {
        return toastWarning(useI18n.t("groupSearch.notificationInputEmpty"));
      }

      if (0 === savedContext.value.length) {
        savedContext.value = [...props.data];
      }

      const searchResult = fuseSearch(savedContext.value, input.value);
      ctx.emit("search", searchResult);
    };

    return { input, reset, toSearch };
  },
});
