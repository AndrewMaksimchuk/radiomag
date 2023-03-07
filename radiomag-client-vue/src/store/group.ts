import type { Group } from "../../../dto/Group";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { GET } from "../httpClient";
import { useI18nStore } from "./i18n";

interface GroupStore {
  [id: number | string]: Group;
}

export const useGroup = defineStore("group", () => {
  const data = ref<GroupStore>({});
  const groupName = ref("");
  const length = computed(() => Object.keys(data.value).length);
  const isLoading = ref(true);
  const isError = ref("");
  const groupWorker = ref<Worker>();

  const i18nStore = useI18nStore();

  const getData = (id: number) => data.value[id];

  const getGroupName = async (id: number | string) => {
    const [error, name] = await GET.groupName(id);
    if (error) return;
    return (groupName.value = name);
  };

  const getGroupData = async (id: number | string) => {
    const [error, updatableValue] = await GET.group(id);
    if (error) return (isError.value = i18nStore.t("group.error.load"));
    return (data.value[id] = updatableValue);
  };

  const load = async (id: number | string) => {
    isError.value = "";
    isLoading.value = true;
    await Promise.all([getGroupData(id), getGroupName(id)]);
    isLoading.value = false;
  };

  const createWorker = () =>
    (groupWorker.value = new Worker("/js/groupWorker.js"));

  const terminateWorker = () => {
    if (groupWorker.value) {
      groupWorker.value.terminate();
      groupWorker.value = undefined;
    }
  };

  return {
    data,
    groupName,
    length,
    isLoading,
    isError,
    getData,
    load,
    groupWorker,
    createWorker,
    terminateWorker,
  };
});
