import type { Group } from "../../../dto/Group";

const key = "currency";
export const defaultCurrency = "грн";

export const setCurrency = (data: Group) => {
  localStorage.setItem(key, data.currency);
};

export const getCurrency = () => {
  return localStorage.getItem(key) ?? defaultCurrency;
};
