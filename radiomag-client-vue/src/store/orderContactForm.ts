import type { FormData } from "../../../dto/Order";
import { ref } from "vue";
import { defineStore } from "pinia";

export const initFormData: FormData = {
  email: "",
  unit: 0,
  subscriptions: "creditCard",
  typeOfDelivery: "selfPickup",
  city: "",
  address: "",
  recipient: "",
  contactPerson: "",
  telFax: "",
  comment: "",
};

export const useOrderContactForm = defineStore("orderContactForm", () => {
  const formData = ref<FormData>(initFormData);
  const isValid = ref(false);

  return {
    formData,
    isValid,
  };
});
