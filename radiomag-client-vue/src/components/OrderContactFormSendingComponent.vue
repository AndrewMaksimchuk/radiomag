<script setup lang="ts">
import { ref } from "vue";
import { validateComponents } from "@/utils/validateComponents";
import OrderContactFormSendingTypeOfDelivery from "@/components/OrderContactFormSendingTypeOfDeliveryComponent.vue";
import OrderContactFormSendingCity from "@/components/OrderContactFormSendingCityComponent.vue";
import OrderContactFormSendingAddress from "@/components/OrderContactFormSendingAddressComponent.vue";
import OrderContactFormSendingRecipient from "@/components/OrderContactFormSendingRecipientComponent.vue";
import OrderContactFormSendingContactPerson from "@/components/OrderContactFormSendingContactPersonComponent.vue";
import OrderContactFormSendingTelFax from "@/components/OrderContactFormSendingTelFaxComponent.vue";

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

<style lang="scss">
.contact-form-order {
  &__row {
    min-height: 40px;
    padding-bottom: 8px;

    @media (max-width: $breakpoint-tablet) {
      padding-bottom: 20px;
    }
  }
}
</style>
