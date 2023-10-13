<template src="./template.html"></template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationRules } from "@/utils/i18n-validators";
import { useOrderContactForm } from "@/store/orderContactForm";

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

<script lang="ts">
import FormValidationError from "@/components/FormValidationErrorComponent.vue";

export default {
  components: {
    FormValidationError,
  },
};
</script>
