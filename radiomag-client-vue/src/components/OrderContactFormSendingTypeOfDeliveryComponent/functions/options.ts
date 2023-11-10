import type { CreateFormOptions } from "@/utils/CreateFormOptions";

export const options: CreateFormOptions<"typeOfDelivery"> = [
  {
    value: "selfPickup",
    textI18nKey: "orderContactFormSendingTypeOfDelivery.selfPickup",
  },
  {
    value: "urkPost",
    textI18nKey: "orderContactFormSendingTypeOfDelivery.urkPost",
  },
  {
    value: "nodePost",
    textI18nKey: "orderContactFormSendingTypeOfDelivery.nodePost",
  },
];
