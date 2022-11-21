import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from '@/httpClient';
import { useHTTPclient } from '@/store/httpClient';

export const useCatalog = defineStore("catalog", () => {
  const HTTPstore = useHTTPclient();
  /** @type {{ id: number, img: string, name: string }[]}  */
  const catalog = ref([]);
  /** @type { Record<string, Array<{ id: number, img: string, name: string }>} */
  const catalogGroups = ref({});
  const length = computed(() => catalog.value.length);
  const lengthGroups = computed(() => catalogGroups.value.length);
  const allMenuGroups = computed(() => Object.values(catalogGroups.value).flat(1))

  const useMenu = async () => {
    if (length.value) return;
    const [ error, data ] = await HTTPstore.loading(GET.catalog);
    return error ? error : catalog.value = data;
  };

  const useMenuGroups = async (id) => {
    const [ error, data ] = await HTTPstore.loading(async () => GET.catalogGroups(id));
    return error ? error : catalogGroups.value[id] = data;
  }

  const useAllMenuGroups = async () => {
    await useMenu();
    const requests = catalog.value.map((value) => useMenuGroups(value.id));
    Promise.all(requests);
  }

  return { catalog, length, catalogGroups, lengthGroups, allMenuGroups, useMenu, useMenuGroups, useAllMenuGroups };
});
