<script setup lang="ts">
import { ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationRules } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "@/components/FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errors = ref("");
const showErrorMessage = ref(false);
const { requiredIf } = useValidationRules();

const useErrors = () => {
  if (errors.value.length) {
    return (showErrorMessage.value = true);
  }
  return (showErrorMessage.value = false);
};

const useValidation = () => {
  const rules = {
    city: {
      requiredIf: requiredIf("selfPickup" !== store.formData.typeOfDelivery),
    },
  };
  const v$ = useVuelidate(rules, store.formData);
  v$.value.$validate();
  errors.value = v$.value.city.$errors
    .map((value) => {
      return value.$message;
    })
    .join(" ");
  return useErrors();
};

watch(store, () => {
  return useValidation();
});

defineExpose({ useValidation });
</script>

<template>
  <FormValidationError :errors="errors" :is-show="showErrorMessage">
    <div class="contact-form-order__row">
      <label for="city" class="contact-form-order__fieldset-label">
        {{ $t("order.form.city") }}
      </label>
      <input
        class="contact-form-order__fieldset-input"
        type="text"
        name="city"
        id="city"
        v-model="store.formData.city"
        :placeholder="$t('orderContactFormSendingCity.placeholder')"
        @blur="useValidation"
      />
    </div>
  </FormValidationError>
</template>
