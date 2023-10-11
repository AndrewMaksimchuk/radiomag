import type { CreateFormOptions } from "@/utils/CreateFormOptions";

export const options: CreateFormOptions<"subscriptions"> = [
  {
    value: "creditCard",
    textI18nKey: "orderContactFormSubscriptions.creditCard",
  },
  {
    value: "cashlessWithoutVAT",
    textI18nKey: "orderContactFormSubscriptions.cashlessWithoutVAT",
  },
  {
    value: "cashlessWithVAT",
    textI18nKey: "orderContactFormSubscriptions.cashlessWithVAT",
  },
];
