<script setup lang="ts">
import { ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { requiredIf } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "./FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errors = ref("");
const showErrorMessage = ref(false);

const useValidation = () => {
  const v$ = useVuelidate(
    {
      recipient: {
        requiredIf: requiredIf(store.formData.typeOfDelivery !== "selfPickup"),
      },
    },
    store.formData
  );
  v$.value.$validate();
  errors.value = v$.value.recipient.$errors
    .map((value) => value.$message)
    .toString();
  if (errors.value.length) return (showErrorMessage.value = true);
  return (showErrorMessage.value = false);
};

watch(store, () => useValidation());

defineExpose({ useValidation });
</script>

<template>
  <FormValidationError :errors="errors" :is-show="showErrorMessage">
    <div class="contact-form-order__row">
      <label for="recipient" class="contact-form-order__fieldset-label">
        {{ $t("order.form.recipient") }}
      </label>
      <input
        class="contact-form-order__fieldset-input"
        type="text"
        name="recipient"
        id="recipient"
        :placeholder="$t('orderContactFormSendingRecipient.placeholder')"
        v-model="store.formData.recipient"
        @blur="useValidation"
      />
    </div>
  </FormValidationError>
</template>
