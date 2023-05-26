import * as validators from "@vuelidate/validators";
import { useI18nStore } from "@/store/i18n";
import { customAlpha } from "./customValidation/alpha";

const i18n = useI18nStore();

const withI18nMessage = validators.createI18nMessage({ t: i18n.t });

export const required = withI18nMessage(validators.required);
export const requiredIf = withI18nMessage(validators.requiredIf, {
  withArguments: true,
});
export const email = withI18nMessage(validators.email);
export const decimal = withI18nMessage(validators.decimal);
export const minLength = withI18nMessage(validators.minLength, {
  withArguments: true,
});
export const maxLength = withI18nMessage(validators.maxLength, {
  withArguments: true,
});
export const alpha = withI18nMessage(customAlpha);
