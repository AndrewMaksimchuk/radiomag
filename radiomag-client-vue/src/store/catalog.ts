import type { Catalog, CatalogGroups } from "../../../dto/Catalog";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from "@/httpClient";
import { useHTTPclient } from "@/store/httpClient";

export const useCatalog = defineStore("catalog", () => {
  const HTTPstore = useHTTPclient();
  const catalog = ref<Catalog>([]);
  const catalogGroups = ref<CatalogGroups>({});
  const length = computed(() => catalog.value.length);
  const lengthGroups = computed(() => catalogGroups.value.length);
  const allMenuGroups = computed(() =>
    Object.values(catalogGroups.value).flat(1)
  );

  const useMenu = async () => {
    if (length.value) return catalog.value;
    const [error, data] = await HTTPstore.loading(GET.catalog);
    return error ? error : (catalog.value = data);
  };

  const useMenuGroups = async (id: number) => {
    const [error, data] = await HTTPstore.loading(async () =>
      GET.catalogGroups(id)
    );
    return error ? error : (catalogGroups.value[id] = data);
  };

  const useAllMenuGroups = async () => {
    await useMenu();
    const requests = catalog.value.map((value) => useMenuGroups(value.id));
    Promise.all(requests);
  };

  return {
    catalog,
    length,
    catalogGroups,
    lengthGroups,
    allMenuGroups,
    useMenu,
    useMenuGroups,
    useAllMenuGroups,
  };
});
