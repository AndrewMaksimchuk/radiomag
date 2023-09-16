import { defineComponent } from "vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18nStore } from "@/store/i18n";
import { PingService } from "@/services/PingService";

export default defineComponent({
  setup() {
    const router = useRouter();
    const useI18n = useI18nStore();
    const productName = ref("");
    const searchPlaceholder = ref("");

    searchPlaceholder.value = useI18n.t("header.search.empty");

    const searchProduct = () => {
      PingService.ping({
        action: "go to page",
        to: router.resolve({
          name: "search",
          params: { name: productName.value },
        }).fullPath,
        payload: productName.value,
      });

      productName.value
        ? router.push({ name: "search", params: { name: productName.value } })
        : (searchPlaceholder.value = useI18n.t("header.search.emptyWhenClick"));
    };

    watch(useI18n, () => {
      return (searchPlaceholder.value = useI18n.t("header.search.empty"));
    });

    return {
      productName,
      searchPlaceholder,
      searchProduct,
    };
  },
});
