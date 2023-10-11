import * as validators from "@vuelidate/validators";
import { useI18nStore } from "@/store/i18n";
import { customAlpha } from "./customValidation/alpha";

export const useValidationRules = () => {
  const i18n = useI18nStore();
  const withI18nMessage = validators.createI18nMessage({ t: i18n.t });

  const required = withI18nMessage(validators.required);
  const requiredIf = withI18nMessage(validators.requiredIf, {
    withArguments: true,
  });
  const email = withI18nMessage(validators.email);
  const decimal = withI18nMessage(validators.decimal);
  const minLength = withI18nMessage(validators.minLength, {
    withArguments: true,
  });
  const maxLength = withI18nMessage(validators.maxLength, {
    withArguments: true,
  });
  const alpha = withI18nMessage(customAlpha);

  return {
    required,
    requiredIf,
    email,
    decimal,
    minLength,
    maxLength,
    alpha,
  };
};
