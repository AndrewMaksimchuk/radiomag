<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationRules } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "@/components/FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errorsContactPerson = ref("");
const showErrorMessageContactPerson = ref(false);
const { required, alpha } = useValidationRules();
const rules = { contactPerson: { required, alpha } };
const v$ = useVuelidate(rules, store.formData);

const useValidation = () => {
  v$.value.$validate();
  errorsContactPerson.value = v$.value.contactPerson.$errors
    .map((value) => {
      return value.$message;
    })
    .toString();
  if (errorsContactPerson.value.length) {
    return (showErrorMessageContactPerson.value = true);
  }
  return (showErrorMessageContactPerson.value = false);
};

defineExpose({ useValidation });
</script>

<template>
  <FormValidationError
    :errors="errorsContactPerson"
    :is-show="showErrorMessageContactPerson"
  >
    <div class="contact-form-order__row">
      <label for="contactPerson" class="contact-form-order__fieldset-label">
        {{ $t("order.form.contactPerson") }}
      </label>
      <input
        class="contact-form-order__fieldset-input"
        type="text"
        name="contactPerson"
        enterkeyhint="done"
        inputmode="text"
        id="contactPerson"
        :placeholder="$t('orderContactFormSendingContactPerson.placeholder')"
        v-model.trim="store.formData.contactPerson"
        @blur="useValidation"
      />
    </div>
  </FormValidationError>
</template>
