<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { POST } from "@/httpClient";
import { useI18nStore } from "@/store/i18n";
import { initFormData } from "@/store/orderContactForm";
import { validateComponents } from "@/utils/validateComponents";
import OrderContactFormContact from "./OrderContactFormContactComponent.vue";
import OrderContactFormUnit from "./OrderContactFormUnitComponent.vue";
import OrderContactFormSubscriptions from "./OrderContactFormSubscriptionsComponent.vue";
import OrderContactFormSending from "./OrderContactFormSendingComponent.vue";
import OrderContactFormFieldsetComment from "./OrderContactFormFieldsetCommentComponent.vue";
import OrderContactFormButtonsGroup from "./OrderContactFormButtonsGroupComponent.vue";
import OrderContactFormNotify from "./OrderContactFormNotifyComponent.vue";

const useI18n = useI18nStore();
const toast = useToast();

const contact = ref<InstanceType<typeof OrderContactFormContact> | null>(null);
const unit = ref<InstanceType<typeof OrderContactFormUnit> | null>(null);
const subscriptions = ref<InstanceType<
  typeof OrderContactFormSubscriptions
> | null>(null);
const sending = ref<InstanceType<typeof OrderContactFormSending> | null>(null);

const componentsRefs = [contact, unit, subscriptions, sending];

const getFormData = () => {
  const form = document.forms.namedItem("orderContacts");
  if (form === null) return undefined;
  const data = { ...initFormData };
  const formData = new FormData(form);
  return Object.keys(data).reduce((acc, key) => {
    const value = formData.get(key);
    if (value === null) return acc;
    return { ...acc, [key]: value };
  }, data);
};

const notifyOptions = {
  timeout: 2000,
};

const notifySuccess = () =>
  toast.success(useI18n.t("orderContactForm.notify.success"), notifyOptions);

const notifyError = () =>
  toast.error(useI18n.t("orderContactForm.notify.error"), notifyOptions);

const notifyWarning = () =>
  toast.warning(useI18n.t("orderContactForm.notify.warning"), notifyOptions);

const sendFormData = async (event: Event) => {
  event.preventDefault();
  if (validateComponents(componentsRefs)) return notifyWarning();

  const data = getFormData();
  if (data === undefined) return "Form not found";

  const responseData = await POST.order(data);
  if (responseData === undefined) return notifyError();

  notifySuccess();
  // TODO: redirect to user orders list
};
</script>

<template>
  <form
    name="orderContacts"
    method="post"
    action="/api/order"
    novalidate="true"
    class="contact-form-order"
    @submit="sendFormData"
  >
    <OrderContactFormContact ref="contact" />
    <OrderContactFormUnit ref="unit" />
    <OrderContactFormSubscriptions ref="subscriptions" />
    <OrderContactFormSending ref="sending" />
    <OrderContactFormFieldsetComment />
    <OrderContactFormButtonsGroup />
  </form>
  <OrderContactFormNotify />
</template>

<style lang="scss">
.contact-form-order {
  $line-height: 40px;

  width: 50%;
  counter-reset: order-contact-form;

  @media (max-width: $breakpoint-tablet) {
    width: 100%;

    $line-height: 33px;
  }

  &__fieldset {
    border: none;
    padding: 0;
    padding-bottom: 27px;

    &::before {
      counter-increment: order-contact-form;
      content: counter(order-contact-form) ". ";
      font-size: 1.8rem;

      @media (max-width: $breakpoint-tablet) {
        font-size: 1.2rem;
      }
    }

    &-header {
      display: inline-block;
      padding-bottom: 20px;
      font-size: 1.8rem;

      @media (max-width: $breakpoint-tablet) {
        padding-bottom: 10px;
        font-size: 1.2rem;
      }
    }

    &-label {
      width: 250px;
      display: inline-block;
      font-size: 1.6rem;
      line-height: $line-height;
      color: var(--color-black-light);

      @media (max-width: $breakpoint-tablet) {
        width: 100%;
        font-size: 1.2rem;
      }
    }

    &-input {
      width: calc(100% - 250px);
      padding-left: 5px;
      font-size: 1.6rem;
      line-height: $line-height;
      color: var(--color-black-light);
      border: solid 1px var(--color-gray-light);

      @media (max-width: $breakpoint-tablet) {
        width: 100%;
      }

      &_w-full {
        width: 100%;
      }
    }

    &-select {
      padding: calc(($line-height - 1.6rem) / 2);
      background-color: var(--color-white);
    }
  }
}
</style>
