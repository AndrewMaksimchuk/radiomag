<script setup lang="ts">
import { ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { requiredIf } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "./FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errors = ref("");
const showErrorMessage = ref(false);

const useErrors = () => {
  if (errors.value.length) return (showErrorMessage.value = true);
  return (showErrorMessage.value = false);
};

const useValidation = () => {
  const rules = {
    city: {
      requiredIf: requiredIf(store.formData.typeOfDelivery !== "selfPickup"),
    },
  };
  const v$ = useVuelidate(rules, store.formData);
  v$.value.$validate();
  errors.value = v$.value.city.$errors.map((value) => value.$message).join(" ");
  return useErrors();
};

watch(store, () => useValidation());

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
