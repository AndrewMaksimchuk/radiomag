<script setup lang="ts">
import { useOrderContactForm } from "@/store/orderContactForm";

const store = useOrderContactForm();
</script>

<template>
  <fieldset class="contact-form-order__fieldset">
    <h3 class="contact-form-order__fieldset-header">
      {{ $t("order.form.comment") }}
    </h3>
    <div>
      <textarea
        class="contact-form-order__fieldset-textarea"
        name="comment"
        v-model.trim="store.formData.comment"
      >
      </textarea>
    </div>
  </fieldset>
</template>

<style lang="scss">
.contact-form-order {
  &__fieldset {
    &-textarea {
      width: 100%;
      height: 300px;
      font-size: 1.6rem;
      padding: 5px;
      border: solid 1px var(--color-gray-light);
      resize: vertical;

      @media (max-width: $breakpoint-tablet) {
        height: 420px;
      }
    }
  }
}
</style>
