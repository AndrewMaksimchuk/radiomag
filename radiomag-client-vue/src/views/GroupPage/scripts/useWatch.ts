import type { Ref } from "vue";
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePagination } from "@/store/pagination";

export const useWatch = (view: Ref<string>) => {
  const route = useRoute();
  const router = useRouter();
  const storePagination = usePagination();
  const paginationOnPage = ref(storePagination.onPage);

  watch(
    () => {
      return storePagination.activePage;
    },
    (value) => {
      const name = route.name;
      const id = route.params.id;
      if (name && id) {
        router.replace({ name, params: { id }, query: { page: value } });
      }
    }
  );

  watch(
    () => {
      return view.value;
    },
    (value) => {
      if ("CardTable" === value) {
        paginationOnPage.value = storePagination.onPage;
        return storePagination.setOnPage(storePagination.length);
      }
      storePagination.setOnPage(paginationOnPage.value);
    }
  );
};
