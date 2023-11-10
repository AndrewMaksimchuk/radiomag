<template>
  <fieldset class="contact-form-order__fieldset">
    <h3 class="contact-form-order__fieldset-header">
      {{ $t("order.form.sending") }}
    </h3>
    <OrderContactFormSendingTypeOfDelivery ref="typeOfDelivery" />
    <OrderContactFormSendingCity ref="city" />
    <OrderContactFormSendingAddress ref="address" />
    <OrderContactFormSendingRecipient ref="recipient" />
    <OrderContactFormSendingContactPerson ref="contactPerson" />
    <OrderContactFormSendingTelFax ref="telFax" />
  </fieldset>
</template>
<style lang="scss" src="./style.scss"></style>
<script setup lang="ts">
import { ref } from "vue";
import { validateComponents } from "@/utils/validateComponents";
import { OrderContactFormSendingTypeOfDelivery } from "@/components";
import { OrderContactFormSendingCity } from "@/components";
import { OrderContactFormSendingAddress } from "@/components";
import { OrderContactFormSendingRecipient } from "@/components";
import { OrderContactFormSendingContactPerson } from "@/components";
import { OrderContactFormSendingTelFax } from "@/components";

const typeOfDelivery = ref<InstanceType<
  typeof OrderContactFormSendingTypeOfDelivery
> | null>(null);
const city = ref<InstanceType<typeof OrderContactFormSendingCity> | null>(null);
const address = ref<InstanceType<typeof OrderContactFormSendingAddress> | null>(
  null
);
const recipient = ref<InstanceType<
  typeof OrderContactFormSendingRecipient
> | null>(null);
const contactPerson = ref<InstanceType<
  typeof OrderContactFormSendingContactPerson
> | null>(null);
const telFax = ref<InstanceType<typeof OrderContactFormSendingTelFax> | null>(
  null
);

const componentsRefs = [
  typeOfDelivery,
  city,
  address,
  recipient,
  contactPerson,
  telFax,
];

const useValidation = () => {
  return validateComponents(componentsRefs);
};

defineExpose({ useValidation });
</script>
