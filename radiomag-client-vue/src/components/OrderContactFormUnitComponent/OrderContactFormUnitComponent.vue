<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationRules } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import { OrderContactFormUnitOptions } from "@/components";
import FormValidationError from "@/components/FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errors = ref("");
const showErrorMessage = ref(false);
const { required } = useValidationRules();
const v$ = useVuelidate({ unit: { required } }, store.formData);

const useValidation = () => {
  v$.value.$validate();
  errors.value = v$.value.unit.$errors
    .map((value) => {
      return value.$message;
    })
    .toString();
  return errors.value.length
    ? (showErrorMessage.value = true)
    : (showErrorMessage.value = false);
};

defineExpose({ useValidation });
</script>

<template>
  <fieldset class="contact-form-order__fieldset">
    <h3 class="contact-form-order__fieldset-header">
      {{ $t("order.form.unit") }}
    </h3>
    <div>
      <FormValidationError :is-show="showErrorMessage" :errors="errors">
        <select
          required
          aria-required="true"
          aria-label="Who will receive the order"
          class="contact-form-order__fieldset-input contact-form-order__fieldset-input_w-full contact-form-order__fieldset-select"
          name="unit"
          id="unit"
          v-model="store.formData.unit"
          @blur="useValidation"
        >
          <OrderContactFormUnitOptions />
        </select>
      </FormValidationError>
    </div>
  </fieldset>
</template>
