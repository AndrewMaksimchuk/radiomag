<template>
  <RouterLink
    class="modal-window-item"
    :to="{ name: 'group', params: { id: data.id } }"
    @click="goto"
    ref="link"
  >
    <img
      class="modal-window-item__img"
      :src="'images/groups/' + data.img"
      :alt="data.name"
    />
    <p class="modal-window-item__text">{{ data.name }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useModalWindow, type ModalItem } from "@/store/modalWindow";
import { PingService } from "@/services/PingService";

interface RouterLinkExtends extends InstanceType<typeof RouterLink> {
  $el: HTMLElement;
}

const props = defineProps<{
  data: ModalItem;
  index: number;
}>();

const store = useModalWindow();
const router = useRouter();
const link = ref<RouterLinkExtends | null>(null);

const goto = () => {
  store.hide();
  PingService.ping({
    action: "go to page",
    to: router.resolve({ name: "group", params: { id: props.data.id } })
      .fullPath,
  });
};

onMounted(() => {
  if (link.value && link.value.$el && props.index === 0) link.value.$el.focus();
});
</script>

<style lang="scss">
.modal-window-item {
  height: 230px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--color-black-light);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    border: 1px solid var(--color-gray-light);
    border-radius: 5px;
  }

  &__img {
    width: 120px;
    max-height: 120px;
    padding-bottom: 5px;
    object-fit: contain;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__text {
    font-size: 1.8rem;
    text-align: center;
  }
}
</style>
