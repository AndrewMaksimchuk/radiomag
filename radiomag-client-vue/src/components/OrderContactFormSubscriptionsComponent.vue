<script setup lang="ts">
import type { CreateFormOptions } from "@/utils/CreateFormOptions";
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "./FormValidationErrorComponent.vue";
import OrderContactFormOption from "./OrderContactFormOptionComponent.vue";

const options: CreateFormOptions<"subscriptions"> = [
  {
    value: "creditCard",
    textI18nKey: "orderContactFormSubscriptions.creditCard",
  },
  {
    value: "cashlessWithoutVAT",
    textI18nKey: "orderContactFormSubscriptions.cashlessWithoutVAT",
  },
  {
    value: "cashlessWithVAT",
    textI18nKey: "orderContactFormSubscriptions.cashlessWithVAT",
  },
];

const store = useOrderContactForm();
const errors = ref("");
const showErrorMessage = ref(false);
const v$ = useVuelidate({ subscriptions: { required } }, store.formData);

const useValidation = () => {
  v$.value.$validate();
  errors.value = v$.value.subscriptions.$errors
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
      {{ $t("order.form.subscriptions") }}
    </h3>
    <div>
      <FormValidationError :is-show="showErrorMessage" :errors="errors">
        <select
          class="contact-form-order__fieldset-input contact-form-order__fieldset-input_w-full contact-form-order__fieldset-select"
          name="subscriptions"
          id="subscriptions"
          v-model="store.formData.subscriptions"
          @blur="useValidation"
        >
          <OrderContactFormOption :options="options" />
        </select>
      </FormValidationError>
    </div>
  </fieldset>
</template>
