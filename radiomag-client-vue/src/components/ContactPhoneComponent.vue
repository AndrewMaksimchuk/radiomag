<template>
  <div class="header__info-item">
    <a class="link" href="tel:+380442200172" @click="emits('click')"
      ><img
        src="@/assets/images/telephone.svg"
        alt="telephone"
        class="header__img-info"
      />
      <span class="contacts"> +38 (044) 220-01-72 </span>
    </a>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "click"): void;
}>();
</script>
