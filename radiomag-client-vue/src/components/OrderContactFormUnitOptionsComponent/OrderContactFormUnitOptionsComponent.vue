<script setup lang="ts">
import type { Shops } from "$/dto/Shop";
import type { Managers } from "$/dto/Manager";
import type { ReturnData } from "@/httpClient/methods/GET";
import { ref, onBeforeMount } from "vue";
import { GET } from "@/httpClient";

const shops = ref<Shops>([]);
const managers = ref<Managers>([]);

const useOptions = <T>([error, data]: ReturnData<T>) => {
  return null === error ? data : [];
};

onBeforeMount(async () => {
  const [responseShops, responseManagers] = await Promise.all([
    GET.shops(),
    GET.managers(),
  ]);

  shops.value = useOptions(responseShops);
  managers.value = useOptions(responseManagers);
});
</script>

<template>
  <option value="" disabled selected="true" hidden>
    {{ $t("orderContactFormUnitOptions.header") }}
  </option>
  <optgroup v-for="shop in shops" :key="shop.id" :label="shop.name">
    <option
      v-for="manager in managers.filter((item) => {
        return item.shopId === shop.id;
      })"
      :key="manager.id"
      :value="manager.id"
    >
      {{ manager.firstName }} {{ manager.lastName }}
    </option>
  </optgroup>
</template>
