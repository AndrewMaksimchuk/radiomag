<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationRules } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";
import FormValidationError from "@/components/FormValidationErrorComponent.vue";

const store = useOrderContactForm();
const errorsTelFax = ref("");
const showErrorMessageTelFax = ref(false);
const { required, decimal, minLength } = useValidationRules();

const useValidation = () => {
  const rules = { telFax: { required, decimal, minLength: minLength(10) } };
  const v$ = useVuelidate(rules, store.formData);
  v$.value.$validate();
  errorsTelFax.value = v$.value.telFax.$errors
    .map((value) => {
      return value.$message;
    })
    .join(" ");
  if (errorsTelFax.value.length) {
    return (showErrorMessageTelFax.value = true);
  }
  return (showErrorMessageTelFax.value = false);
};

defineExpose({ useValidation });
</script>

<template>
  <FormValidationError :errors="errorsTelFax" :is-show="showErrorMessageTelFax">
    <div class="contact-form-order__row">
      <label for="telFax" class="contact-form-order__fieldset-label">
        {{ $t("order.form.telFax") }}
      </label>
      <input
        autocomplete="tel"
        class="contact-form-order__fieldset-input"
        type="text"
        name="telFax"
        enterkeyhint="done"
        inputmode="tel"
        id="telFax"
        placeholder="0935853445"
        v-model="store.formData.telFax"
        @blur="useValidation"
      />
    </div>
  </FormValidationError>
</template>
