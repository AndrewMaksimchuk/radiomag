import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from "../httpClient";

interface GroupStore {
  [groupId: number | string]: Group,
}

const errorMessage =
  'Не вдалося отримати список товарів, спробуйте ще раз...\nОновіть сторінку "Ctrl + F5"';

export const useGroup = defineStore("group", () => {
  const data = ref<GroupStore>({});
  const groupName = ref("");
  const length = computed(() => Object.keys(data.value).length);
  const isLoading = ref(true);
  const isError = ref("");

  const getData = (id: number) => data.value[id];

  const getGroupName = async (id: number | string) => {
    const [error, name] = await GET.groupName(id);
    if (error) return;
    return (groupName.value = name);
  };

  const getGroupData = async (id: number | string) => {
    const [error, updatableValue] = await GET.group(id);
    if (error) return (isError.value = errorMessage);
    return (data.value[id] = updatableValue);
  };

  const load = async (id: number | string) => {
    isError.value = "";
    isLoading.value = true;
    await Promise.all([getGroupData(id), getGroupName(id)]);
    isLoading.value = false;
  };

  return {
    data,
    groupName,
    length,
    isLoading,
    isError,
    getData,
    load,
  };
});
