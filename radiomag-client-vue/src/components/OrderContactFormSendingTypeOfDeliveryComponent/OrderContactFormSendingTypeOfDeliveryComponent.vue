<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationRules } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import { options } from "./functions/options";
import FormValidationError from "@/components/FormValidationErrorComponent.vue";
import OrderContactFormOption from "@/components/OrderContactFormOptionComponent.vue";

const store = useOrderContactForm();
const errorsTypeOfDelivery = ref("");
const showErrorMessageTypeOfDelivery = ref(false);
const { required } = useValidationRules();
const v$ = useVuelidate({ typeOfDelivery: { required } }, store.formData);

const useValidation = () => {
  v$.value.$validate();
  errorsTypeOfDelivery.value = v$.value.typeOfDelivery.$errors
    .map((value) => {
      return value.$message;
    })
    .toString();
  if (errorsTypeOfDelivery.value.length) {
    return (showErrorMessageTypeOfDelivery.value = true);
  }
  return (showErrorMessageTypeOfDelivery.value = false);
};

defineExpose({ useValidation });
</script>

<template>
  <FormValidationError
    :errors="errorsTypeOfDelivery"
    :is-show="showErrorMessageTypeOfDelivery"
  >
    <div class="contact-form-order__row">
      <label for="typeOfDelivery" class="contact-form-order__fieldset-label">
        {{ $t("order.form.typeOfDelivery") }}
      </label>
      <select
        class="contact-form-order__fieldset-input contact-form-order__fieldset-select"
        name="typeOfDelivery"
        id="typeOfDelivery"
        v-model="store.formData.typeOfDelivery"
        @blur="useValidation"
      >
        <OrderContactFormOption :options="options" />
      </select>
    </div>
  </FormValidationError>
</template>
