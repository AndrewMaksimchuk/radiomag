import type { FiltersItems, FiltersItemsMod } from "$/dto/Group";
import { ref } from "vue";
import { useGroup } from "@/store/group";

export const useFilters = (currentGroupId: string) => {
  const headers = ref<string[]>([]);
  const filters = ref<FiltersItemsMod>([]);
  const store = useGroup();
  const errorReturn = {
    headers,
    filters,
  };

  const descriptionsTitles = store.data[currentGroupId]?.descriptions_titles;

  if (false === Boolean(descriptionsTitles)) {
    return errorReturn;
  }
  const mapFilters = (data: FiltersItems[number][number]) => {
    const obj = descriptionsTitles[data.title];
    return Array.isArray(obj)
      ? { qty: 0, title: "" }
      : { qty: data.qty, title: obj.value };
  };

  headers.value = Object.values(
    store.data[currentGroupId].column_headers.product_descriptions
  ).slice(1);

  filters.value = store.data[currentGroupId].filters
    .filter((item) => {
      return item.length;
    })
    .map((filterData) => {
      return filterData.map(mapFilters);
    });

  return { headers, filters };
};
