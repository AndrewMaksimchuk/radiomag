<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "./FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errors = ref("");
const showErrorMessage = ref(false);
const v$ = useVuelidate({ email: { required, email } }, store.formData);

const useValidation = () => {
  v$.value.$validate();
  errors.value = v$.value.email.$errors
    .map((value) => value.$message)
    .toString();
  if (errors.value.length) return (showErrorMessage.value = true);
  return (showErrorMessage.value = false);
};

defineExpose({ useValidation });
</script>

<template>
  <fieldset class="contact-form-order__fieldset">
    <h3 class="contact-form-order__fieldset-header">
      {{ $t("order.form.contact") }}
    </h3>
    <FormValidationError :isShow="showErrorMessage" :errors="errors">
      <input
        class="contact-form-order__fieldset-input contact-form-order__fieldset-input_w-full"
        type="email"
        name="email"
        id="email"
        v-model.trim="store.formData.email"
        @blur="useValidation"
      />
    </FormValidationError>
  </fieldset>
</template>
