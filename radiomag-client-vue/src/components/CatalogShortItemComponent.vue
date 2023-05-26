<script setup lang="ts">
import type { CatalogItem } from "../../../dto/Catalog";
import { useCatalog } from "@/store/catalog";
import { useModalWindow } from "@/store/modalWindow";
import { PingService } from "@/services/PingService";

const props = defineProps<{
  data: CatalogItem;
}>();

const catalogStore = useCatalog();
const modalStore = useModalWindow();

const showModalWindow = async (id: number) => {
  const dataCatalog = await catalogStore.useMenuGroups(id);
  PingService.ping({
    action: "open window",
    window: "ModalWindow",
    payload: dataCatalog,
  });
  if (Array.isArray(dataCatalog)) modalStore.show(dataCatalog, props.data.name);
};
</script>

<template>
  <li class="catalog-of-products__list-item">
    <button class="catalog-of-products__link" @click="showModalWindow(data.id)">
      <div class="catalog-of-products__image-container">
        <img
          :src="'/images/catalog/' + data.img"
          :alt="data.name"
          class="catalog-of-products__image"
        />
      </div>
      <h3 class="catalog-of-products__item-header">{{ data.name }}</h3>
    </button>
  </li>
</template>
