import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { usePagination } from "@/store/pagination";

export const useWatch = () => {
  const route = useRoute();
  const router = useRouter();
  const storePagination = usePagination();

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
};
