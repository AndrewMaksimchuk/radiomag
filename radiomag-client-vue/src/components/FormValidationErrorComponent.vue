<script setup lang="ts">
defineProps<{
  isShow: boolean;
  errors: string;
}>();
</script>

<template>
  <div>
    <slot></slot>
    <small
      class="form__input-error"
      :class="{ 'form__input-error_show': isShow }"
    >
      {{ errors }}
    </small>
  </div>
</template>
