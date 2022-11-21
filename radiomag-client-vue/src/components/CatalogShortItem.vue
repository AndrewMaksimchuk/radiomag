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

<script setup>
import { useCatalog } from '@/store/catalog';
import { useModalWindow } from '@/store/modalWindow';

defineProps({
  data: {
    type: Object,
    required: true,
  }
});

const catalogStore = useCatalog();
const modalStore = useModalWindow();

const showModalWindow = async (id) => {
  const data = await catalogStore.useMenuGroups(id);
  modalStore.show(data);
}
</script>
