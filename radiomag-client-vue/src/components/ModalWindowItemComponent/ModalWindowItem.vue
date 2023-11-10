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
<style lang="scss" src="./style.scss"></style>
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
  if (link.value && link.value.$el && 0 === props.index) {
    link.value.$el.focus();
  }
});
</script>
