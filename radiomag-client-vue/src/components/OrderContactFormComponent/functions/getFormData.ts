import { initFormData } from "@/store/orderContactForm";

export const getFormData = () => {
  const form = document.forms.namedItem("orderContacts");
  if (null === form) {
    return undefined;
  }
  const data = { ...initFormData };
  const formData = new FormData(form);
  return Object.keys(data).reduce((acc, key) => {
    const value = formData.get(key);
    if (null === value) {
      return acc;
    }
    return { ...acc, [key]: value };
  }, data);
};
