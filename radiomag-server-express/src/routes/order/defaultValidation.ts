import type { FormData } from "../../../../dto/Order.js";

const shipValidation = (data: FormData) => {
  return Object.entries({ ...data, comment: true }).every((item) => {
    return true === Boolean(item.at(1));
  });
};

export const defaultValidation = (data: FormData) => {
  const { email, typeOfDelivery, contactPerson, telFax } = data;
  return "selfPickup" !== typeOfDelivery
    ? shipValidation(data)
    : Boolean(email && contactPerson && telFax);
};
