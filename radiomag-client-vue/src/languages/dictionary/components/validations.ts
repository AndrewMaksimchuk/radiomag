export const ua = {
  validations: {
    required: "Це поле є обовязковим.",
    requiredIf: "Необхідне значення.",
    email: "Значення не є дійсною адресою електронної пошти.",
    decimal: "Значення має бути десятковим.",
    minLength: "Довжина цього поля має бути принаймні {min} символів.",
    maxLength: "Максимальна дозволена довжина становить {max}.",
    alpha: "Значення не в алфавітному порядку.",
  },
};

export const en = {
  validations: {
    required: "This field is required.",
    requiredIf: "The value is required.",
    email: "Value is not a valid email address.",
    decimal: "Value must be decimal.",
    minLength: "This field should be at least {min} characters long.",
    maxLength: "The maximum length allowed is {max}.",
    alpha: "The value is not alphabetical.",
  },
};

export default { ua, en };
